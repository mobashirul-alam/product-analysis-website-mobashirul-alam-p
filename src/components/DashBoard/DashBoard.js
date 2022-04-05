import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const DashBoard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/product-analysis-website/main/data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className='grid grid-cols-2 gap-6'>
            <div className='mx-auto'>
                <h1 className='text-center text-xl font-medium mb-6'>Month Wise Sell</h1>
                <LineChart width={400} height={250} data={data}>
                    <Line type="monotone" dataKey="sell" stroke="#82ca9d"></Line>
                    <XAxis dataKey="month"></XAxis>
                    <YAxis dataKey="sell"></YAxis>
                    <Legend></Legend>
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
            <div className='mx-auto'>
                <h1 className='text-center text-xl font-medium mb-6'>Investment VS Revenue</h1>
                <AreaChart width={400} height={250} data={data}>
                    <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8"></Area>
                    <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8"></Area>
                    <XAxis dataKey="month"></XAxis>
                    <YAxis></YAxis>
                    <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                    <Legend></Legend>
                    <Tooltip></Tooltip>
                </AreaChart>
            </div>
            <div className='mx-auto'>
                <h1 className='text-center text-xl font-medium mb-6'>Investment VS Revenue</h1>
                <BarChart width={400} height={250} data={data}>
                    <Bar dataKey="investment" stackId="a" fill="#8884d8"></Bar>
                    <Bar dataKey="revenue" stackId="a" fill="#82ca9d"></Bar>
                    <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                    <XAxis dataKey="month"></XAxis>
                    <YAxis></YAxis>
                    <Legend></Legend>
                    <Tooltip></Tooltip>
                </BarChart>
            </div>
        </div>
    );
};

export default DashBoard;