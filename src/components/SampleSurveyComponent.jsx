import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { themeJson } from "./SampleSurveyComponentTheme";
import data from "../qDatas/multi_survey"
// import "./index.css";
// import { json } from "../qDatas/sample_qData.js";
// import  get_json  from "../qDatas/sample_qData.js";
// 샘플 컨포넌트입니다.

const get_json = (survey_no) => {
    const json = {
        "title": "설문조사",
        "description": "{설명1이 들어갈 부분}",
        "completedHtml": "<div style=\"max-width:688px;text-align:center;margin:16px auto;\">\n\n<div style=\"padding:0 24px;\">\n<h4>Thankㄴ you.</h4>\n<p>Your message has been sent successfully.</p>\n</div>\n\n</div>\n\n",
        "pages": data[survey_no],
        "showQuestionNumbers": "off",
        "questionDescriptionLocation": "underInput",
        "questionErrorLocation": "bottom",
        "completeText": "다음",
        "widthMode": "static",
        "width": "720",
        "fitToContainer": true
       };
    return json
}

function SampleSurveyComponent({survey_no}) {
    console.log(">>>>>>>", survey_no)
    // const survey = new Model(json); // json 자체가 json object였음
    const survey = new Model(get_json(survey_no)); // json 자체가 json object였음
    // console.log(json_obj)
    // const survey = new Model(json_obj);

    survey.applyTheme(themeJson);
    survey.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
    });
    return (<Survey model={survey} />);
}




export default SampleSurveyComponent;