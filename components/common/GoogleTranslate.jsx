"use client";

import { useEffect, useState } from "react";
import { getCookie, hasCookie, setCookie } from "cookies-next";

const languages = [
  { label: "English", value: "en" },
  { label: "Hindi", value: "hi" },
  { label: "Bengali", value: "bn" },
  { label: "Telugu", value: "te" },
  { label: "Marathi", value: "mr" },
  { label: "Tamil", value: "ta" },
  { label: "Urdu", value: "ur" },
  { label: "Gujarati", value: "gu" },
  { label: "Kannada", value: "kn" },
  { label: "Odia", value: "or" },
  { label: "Malayalam", value: "ml" },
  { label: "Punjabi", value: "pa" },
  { label: "Assamese", value: "as" },
  { label: "Maithili", value: "mai" },
  { label: "Santali", value: "sat" },
  { label: "Kashmiri", value: "ks" },
  { label: "Nepali", value: "ne" },
  { label: "Konkani", value: "kok" },
  { label: "Sindhi", value: "sd" },
  { label: "Sanskrit", value: "sa" },
  { label: "Manipuri", value: "mni" },
];

function GoogleTranslate(props) {
  const [selected, setSelected] = useState("English");

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "auto",
        autoDisplay: false,
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      "google_translate_element"
    );
  };

  const langChange = (event) => {
    event.preventDefault();
    const val = event.target.value;
    const language = languages?.find((lang) => {
      return lang?.label == val;
    })?.value;
    const code = "/auto/" + language;
    if (hasCookie("googtrans")) {
      setCookie("googtrans", decodeURI(code));
      setSelected(val);
    } else {
      setCookie("googtrans", code);
      setSelected(val);
    }
    window.location.reload();
  };

  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;

    if (hasCookie("googtrans")) {
      const val = encodeURI(getCookie("googtrans"))?.slice(-2);
      const language = languages?.find((lang) => {
        return lang?.value == val;
      })?.label;
      setSelected(language);
    } else {
      setSelected("English");
    }
  }, []);

  return (
    <>
      <div
        id="google_translate_element"
        style={{
          width: "0px",
          height: "0px",
          position: "absolute",
          left: "50%",
          zIndex: -99999,
          display: "none",
        }}
      ></div>

      <select value={selected} onChange={langChange} translate="no">
        {languages?.map((language) => {
          return (
            <option value={language?.label} key={language}>
              {language?.label}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default GoogleTranslate;
