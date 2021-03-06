import React, { useState, useEffect } from 'react';
import CircleOutDemo from '../components/DonutChart/CircleOutDemo';
import Table from '../components/DonutChart/Table';
import { json } from 'd3';
import '../components/DonutChart/CircleOutDemo.scss';

function DonutChartPage() {

    const [donutData, dataLoader] = useState({ data: [] });

    useEffect(() => {
        json('https://d3-datasets.firebaseio.com/donut_third_data.json')
            .then(data => dataLoader({ data }))
            .catch(error => console.log(error))
    }, []);

    const updateData = (data) => {
        dataLoader({ data })
    }

    const renderChart = () => {
        if(donutData.length === 0) {
            return 'No Data Yet'
        }
        return (
            <div className='graph-container'>
                <CircleOutDemo 
                    data={donutData.data}
                    width={800}
                    height={800}
                    innerRadius={140}
                    outerRadius={200}
                />
                <Table data={donutData.data} updateData={updateData} />
            </div>
        )
    };

  return (
    <div className="App">
        <h2>Donut Chart</h2>
        {renderChart()}
    </div>
  );
}

export default DonutChartPage;