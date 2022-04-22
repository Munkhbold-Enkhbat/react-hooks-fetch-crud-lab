import React, { useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList(questions, setQuestions) {

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then(res => res.json())
      .then(data => setQuestions(data))
  }, [])

  
    let renderQuestions = questions.map(question => {
      return <QuestionItem key= {question.id} question={question}/>
    })

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
