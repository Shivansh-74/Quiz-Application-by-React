import { useState } from 'react';
import './App.css';
import { javaQuiz, pyQuiz, reactQuiz, phpQuiz, frontendQuiz, djangoQuiz, sqlQuiz } from './Data/QuizData';
import Quiz from './Components/Quiz.jsx';

function App() {
  const [selectedQuiz, setSelectedQuiz] = useState(pyQuiz); // Default to Python quiz
  const [showQuiz, setShowQuiz] = useState(false); // Control visibility of the quiz component
  const [activeQuizType, setActiveQuizType] = useState(""); // Track the active button

  const selectQuiz = (quizType) => {
    setShowQuiz(true); // Show the quiz component when a quiz is selected
    setActiveQuizType(quizType); // Set the active button type
    switch (quizType) {
      case "java":
        setSelectedQuiz(javaQuiz);
        break;
      case "py":
        setSelectedQuiz(pyQuiz);
        break;
      case "php":
        setSelectedQuiz(phpQuiz);
        break;
      case "react":
        setSelectedQuiz(reactQuiz);
        break;
      case "frontend":
        setSelectedQuiz(frontendQuiz);
        break;
      case "django":
        setSelectedQuiz(djangoQuiz);
        break;
      case "sql":
        setSelectedQuiz(sqlQuiz);
        break;
      default:
        setSelectedQuiz(pyQuiz);
    }
  };

  return (
    <>
      <div className='flex flex-wrap justify-center px-3 mx-1 gap-3'>
      <button
      onClick={() => selectQuiz("java")}
      className={`py-2 px-4 mx-2  border rounded-[10px]  ${activeQuizType === "java" ? 'bg-gray-400 text-white' : 'bg-gray-200'}`}
        >
          Java
        </button>
        <button
          onClick={() => selectQuiz("py")}
          className={`py-2 px-4 mx-2  border rounded-[10px]  ${activeQuizType === "py" ? 'bg-gray-400 text-white' : 'bg-gray-200'}`}
          >
          Python
        </button>
        <button
          onClick={() => selectQuiz("php")}
          className={`py-2 px-4 mx-2  border rounded-[10px]  ${activeQuizType === "php" ? 'bg-gray-400 text-white' : 'bg-gray-200'}`}
        >
          Php
        </button>
        <button
          onClick={() => selectQuiz("react")}
          className={`py-2 px-4 mx-2 border rounded-[10px] ${activeQuizType === "react" ? 'bg-gray-400 text-white' : 'bg-gray-200'}`}
          >
          React
        </button>
        <button
          onClick={() => selectQuiz("frontend")}
          className={`py-2 px-4 mx-2 border rounded-[10px] ${activeQuizType === "frontend" ? 'bg-gray-400 text-white' : 'bg-gray-200'}`}
        >
          Frontend
        </button>
        <button
          onClick={() => selectQuiz("django")}
          className={`py-2 px-4 mx-2 border rounded-[10px] ${activeQuizType === "django" ? 'bg-gray-400 text-white' : 'bg-gray-200'}`}
          >
          Django
          </button>
          <button
          onClick={() => selectQuiz("sql")}
          className={`py-2 px-4 mx-2 border rounded-[10px] ${activeQuizType === "sql" ? 'bg-gray-400 text-white' : 'bg-gray-200'}`}
          >
          SQL
          </button>
          <div className={` py-3 w-[100%] ${!showQuiz ? 'flex' : 'hidden'}`} >
                <h1 className='text-2xl font-bold py-4 text-center mx-auto'>Select Your Topic</h1>
          </div>
          </div>
          <div className={showQuiz ? 'flex' : 'hidden'}>
          <Quiz quizType={selectedQuiz} />
      </div>
    </>
  );
}

export default App;
