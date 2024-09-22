import React from "react";
import { createRoot } from "react-dom/client";
import SampleSurveyComponent from "./components/SampleSurveyComponent";
import App from "./components/App";


// const root = createRoot(document.getElementById("surveyElement"));
const root = createRoot(document.getElementById("sampleSurvey"));
root.render(<App survey_no={0}/>);

// root.render(<SampleSurveyComponent survey_no={}/>);