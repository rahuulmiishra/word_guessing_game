

import Button from "../components/button";
import './style.css';

function Keybaord({handleKeyPress}) {

    const arr = [...new Array(26)];
    let start = 65;

    function handleClick(key) {
        return ()=> {
            handleKeyPress(key);
        }
    }

    return <div className="keybaord">
       {arr.map((_,index)=> {
        const currentKey = String.fromCharCode(start++);
            return <Button onClick={handleClick(currentKey)} key={index} label={currentKey} type={Button.Type.ROUNDED} />
       })}
    </div>
}

export default Keybaord;