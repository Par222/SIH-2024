"use client";
import NavBar from "@/components/common/NavBar";
import { useEffect, useState } from "react";
import Iframe from "react-iframe";
import { lang } from "@/components/data/test";
import axios from "axios";
const Lang = () => {
  const [tab, setTab] = useState({ tab1: true, tab2: false, tab3: false });
  const [alphabet, setAlphabet] = useState("A");
  const [word, setWord] = useState("");
  const [wordToLearn, setWordToLearn] = useState();
  const [language, setLang] = useState("Hindi");
  const languages = [
    "Hindi",
    "Gujarathi",
    "Tamil",
    "Telgu",
    "Malayalam",
    "Marathi",
    "Nepali",
    "Bihari",
  ];
  const [sentence, setSentence] = useState("");
  const [tsent, setTsent] = useState("");
  const [image, setImage] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("word", word);
    formData.append("lang", language);
    const response = await axios.post(
      "http://localhost:5000/translate",
      formData
    );
    const res = await axios.post("http://localhost:5000/image", formData);
    setImage(res.data);
    setWordToLearn(response.data);
    console.log(response.data);
  };
  const submitHandler1 = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("words", allWords.join(","));
    formData.append("lang", language);
    const response = await axios.post(
      "http://localhost:5000/sentence",
      formData
    );
    setSentence(response.data);
  };
  const fetchImage = async () => {
    const formData = new FormData();
    formData.append("word", sentence);
    formData.append("lang", language);
    const res = await axios.post("http://localhost:5000/image", formData);
    setImage(res.data);
    const response = await axios.post(
      "http://localhost:5000/translate/sent",
      formData
    );
    setTsent(response.data);
  };
  useEffect(() => {
    if (sentence != "") {
      fetchImage();
    }
  }, [sentence]);
  const [allWords, setAllWords] = useState([]);
  return (
    <>
      <NavBar></NavBar>
      <div>
        <h1 className="font-bold text-yellow-600 border-b-4 mx-4 border-yellow-600 text-2xl py-3 font-mono  w-[30%]">
          Lets learn the Lanuage
        </h1>
        <p className="text-base my-2 mx-5 font-bold">
          What do you want to get better at?
        </p>
        <div className="my-1 mx-5 flex space-x-5">
          <span
            className="rounded-md py-1 px-3 bg-gray-400 text-white my-4"
            onClick={() => {
              setTab({ tab1: true, tab2: false, tab3: false });
              setImage("");
            }}
          >
            Learning Words
          </span>
          <span
            className="rounded-md py-1 px-3 bg-gray-400 text-white my-4"
            onClick={() => {
              setTab({ tab1: false, tab2: true, tab3: false });
              setImage("");
            }}
          >
            Learning Sentences
          </span>
          <span className="rounded-md py-1 px-3 bg-gray-400 text-white my-4">
            Conversation
          </span>
        </div>
        {tab.tab1 && (
          <>
            <div className="my-5 mx-10 flex space-x-5 ">
              <div className="w-[40%]">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/3dztlsaWrjw?si=UBnaSq0Wwd-jPFrh"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
              <div className=" w-[60%]">
                {lang.map((l) => (
                  <button
                    onClick={() => setAlphabet(l.letter)}
                    className={
                      alphabet == l.letter
                        ? "py-1 px-3 w-[40px] rounded-sm font-semibold bg-yellow-500 text-lg mx-3  my-1  text-white"
                        : "py-1 px-3 w-[40px] rounded-sm font-semibold text-yellow-500 text-lg mx-3 border-2 my-1  border-yellow-600"
                    }
                  >
                    {l.letter}
                  </button>
                ))}
                <div className="px-5">
                  <p className="my-3 text-sm">Suggested words</p>
                  <div className="flex font-mono  ">
                    {lang
                      .find((l) => l.letter == alphabet)
                      .words.map((w, i) =>
                        i % 2 == 0 ? (
                          <>
                            <div
                              className=" mx-3 bg-yellow-600 text-white px-5 py-1 rounded-full font-medium cursor-pointer"
                              onClick={() => setWord(w.word)}
                            >
                              {w.word}
                            </div>
                          </>
                        ) : (
                          <>
                            <div
                              className=" mx-3 bg-yellow-400 text-yellow-800 px-5 py-1 rounded-full font-medium cursor-pointer"
                              onClick={() => setWord(w.word)}
                            >
                              {w.word}
                            </div>
                          </>
                        )
                      )}
                  </div>
                  <form className="flex flex-col" onSubmit={submitHandler}>
                    <input
                      placeholder="Type a new word .."
                      className="my-4 w-[60%] focus:outline-none py-2 text-sm pr-3 border-b-2 border-yellow-600"
                      value={word}
                      onChange={(e) => setWord(e.target.value)}
                    ></input>
                    <select
                      onChange={(e) => setLang(e.target.value)}
                      className="mt-1 mb-4 w-[60%] focus:outline-none py-2 text-sm pr-3 border-b-2 border-yellow-600"
                    >
                      {languages.map((l) => (
                        <option value={l}>{l}</option>
                      ))}
                    </select>
                    <button
                      type="submit"
                      className="bg-yellow-700 w-[20%] rounded-md py-1 text-white"
                    >
                      Learn
                    </button>
                  </form>
                </div>
                {image != "" && (
                  <>
                    <div className="flex items-center space-x-10 mx-5">
                      <img
                        src={image}
                        className="h-[250px] w-[300px] my-4"
                      ></img>
                      <div className="">
                        <h1 className=" text-lg ">{word}</h1>
                        <h1 className="text-lg font-bold">{wordToLearn}</h1>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </>
        )}
        {tab.tab2 && (
          <>
            <div className="my-5 mx-10 flex space-x-5 items-center ">
              <div className="w-[40%]">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/fr_45z7ejPA?si=h9xbmj1ZAuWdset5"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div className=" w-[60%]">
                <div className="px-5">
                  <p className="my-3 text-sm">Added words to create sentence</p>
                  <div className="flex font-mono  ">
                    {allWords.map((w, i) =>
                      i % 2 == 0 ? (
                        <>
                          <div className=" mx-3 bg-yellow-600 text-white px-5 py-1 rounded-full font-medium cursor-pointer">
                            {w}
                          </div>
                        </>
                      ) : (
                        <>
                          <div className=" mx-3 bg-yellow-400 text-yellow-800 px-5 py-1 rounded-full font-medium cursor-pointer">
                            {w}
                          </div>
                        </>
                      )
                    )}
                  </div>
                  <form className="flex flex-col" onSubmit={submitHandler1}>
                    <input
                      placeholder="Type a new word .."
                      className="my-4 w-[60%] focus:outline-none py-2 text-sm pr-3 border-b-2 border-yellow-600"
                      value={word}
                      onChange={(e) => setWord(e.target.value)}
                    ></input>
                    <select
                      onChange={(e) => setLang(e.target.value)}
                      className="mt-1 mb-4 w-[60%] focus:outline-none py-2 text-sm pr-3 border-b-2 border-yellow-600"
                    >
                      {languages.map((l) => (
                        <option value={l}>{l}</option>
                      ))}
                    </select>
                    <div className="flex space-x-5">
                      <button
                        type="button"
                        className="bg-yellow-700 w-[20%] rounded-md py-1 text-white"
                        onClick={() => {
                          setAllWords([...allWords, word]);
                          setWord("");
                        }}
                      >
                        Add
                      </button>
                      <button
                        type="submit"
                        className="bg-yellow-400 w-[20%] rounded-md py-1 text-white"
                      >
                        Make a sentence
                      </button>
                    </div>
                  </form>
                </div>
                {image != "" && (
                  <>
                    <div className="flex items-center space-x-10 mx-5">
                      <img
                        src={image}
                        className="h-[250px] w-[300px] my-4"
                      ></img>
                      <div className="">
                        <h1 className=" text-sm my-1">{sentence}</h1>
                        <h1 className="text-sm font-bold my-2">{tsent}</h1>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Lang;
