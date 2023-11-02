import './DefaultBtn.css'

function DefaultBtn({callback, text}){
    return (
        <button className="defaultBtn" onClick={callback}>{text}</button>
    )
}

export default DefaultBtn