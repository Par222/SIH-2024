"use client";
import NavBar from "@/components/common/NavBar";
import { useState } from "react";
import { test } from "@/components/data/test";
const Aptitude = () => {
  const [section, setSection] = useState({
    tab1: true,
    tab2: false,
    tab3: false,
  });
  const [Mathscore, setMathScore] = useState(0);
  const dict = {
    0: "A",
    1: "B",
    2: "C",
    3: "D",
  };
  const [Langscore, setLangScore] = useState(0);
  const [sciscore, setsciScore] = useState(0);
  const scoreHandler = (ans, section, index) => {
    console.log(ans,test[section].questions[index].correct_answer)
    if (index < test[section].questions.length-1) setQuestion(question + 1);
    else {
      if (section == 0)
       { setSection({
          tab2: true,
          tab1: false,
          tab3: false,
        });
        setQuestion(1)
    }
      if (section == 1)
      {  setSection({
          tab2: false,
          tab1: false,
          tab3: true,
        });
        setQuestion(1)
    }
    }

    if (section == 0)
      if (test[section].questions[index].correct_answer == ans)
        setMathScore(Mathscore + 1);
    if (section == 2)
      if (test[section].questions[index].correct_answer == ans)
        setLangScore(Langscore + 1);
    if (section == 1)
      if (test[section].questions[index].correct_answer == ans)
        setsciScore(sciscore + 1);
  };

  const [question, setQuestion] = useState(1);
  return (
    <>
      <div>
        <NavBar></NavBar>
        <div className="px-5">
          <h1 className="text-2xl font-extrabold font-sans my-3 text-yellow-400 border-b-4 border-yellow-400 py-2 w-[40%]">
            {" "}
            Lets Check How well you are with Your basics{" "}
          </h1>
        </div>
        <div className="px-5 flex space-x-10 my-6 items-baseline cursor-pointer">
          <span
            className={
              section.tab1
                ? "text-yellow-400 py-2 border-b-4 border-yellow-400 text-lg font-semibold "
                : "py-2 font-semibold text-lg text-gray-400"
            }
            onClick={() =>
              setSection({
                tab1: true,
                tab2: false,
                tab3: false,
              })
            }
          >
            Maths
          </span>
          <span
            className={
              section.tab2
                ? "text-yellow-400 py-2 border-b-4 border-yellow-400 text-lg font-semibold "
                : "py-2 font-semibold text-lg text-gray-400"
            }
            onClick={() =>
              setSection({
                tab1: false,
                tab2: true,
                tab3: false,
              })
            }
          >
            Science & G.K.
          </span>
          <span
            className={
              section.tab3
                ? "text-yellow-400 py-2 border-b-4 border-yellow-400 text-lg font-semibold "
                : "py-2 font-semibold text-lg text-gray-400"
            }
            onClick={() =>
              setSection({
                tab1: false,
                tab2: false,
                tab3: true,
              })
            }
          >
            Language
          </span>
        </div>
        <div className="flex space-x-10">
          <div className="w-[15%] cursor-pointer my-10 flex flex-wrap mx-5 font-semibold shadow-md py-6 px-2 ">
            {test[0].questions.map((q, i) => (
              <span
                onClick={() => setQuestion(i + 1)}
                className={
                  question == i + 1
                    ? " w-[45px] py-1 text-center  rounded-md bg-yellow-500 text-white mr-2 my-2"
                    : "text-yellow-500 mr-2 w-[45px] py-1 my-2 text-center rounded-md border-2 border-yellow-400"
                }
              >
                {i + 1}
              </span>
            ))}
          </div>
          <div className="flex justify-center w-[85%] my-10">
            {section.tab1 && (
              <div className=" w-[50%] rounded-md shadow-md">
                <h1 className="text-lg bg-yellow-600 font-mono font-medium text-white py-2 px-4 text-center">
                  {test[0].questions[question - 1].question_number +
                    ".\t" +
                    test[0].questions[question - 1].question}{" "}
                </h1>
                <div className="flex flex-col font-medium items-center my-5 cursor-pointer ">
                  {test[0].questions[question - 1].options.map((option, i) => (
                    <span
                      className="w-[80%] px-5 rounded-full border-yellow-400 text-yellow-400 border-2 my-2 text-lg py-1"
                      onClick={() => scoreHandler(option, 0, question-1)}
                    >
                      {dict[i] + ".\t\t" + option}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {section.tab2 && (
              <div className=" w-[50%] rounded-md shadow-md">
                <h1 className="text-lg bg-yellow-600 font-mono font-medium text-white py-2 px-4 text-center">
                  {test[1].questions[question - 1].question_number +
                    ".\t" +
                    test[1].questions[question - 1].question}{" "}
                </h1>
                <div className="flex flex-col font-medium items-center my-5 ">
                  {test[1].questions[question - 1].options.map((option, i) => (
                    <span className="w-[80%] px-5 rounded-full border-yellow-400 text-yellow-400 border-2 my-2 text-lg py-1">
                      {dict[i] + ".\t\t" + option}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {section.tab3 && (
              <div className=" w-[50%] rounded-md shadow-md">
                <h1 className="text-lg bg-yellow-600 font-mono font-medium text-white py-2 px-4 text-center">
                  {test[2].questions[question - 1].question_number +
                    ".\t" +
                    test[2].questions[question - 1].question}{" "}
                </h1>
                <div className="flex flex-col font-medium items-center my-5 ">
                  {test[2].questions[question - 1].options.map((option, i) => (
                    <span className="w-[80%] px-5 rounded-full border-yellow-400 text-yellow-400 border-2 my-2 text-lg py-1">
                      {dict[i] + ".\t\t" + option}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <span className="text-lg text-black">{Mathscore}</span>
      </div>
    </>
  );
};
export default Aptitude;