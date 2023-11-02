import assets from '../../assets/assets'
import './sideBar.css'

import { Link } from 'react-router-dom'

function SideBar(props) {
    return (
        <div className="SideBar visible">
            <img src={assets.svg_Logo} alt="Логотип" id="sidebarLogo" />
            <Link id="profilePhoto" to={'/Profile'}> <img src={props.profile.img} alt={props.profile.name} /> </Link>
                <ul>
                    {
                        props.sideBarElements.map(
                            (element, index) => (
                                <li key={'AdminSidebar_' + index}><Link to={element.Link}> <img src={element.img} alt={element.alt}/> </Link></li>
                            )
                        )
                    }
                </ul>
        </div>
    )
  }
  
  export default SideBar
  