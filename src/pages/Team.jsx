import ContentPanel from "../components/contencPanel/ContentPanel"
import TeamPanelUser from "../ui_elements/TeamPanelUser/TeamPanelUser"
import assets from '../assets/assets'
import DefaultBtn from "../ui_elements/DefaultBtn/DefaulBtn"
import OpacityBtn from "../ui_elements/OpacityBtn/OpacityBtn"
import SearchForm from "../ui_elements/SearchForm/SearchForm"
import Users from '../../users.json'
import { useState } from "react"

function buttonsList(btnCallback='',btnText=''){

    const [searchTerm, setSearchTerm] = useState('')
    return(
        <>
        <SearchForm onChangeInput={(e)=>setSearchTerm(e.target.value)} placeholder={'Поиск по Email'} btnImage={<img src={assets.svg_Search}/>}/>
        <DefaultBtn callback={btnCallback} text={btnText}/>
        </> 
    )
}



const UsersList = Users.map( (element, index) => ( 
        <TeamPanelUser
        key={element.email+index}
                user = {{
                    photo : element.image,
                    name : element.name,
                    email : element.email,
                    status: true,
                    tags : element.permissions
                }}
            />
 ))


const Team = ( ) => {
    
    return (
        <ContentPanel 
        title = {'Команда'}
        hasBtn = {true}
        btnList = {
            buttonsList(()=>{alert('Добавили')}, 'Добавить пользователя')
        }
        child = {UsersList}
        />
    )
} 

export default Team