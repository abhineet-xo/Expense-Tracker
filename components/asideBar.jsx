import icon from "../src/images/icon.png"
import { menuItems } from '../utils/menuItems'
import {  Signout } from '../src/images/icons/icons'
import '../styles/dashBoardCss/aside.css'


export const Aside= ({active, setActive,dashboard, ShowDashboard}) => {
  return (
    <aside>
        <div className='user'>
          <img src={icon} alt='userImg'/>
          <div className='info'>
            <h2>Abhineet</h2>
            <p>Your Money</p>
          </div>
        </div>
        <ul className='menuItems'>
          {menuItems.map((item)=>{
            return <li key={item.id}
            onClick={()=>{setActive(item.id)}}
            className={active===item.id?"active":""}>
              {}
              <span>{item.title}</span>
            </li>
            
          })}
        </ul>
        <button className="Logout-btn" onClick={()=>{ShowDashboard(false);}}><div >
        <Signout/>LogOut
        </div></button>
        
    </aside>
  )
}
