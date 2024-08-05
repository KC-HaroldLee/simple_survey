const SurveyItem = ({ id, summary, surveyCode}) => { // 앞으로 얼마나 많은 파라미터가 넘어갈지 모르겠음
    return (
      <div className="SurveyItem">
        <div className="info">
          <span className="author_info">
            | 서베이아이디 : {id} | 서베이요약 : {summary} |
          </span>
          <br />
          {/* <span className="date">{new Date(created_date).toLocaleString()}</span> */}
        </div>
        <div className="summary">{summary}</div>
      </div>
    );
  };
  
  export default SurveyItem;