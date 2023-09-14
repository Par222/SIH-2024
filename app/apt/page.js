"use client";
import NavBar from "@/components/common/NavBar";
import { useState } from "react";
import { test } from "@/components/data/test";
import GenericModal from "@/components/common/GenericModal";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
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
  const subs= ['Maths','Science' ,'Language']
  const [Langscore, setLangScore] = useState(0);
  const [modal,setModal]=useState(false)
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
    if(section==2){
        setQuestion(10)
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
                      className="w-[80%] px-5 rounded-full border-yellow-400 text-yellow-400 border-2 my-2 text-lg py-1 hover:bg-yellow-400 hover:text-white"
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
                    <span className="w-[80%] px-5 rounded-full border-yellow-400 text-yellow-400 border-2 my-2 text-lg py-1  hover:bg-yellow-400 hover:text-white"
                    onClick={() => scoreHandler(option, 1, question-1)}>
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
                    <span className="w-[80%] px-5 rounded-full border-yellow-400 text-yellow-400 border-2 my-2 text-lg py-1  hover:bg-yellow-400 hover:text-white"
                    onClick={() => scoreHandler(option, 2, question-1)}>
                      {dict[i] + ".\t\t" + option}
                    </span>
                  ))}
                </div>
              </div>
            )}
           
          </div>
         
        </div>
        <div className="flex justify-end mx-10">
                <button className="bg-yellow-600 text-white px-5 py-2 rounded-md my-3" onClick={()=>setModal(true)}>Submit</button>
            </div>
            {
                modal && <GenericModal textpos="Go to Home" navigator={()=>{}} title="Test Analysis" >
                  <div className="flex justify-between mx-4 my-5 items-center px-10">
                  {subs.map((t,i)=><>
                    <div className="flex flex-col items-center">
                        <h1 className="text-sm my-3">{t} Score Analysis</h1>
                        <CircularProgressbar
                      value={
                        ((t=='Maths'?Mathscore:t=='Science'?sciscore:Langscore)*10
                      ).toFixed(0)}
                      style={{ width: 200, height: "200px", pathColor: "yellow-400",}}
                      strokeWidth={10}
                      text={
                        ((t=='Maths'?Mathscore:t=='Science'?sciscore:Langscore)*10
                      ).toFixed(0) + "%"
                      }
                      className="w-[100px] h-[100px] font-semibold mb-5"
                    ></CircularProgressbar>
                         
                         <p className="my-2 text-yellow-700 font-semibold font-mono">{t=='Maths'?Mathscore:t=='Science'?sciscore:Langscore} / 10  Correct</p>
                    </div>
                    </>)}
                  </div>
                </GenericModal>
            }
      
      </div>
    </>
  );
};
export default Aptitude;
