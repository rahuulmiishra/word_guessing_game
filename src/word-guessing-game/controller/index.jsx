
import './style.css';
import Button from '../components/button';
import Text  from '../components/text';

function Controller({question, handleNext, handlePrev, showNext, showPrev}) {
    return <div className='controller'>
        {showPrev &&  <Button onClick={handlePrev} type={Button.Type.CIRCULAR} label="Prev" />}
        <Text text={question} type={Text.StyleType.QUESTION_TITLE} />
        {showNext && <Button onClick={handleNext}  type={Button.Type.CIRCULAR}  label='Next' />  }
    </div>
}

export default Controller;