import './AdminPanel.css'
import SideBar from './components/sideBar/SideBar'
import assets from './assets/assets'
import Avatar from './assets/Avatar.jpg'

import Analitycs from './pages/Analitycs'
import Banners from './pages/Banners'
import Blog from './pages/Blog'
import Chats from './pages/Chats'
import Data from './pages/Data'
import Finances from './pages/Finances'
import Moderation from './pages/Moderation'
import Profile from './pages/Profile'
import Team from './pages/Team'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

const SidebarNavElements = [
  {img:assets.AdminSideBar.svg_Analitycs, alt:'Анаrлитика', mobile:true, Link : '/Analitycs'},
  {img:assets.AdminSideBar.svg_Account, alt:'Профиль', mobile:true, Link : '/Profile'},
  {img:assets.AdminSideBar.svg_Moderation, alt:'Модерация', mobile:true, Link : '/Moderation'},
  {img:assets.AdminSideBar.svg_Chats, alt:'Чаты', mobile:true, Link : '/Chats'},
  {img:assets.AdminSideBar.svg_Banners, alt:'Баннеры', mobile:true, Link : '/Banners'},
  {img:assets.AdminSideBar.svg_Team, alt:'Команда', mobile:true, Link : '/Team'},
  {img:assets.AdminSideBar.svg_Blogs, alt:'Блог', mobile:true, Link : '/Blog'},
  {img:assets.AdminSideBar.svg_Finances, alt:'Курс валют', mobile:true, Link : '/Finances'},
  {img:assets.AdminSideBar.svg_Data, alt:'Другое', mobile:false, Link : '/Data'},
  {img:assets.AdminSideBar.svg_LogOut, alt:'Выйти', mobile:true, Link : '/Data'},  
]

function AdminPanel() {
  return (
    <div id="AdminPanel">
    <BrowserRouter>
    <SideBar
      profile = {{img : Avatar, name : 'Lui Johnson'}}
      sideBarElements = {SidebarNavElements}
    />
    <div className="Content">
      <Routes>
                <Route path='/' element={<Team/>}/>
                <Route path='/Analitycs' element={<Analitycs/>}/>
                <Route path='/Banners' element={<Banners/>}/>
                <Route path='/Blog' element={<Blog/>}/>
                <Route path='/Chats' element={<Chats/>}/>
                <Route path='/Data' element={<Data/>}/>
                <Route path='/Finances' element={<Finances/>}/>
                <Route path='/Moderation' element={<Moderation/>}/>
                <Route path='/Profile' element={<Profile/>}/>
                <Route path='/Team' element={<Team/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    </div>
  )
  
}

export default AdminPanel
