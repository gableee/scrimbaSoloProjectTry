

export default function Home({ startQuiz }) { 

    return(
        <div className="home container" id="home">
            <h1>Quizzical</h1>
            <p>Test your knowledge with Quizzical!</p>
           <button onClick={startQuiz}>Start Quiz</button>
        </div>
    )
}