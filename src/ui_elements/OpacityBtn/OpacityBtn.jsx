import './OpacityBtn.css'

function OpacityBtn({callback, text}){
    return (
        <button className="opacityBtn" onClick={callback}>{text}</button>
    )
}

export default OpacityBtn