import React,{useEffect} from 'react'
import {db} from '../config/firebaseConfig'
import {  collection,doc,setDoc,getDocs } from "@firebase/firestore"
import {useDispatch,useSelector} from 'react-redux'
import {addQuizName,addQuizQuestions} from '../redux/features/questionSlice'
//import { observable } from "@legendapp/state"

const QuizList = () => {
const dispatch=useDispatch()
  // const addData=()=>{
  //   let Quiz=[
  //     {
  //       questionText: 'What is the capital of ENGLAND?',
  //       answerOptions: [
  //         { answerText: 'New York', isCorrect: false },
  //         { answerText: 'London', isCorrect: false },
  //         { answerText: 'Paris', isCorrect: true },
  //         { answerText: 'Dublin', isCorrect: false },
  //       ],
  //     },
  //     {
  //       questionText: 'What is the capital of FRANCE?',
  //       answerOptions: [
  //         { answerText: 'New York', isCorrect: false },
  //         { answerText: 'London', isCorrect: false },
  //         { answerText: 'Paris', isCorrect: true },
  //         { answerText: 'Dublin', isCorrect: false },
  //       ],
  //     }
  //   ]
    
      
    
  //   const ref=doc(db,"Quizes","QuizTwo")

  //   try {
  //     setDoc(ref, {questions:Quiz})
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
 

  // // addData()

  // const getDocsFrom=async()=>{
  //   const colRef = collection(db, "Quizes");
  //   const docsSnap = await getDocs(colRef);

  //   docsSnap.forEach(doc => {
  //     console.log(`${doc.id} -> ${JSON.stringify(doc.data())}`);
  //   })
  // }

  // getDocsFrom();
  useEffect(()=>{
    dispatch(addQuizName("Jjumba"))
    dispatch(addQuizQuestions(3))
  },[])
  console.log("Quiz List was rendered at", new Date().toLocaleTimeString());
  return (
    <div>QuizList </div>
  )
}

export default React.memo(QuizList)