import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";
import QuestionForm from "./QuestionForm";

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

  function handleAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion])
  }

  let renderQuestions = questions.map(question => {
    return <QuestionItem key= {question.id} question={question}/>
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <QuestionForm handleAddQuestion={handleAddQuestion}/>
      <ul>
        {renderQuestions}
      </ul>
    </section>
  );
}

export default QuestionList;
