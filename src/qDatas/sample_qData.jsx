// import data from "./sample_survey"

// export const json = {
//     "title": "설문조사",
//     "description": "{설명1이 들어갈 부분}",
//     "completedHtml": "<div style=\"max-width:688px;text-align:center;margin:16px auto;\">\n\n<div style=\"padding:0 24px;\">\n<h4>Thank you.</h4>\n<p>Your message has been sent successfully.</p>\n</div>\n\n</div>\n\n",
//     "pages": [data],
//     "showQuestionNumbers": "off",
//     "questionDescriptionLocation": "underInput",
//     "questionErrorLocation": "bottom",
//     "completeText": "Next",
//     "widthMode": "static",
//     "width": "720",
//     "fitToContainer": true
//    };
// console.log(json)

import data from "./sample_survey"

const get_json = () => {
    const json = {
        "title": "설문조사",
        "description": "{설명1이 들어갈 부분}",
        "completedHtml": "<div style=\"max-width:688px;text-align:center;margin:16px auto;\">\n\n<div style=\"padding:0 24px;\">\n<h4>Thank you.</h4>\n<p>Your message has been sent successfully.</p>\n</div>\n\n</div>\n\n",
        "pages": [data],
        "showQuestionNumbers": "off",
        "questionDescriptionLocation": "underInput",
        "questionErrorLocation": "bottom",
        "completeText": "Next",
        "widthMode": "static",
        "width": "720",
        "fitToContainer": true
       };
    return json
}

export default get_json