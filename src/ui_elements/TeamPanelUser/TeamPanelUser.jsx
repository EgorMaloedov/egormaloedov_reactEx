import './TeamPanelUser.css'
import ModalMenu from '../ModalMenu/ModalMenu'
import { useState } from 'react'

function TeamPanelUser(props){
    const [modalActive, setModalActive] = useState(false)
    return (
    <div className="TeamPanelUser">
        <div className="PhotoWrap"> <img src={props.user.photo} alt={props.user.name} className="userPhoto" /> </div>
        <div className="userInfo">
            <div className="userTitle">
                <span className="userName">{props.user.name}</span>
                <span className="userStatus">{props.user.status ? '' : 'Не авторизирован'}</span>
                <span className="userEmail">{props.user.email}</span>
            </div>
            <div className="userTags">
                {props.user.tags.map((tag,index)=>(<span key={props.user.photo+index} className="tag">{tag}</span> ))}
            </div>
        </div>
        <button className="editUser" onClick={()=>setModalActive(!modalActive)}>...</button>
        <ModalMenu active={modalActive} setActive={setModalActive}/>
    </div>
    )
}


export default TeamPanelUser