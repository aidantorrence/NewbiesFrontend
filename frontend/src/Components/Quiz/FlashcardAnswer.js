import React from 'react'
import CodeBlock from './CodeBlock'

function FlashcardAnswer(props) {
    return <>
        <div className="flashcard-answer">
            <div className="flashcard-text">
            Who knows?
            </div>
            <div className="flashcard-code">
                <CodeBlock language={props.language}/>
            </div>
        </div>
    </>
}

export default FlashcardAnswer
