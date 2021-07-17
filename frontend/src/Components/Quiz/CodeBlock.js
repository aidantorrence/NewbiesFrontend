import { CopyBlock, dracula } from "react-code-blocks";

export default function CodeBlock(props) {


    return (
      <CopyBlock
        text="<Highlight className='language-name-of-snippet'>
        {'code snippet to be highlighted'}
      </Highlight>"
        language={props.language}
        showLineNumbers={false}
        theme="dracula"
        wrapLines
      />
    );
  }