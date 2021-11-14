import { useState } from 'React';


const WeatherForecast = () => {
    var axios = require('axios');
    var config = {
        method: 'get',
        url: 'https://localhost:44357/WeatherForecast',
        headers: {}
    };
    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });


    const { data } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 100,
        maxColumns: 6,
    });
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid autoPageSize pagination {...data} />
        </div>
    )
}