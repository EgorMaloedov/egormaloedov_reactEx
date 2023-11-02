import './ModalMenu.css'



function ModalMenu({active, setActive, children}){
    return(
            <div className={active ? "Modal_content active" : "Modal_content"} onClick={e => {e.stopPropagation(); setActive(!active)}}>
                {children}
            </div>
    )
}

export default ModalMenu