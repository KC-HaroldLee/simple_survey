import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { themeJson } from "./SampleSurveyComponentTheme";
// import "./index.css";
import { json } from "../qDatas/sample_qData.js";

// 샘플 컨포넌트입니다.

function SampleSurveyComponent() {
    const survey = new Model(json);
    survey.applyTheme(themeJson);
    survey.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
    });
    return (<Survey model={survey} />);
}

export default SampleSurveyComponent;