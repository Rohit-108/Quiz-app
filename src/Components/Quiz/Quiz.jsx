
import {data} from '../../assets/data';
import "./Quiz.css";
import { useState } from "react";

const Quiz = () => {

    let [index,setIndex] = useState(0)
    let [question,setQuestion] = useState(data[index]);


  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      <h2>
        {index + 1}.{question.question}
      </h2>
      <ul>
        <li>{question.option1}</li>
        <li>{question.option2}</li>
        <li>{question.option2}</li>
        <li>{question.option2}</li>
      </ul>
      <button>Next</button>
      <div className="index">1 of 5 questions</div>
    </div>
  );
}

export default Quiz