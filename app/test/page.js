"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { languages } from "@/components/data/languages";
import { getCookie, hasCookie, setCookie } from "cookies-next";

import { useRouter } from "next/navigation";
const Test = () => {
  const router = useRouter();
  const lang = languages?.map((language) => {
    return language?.label;
  });
  const age = [
    "5-8 years",
    "9-13 years",
    "14-16 years",
    "18-21 years",
    "25 and above",
  ];

  const options = {
    method: "GET",
    url: "https://stoplight.io/mocks/metadapi/api/35903139/languages",
    headers: { Accept: "application/json", "Ocp-Apim-Subscription-Key": "123" },
  };

  const fetchData = async () => {
    try {
      const { data } = await axios.request(options);
      setLang(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const [tab, setTab] = useState({ tab1: true, tab2: false });
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="rounded-md my-10  w-[400px]   shadow-md">
          {tab.tab1 && (
            <>
              <h1 className="bg-yellow-400 text-center  text-white text-xl w-full py-2 px-5 font-mono">
                Select your language preference
              </h1>
              <div className="flex flex-wrap my-6 items-center justify-center">
                {lang.map((l) => (
                  <button
                  key={l}
                    className="mr-2 my-2 bg-gray-300 text-white font-mono rounded-sm px-5 py-1"
                    translate="no"
                    onClick={() => {
                      const language = languages?.find((lang) => {
                        return lang?.label == l;
                      })?.value;
                      const code = "/auto/" + language;
                      if (hasCookie("googtrans")) {
                        setCookie("googtrans", decodeURI(code));
                      } else {
                        setCookie("googtrans", code);
                      }
                      window.location.reload();
                    }}
                  >
                    {l}
                  </button>
                ))}
              </div>
              <div className="px-3 justify-end flex text-sm">
                <button
                  className="rounded-sm px-5 py-1 my-4 text-white bg-yellow-300"
                  onClick={() => setTab({ tab1: false, tab2: true })}
                >
                  Next
                </button>
              </div>
            </>
          )}
          {tab.tab2 && (
            <>
              <h1 className="bg-yellow-400 text-center  text-white text-xl w-full py-2 px-5 font-mono">
                Select your age Group
              </h1>
              <div className="flex flex-col my-6 items-center justify-center h-[220px] overflow-auto">
                {age.map((a) => (
                  <button className="mr-2  w-[50%] my-2 bg-gray-300 text-white font-mono rounded-sm px-5 py-1">
                    {a}
                  </button>
                ))}
              </div>
              <div className="px-3 justify-end flex text-sm">
                <button
                  className="rounded-sm px-5 py-1 text-white bg-slate-300 mx-5 my-4"
                  onClick={() => setTab({ tab1: true, tab2: false })}
                >
                  Previous
                </button>
                <button
                  className="rounded-sm px-5 py-1 text-white bg-yellow-300 my-4"
                  onClick={() => router.push("/apt")}
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Test;
