import React from "react";
import { createRoot } from "react-dom/client";
import SampleSurveyComponent from "./components/SampleSurveyComponent";
import App from "./components/App";


// const root = createRoot(document.getElementById("surveyElement"));
const root = createRoot(document.getElementById("sampleSurvey"));

root.render(<SampleSurveyComponent />);