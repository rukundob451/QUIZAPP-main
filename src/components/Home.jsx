import React,{useContext,useEffect,useState,useRef} from 'react'
import { GlobalContext } from '../App'
import QuizList from './QuizList'
const Home = () => {
  const {store,setStore}=useContext(GlobalContext)
  const optionRef=useRef(null);
  const valueRef=useRef(null);
 
  const[questionStructure,setQuestion]=useState({
            prompt: "",
            answerOptions: [],
            correctAnswer: "",
            feedbackSuccess: "",
            feedbackError:""
  })

  const[initialQuiz,setQuiz]=useState({
    name: "",
    Questions:[],
    duration: 0
  }
  )

  //handle Question Change
  const handleQuestionChange=(e)=>{
    const {value,name}=e.target
    setQuestion({
      ...questionStructure,
        [name]:value
    })
      
  }

  //handle Question Change
  const handleQuizChange=(e)=>{
    const {value,name}=e.target
    setQuiz({
      ...initialQuiz,
        [name]:value
    })
      
  }
  
  return (
    <div>
       {JSON.stringify(questionStructure)}
        <h1>Quiz Name</h1>
        {JSON.stringify(initialQuiz)}
        <input 
          name="prompt" 
          value={questionStructure.prompt} 
          placeholder='Please Enter Question Name' 
          onChange={handleQuestionChange}
        />

        <input 
          name="name" 
          value={initialQuiz.name} 
          placeholder='Please Enter Quiz Name' 
          onChange={handleQuizChange}
        />  
        <QuizList/>
    </div>
  )
}

export default Home