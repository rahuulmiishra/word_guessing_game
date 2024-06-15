
import './style.css';


const Type = {
    CIRCULAR: 'circle',
    ROUNDED: 'rounded'
}

function Button({onClick=()=>{}, label='',type=Type.ROUNDED}={}) {

    const className = `btn_${type}`;

    return <button className={className} onClick={onClick}>{label}</button>
}

Button.Type = Type;

export default Button;