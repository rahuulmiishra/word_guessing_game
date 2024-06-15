
import './style.css';


 const StyleType = {
    SCORE:'score',
    QUESTION_TITLE: 'question',
    ANSWER_HINT:'answer'
}

function Text(props) {

    const {text='', type="score"} = props || {};

    let className = '';

    className += ` text_${type}`

    return <span className={className}>{text}</span>
}
Text.StyleType = StyleType;



export default Text;