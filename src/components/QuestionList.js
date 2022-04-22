import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {

  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then(res => res.json())
      .then(data => {
        console.log("DATA:", data);
        setQuestions(data)
      })
  }, [])

  function renderQuestions() {
    return questions.map(quesion => {
    // console.log('Question on QuestionList:', question)
      return <QuestionItem quesion={quesion}/>
    })
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {renderQuestions}
      </ul>
    </section>
  );
}

export default QuestionList;
