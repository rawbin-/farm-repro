import Highlighter from 'react-highlight-words';

// import Highlighter from 'react-highlight-words/dist/main.js';
interface Props {
    text?: string;
}
function HighlightKeyword({ text }: Props) {
    const inputValue = 'abcdefg'
    return (
        <Highlighter
            highlightStyle={{ backgroundColor: 'transparent', padding: 0 }}
            highlightClassName="keyword-highlight"
            searchWords={[inputValue]}
            textToHighlight={text || 'cde'}
        />
    );
}

export default HighlightKeyword;
