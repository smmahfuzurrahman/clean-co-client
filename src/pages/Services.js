import axios from 'axios';
import React, { useEffect, useState } from 'react';
import fetcher from '../api';


const Services = () => {
    const [services, setServices ] = useState([]);
    console.log(services);
    useEffect(() => {
        //axios.get("http://localhost:5000/service").then(res => console.log(res.data));

        (async () => {
            const res = await fetcher.get("/service");
            setServices(res.data);
        })();
    }, [])
    return (
        <div>
            <h1>This is Services</h1>
            <h1>This is Services</h1>
            <h1>This is Services</h1>
            <h1>This is Services</h1>
            <h1>This is Services</h1>
            <h1>This is Services</h1>
            <h1>This is Services</h1>
            <h1>This is Services</h1>
        </div>
    );
};

export default Services;