
import { useState } from 'react'
import { LandingPage } from '../pages/landingPage/landingPage.jsx'
import { MainLay } from './MainLayout.jsx';

export const App = () => {
  const[dashboard, ShowDashboard] = useState(false);
  return (
    <div >
      {!dashboard ? (
        <LandingPage ShowDashboard={ShowDashboard} />
      ) : (
        <MainLay dashboard={dashboard} ShowDashboard={ShowDashboard} />
      )}
      
    </div> 
  )
}



