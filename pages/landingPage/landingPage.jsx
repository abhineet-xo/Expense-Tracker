import React from 'react'
import '../../styles/landingPage.css'

export const LandingPage = ({ShowDashboard}) => {
  return (
    <>
    <nav><button onClick={()=>{ShowDashboard(true)}}>Get Started</button></nav>
    <div className='mainLanding'>
      <div className="containerLanding">
        <h1>
        Stay on Top of Your Budget: Income & Expense Manager

        </h1>
        <div className="paragraph-landing">
          <p>Welcome to your ultimate financial companion! Our Expense Calculator is designed to help you take control of your finances effortlessly. With an intuitive interface, you can easily track your income and expenses, visualize your financial trends, and gain insights into your spending habits. </p>
        </div>
      </div>
        <div className="imagecontainer"></div>
    </div>
     <div className='mainLanding'>
     <div className="imagecontainer2"></div>
     <div className="containerLanding">
       <h1>
       Stay on Top of Your Budget: Income & Expense Manager

       </h1>
       <div className="paragraph-landing">
         <p>Review your past 10 transactions at a glance and make informed decisions to enhance your financial well-being. Whether you're saving for a goal or simply trying to manage your budget, our tool empowers you to achieve your financial objectives with confidence. Start your journey towards better financial health today! </p>
       </div>
     </div>
       

   </div>
   <footer>
    All Copy Rights Are Reserved
   </footer>
   </>
  )
}


