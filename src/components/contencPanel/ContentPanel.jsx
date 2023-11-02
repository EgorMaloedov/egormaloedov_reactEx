import DefaultBtn from '../../ui_elements/DefaultBtn/DefaulBtn';
import './ContentPanel.css'

function ContentPanel(props){
    return(
        <div className="ContentPanel">
            <header> 
                <p className="title">{props.title}</p>
                {props.btnList ? <div className="buttons"> {props.btnList} </div> : <></>}
               
            </header> 
            <div className="InsideContent">
                {props.child}
            </div>
        </div>
    );
}

export default ContentPanel


