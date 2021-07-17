import React from 'react'
import CodeBlock from './CodeBlock'

function FlashcardFront(props) {
    return <>
        <div className="flashcard-front">
            <div className="flashcard-text">
            What will the code below output to the console and why?
            </div>
            <div className="flashcard-code">
                <CodeBlock language={props.language}/>
            </div>
        </div>
    </>
}

export default FlashcardFront
