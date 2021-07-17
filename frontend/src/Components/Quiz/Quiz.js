import React, {useState, useEffect} from 'react'
import '../CSS/Quiz.css'

import FlashcardFront from './FlashcardFront'
import FlashcardBack from './FlashcardBack'
import FlashcardAnswer from './FlashcardAnswer'

const sampleAnswers = [{id: 0, value: "Superman", answer:true}, {id: 1, value: "Superwoman", answer: false}, {id: 2, value: "Who knows?", answer: false}]

function Quiz() {
    const [language, setLanguage] = useState('javascript')
    const [answered, setAnswered] = useState(false)
    const [selectedValue, setSelectedValue] = useState(false)



    function Flashcard () {
        if (!answered) {
            return <>
            <FlashcardFront language={language}/>
            <FlashcardBack answered={answered} setAnswered={setAnswered} sampleAnswers={sampleAnswers} selectedValue={selectedValue} setSelectedValue={setSelectedValue}/> 
            </>
        } 
        return <><FlashcardAnswer language={language}/></>
    }


    return (
        <>
            <header className="header">
                <label htmlFor="language"></label>
                <select value={language} onChange={e=> setLanguage(e.target.value)} name="language" id="language">
                <option value="Choose...">Choose...</option>
                <option value="javascript">JavaScript</option>
                <option value="react">React</option>
                </select>
            </header>
            {/* {answered && selectedValue===sampleAnswers.find(item=>item.answer).answer} ||  */}
            <main className="flex-container">
                <Flashcard />
            </main>


        </>
    )
}

export default Quiz
