import React, {useState} from 'react'




function FlashcardBack({sampleAnswers, answered, setAnswered}) {
    const [isShownAnswer, setIsShownAnswer] = useState(false)
    const [selectedValue, setSelectedValue] = useState(false)


    return <>
    {!isShownAnswer ? <div onClick={()=>setIsShownAnswer(true)} className="answer">
        Show Answers
    </div> : <div className="flashcard-back">
        {sampleAnswers.map(item => <div className={["answers", `selected${selectedValue===item.value}`].join(" ")} onClick={()=>setSelectedValue(item.value)} key={item.id}>{item.value}</div>)}
        <div className="answer-submit">
            <button onClick={()=>setAnswered(true)}>
                Submit
            </button>
        </div>
    </div>
    }
    </>


}

export default FlashcardBack
