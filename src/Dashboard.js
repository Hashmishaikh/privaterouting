import React from 'react';
import auth from './auth';
import './Dashboard.css'

const Dashboard = (props) => {
    return (
        <div className='dashboard'>
            <h4>Welcome to Dashboard</h4>
           <button 
           onClick={() => {
               auth.logout(() => {
                   props.history.push('/')
               })
           }} className="dashboardBtn">Logout</button> 
        </div>
    )
}
export default Dashboard;