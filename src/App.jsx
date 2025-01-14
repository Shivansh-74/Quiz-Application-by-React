import { useState } from 'react';
import './App.css';
import { javaQuiz, pyQuiz, reactQuiz, phpQuiz, frontendQuiz, djangoQuiz, sqlQuiz,cppQuiz, ipcConstitutionQuiz,gitGithubQuiz,mongoDBQuiz,awsQuiz } from './Data/QuizData';
import Quiz from './Components/Quiz.jsx';
import { useDispatch } from 'react-redux';
import { setQuizName } from '../src/redux/slice.js';

function App() {
  const [selectedQuiz, setSelectedQuiz] = useState(null); // No default quiz selected
  const [activeQuizType, setActiveQuizType] = useState(""); // Track the active button
  const [isSidebarVisible, setIsSidebarVisible] = useState(true); // Toggle sidebar visibility

  const dispatch = useDispatch();

  const selectQuiz = (quizType) => {
    setActiveQuizType(quizType); // Set the active button type
    dispatch(setQuizName(quizType));

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
      case "gitGithubQuiz":
        setSelectedQuiz(gitGithubQuiz);
        break;
      case "ipcConstitutionQuiz":
        setSelectedQuiz(ipcConstitutionQuiz);
        break;
      case "mongoDBQuiz":
        setSelectedQuiz(mongoDBQuiz);
        break;
      case "awsQuiz":
        setSelectedQuiz(awsQuiz);
        break;
      case "cppQuiz":
        setSelectedQuiz(cppQuiz);
        break;
      default:
        setSelectedQuiz(null);
    }
    setIsSidebarVisible(false); // Close sidebar after selecting a quiz
  };

  return (
    <div className="relative flex">
      {/* Toggle button for mobile */}
      <button
        onClick={() => setIsSidebarVisible(!isSidebarVisible)}
        className="md:hidden p-2 bg-gray-500 text-white rounded-md m-2 fixed top-4 left-8  z-20 mt-1"
      >
        {isSidebarVisible ? 'Close Topics' : 'Open Topics'}
      </button>

      {/* Sliding sidebar */}
      <div
      className={`fixed top-0 left-0 h-full w-[250px] bg-gray-100 rounded p-4 z-10 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
        isSidebarVisible ? 'translate-x-0' : '-translate-x-full'
      } md:relative md:translate-x-0 md:w-1/3 md:block`}
    >
      
        <div className="flex flex-col space-y-2 mt-16 ">
          <button
            onClick={() => selectQuiz("java")}
            className={`py-2 px-4 border rounded-md hover:bg-gray-300 ${
              activeQuizType === "java" ? 'bg-gray-400 text-white' : 'bg-gray-200'
            }`}
          >
            Java
          </button>
          <button
            onClick={() => selectQuiz("py")}
            className={`py-2 px-4 border rounded-md hover:bg-gray-300 ${
              activeQuizType === "py" ? 'bg-gray-400 text-white' : 'bg-gray-200'
            }`}
          >
            Python
          </button>
          <button
            onClick={() => selectQuiz("php")}
            className={`py-2 px-4 border rounded-md hover:bg-gray-300 ${
              activeQuizType === "php" ? 'bg-gray-400 text-white' : 'bg-gray-200'
            }`}
          >
            Php
          </button>
          <button
            onClick={() => selectQuiz("react")}
            className={`py-2 px-4 border rounded-md hover:bg-gray-300 ${
              activeQuizType === "react" ? 'bg-gray-400 text-white' : 'bg-gray-200'
            }`}
          >
            React
          </button>
          <button
            onClick={() => selectQuiz("frontend")}
            className={`py-2 px-4 border rounded-md hover:bg-gray-300 ${
              activeQuizType === "frontend" ? 'bg-gray-400 text-white' : 'bg-gray-200'
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => selectQuiz("django")}
            className={`py-2 px-4 border rounded-md hover:bg-gray-300 ${
              activeQuizType === "django" ? 'bg-gray-400 text-white' : 'bg-gray-200'
            }`}
          >
            Django
          </button>
          <button
            onClick={() => selectQuiz("sql")}
            className={`py-2 px-4 border rounded-md hover:bg-gray-300 ${
              activeQuizType === "sql" ? 'bg-gray-400 text-white' : 'bg-gray-200'
            }`}
          >
            SQL
          </button>
          <button
            onClick={() => selectQuiz("gitGithubQuiz")}
            className={`py-2 px-4 border rounded-md hover:bg-gray-300 ${
              activeQuizType === "gitGithubQuiz" ? 'bg-gray-400 text-white' : 'bg-gray-200'
            }`}
          >
           Git and Github
          </button>
          <button
            onClick={() => selectQuiz("mongoDBQuiz")}
            className={`py-2 px-4 border rounded-md hover:bg-gray-300 ${
              activeQuizType === "mongoDBQuiz" ? 'bg-gray-400 text-white' : 'bg-gray-200'
            }`}
          >
            Mongo DB
          </button>
          <button
            onClick={() => selectQuiz("awsQuiz")}
            className={`py-2 px-4 border rounded-md hover:bg-gray-300 ${
              activeQuizType === "awsQuiz" ? 'bg-gray-400 text-white' : 'bg-gray-200'
            }`}
          >
      AWS
          </button>
          <button
            onClick={() => selectQuiz("cppQuiz")}
            className={`py-2 px-4 border rounded-md hover:bg-gray-300 ${
              activeQuizType === "cppQuiz" ? 'bg-gray-400 text-white' : 'bg-gray-200'
            }`}
          >
      C++
          </button>
        </div>
      </div>

      {/* Quiz area */}
      <div className="flex-1 md:w-2/3 bg-white p-4">
        {selectedQuiz ? (
          <Quiz quizType={selectedQuiz} />
        ) : (
          <h1 className="text-2xl font-bold text-gray-500 text-center mt-4">Please select a topic</h1>
        )}
      </div>
    </div>
  );
}

export default App;
