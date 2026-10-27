import {useState} from 'react'
import { MainLayout } from '../components/layout.js'
import { Aside } from '../components/asideBar.jsx'
import { MainSection } from '../components/mainBar.jsx'
import '../styles/dashBoardCss/MainLayout.css'

export const MainLay = ({dashboard, ShowDashboard}) => {
    const [active, setActive]= useState(1);
  return (
    <MainLayout className='mainLay'>
        <Aside active={active} setActive={setActive} dashboard={dashboard} ShowDashboard={ShowDashboard}/>
        <MainSection active={active}/> 
    </MainLayout>
  )
}
