import { useState } from 'react';
import Home from './Components/Home';
import Quiz from './Components/Quiz';

export default function App() {
 const [showPage, setShowPage] = useState("home");

 const renderPage = () => {
  switch (showPage) {
    case "home":
      return <Home startQuiz={() => setShowPage("quiz")}/>;
    case "quiz":
      return <Quiz goHome={() => setShowPage("home")} />;
    default:
      return <Home />;
  }
 }

  return (
    <>
      {renderPage()}
    </>
  );
}


