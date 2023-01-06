import React from 'react';
import { Outlet } from 'react-router-dom';
import Dashboardslider from '../../components/Dashboardslider';


const Dashboard = () => {
    return (
        <Dashboardslider>
            <Outlet />
        </Dashboardslider>
    );
};

export default Dashboard;