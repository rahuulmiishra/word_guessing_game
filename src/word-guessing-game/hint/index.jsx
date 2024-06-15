import Input from '../components/input';
import Text from '../components/text';

import './style.css';

function Hint({hint,handleInput,answerGivenByUser, id }) {

    const arr = hint.split("");

    function handleMyInput(index) {
        return function(value) {
            handleInput({index, value});
        }
    }

  

    return <div className='hint'>
        {arr.map((data,index)=> {
            if(data === '_') {
              return  <Input key={ `${index}${id}`} value={answerGivenByUser[index] || ''} onInput={handleMyInput(index)} />
            } else {
               return  <Text  key={ `${index}${id}`} text={data} type={Text.StyleType.ANSWER_HINT} />
            }
        })}
           
            
    </div>
}

export default Hint;