import React,{ useState, useEffect } from 'react';
import {fetchedData} from '../../api';
import {Line, Bar} from 'react-chartjs-2';
import style from './Chart.module.css';



const Chart=({data:{confirmed,recovered, deaths }, country})=>{

const [dailyData, setdailyData] = useState([])


useEffect(() => {
    const fetchData=async()=>{
        setdailyData(await fetchedData())
    }
    fetchData() 
},[])

const lineChart =(

    dailyData.length?( <Line
    data={{
        labels:dailyData.map(({date})=>date),
        datasets:[{
            data:dailyData.map(({confirmed})=>confirmed),
            label:"infected",
            borderColor:"yellow",
            fill:true
        },{
            data:dailyData.map(({deaths})=>deaths),
            label:"deaths",
            borderColor:"red",
            fill:true
        }]
    }}  
    />): null

)


const barChart =(
    confirmed?
    (
        <Bar
        data={{
            labels:['Infected', 'Recovered', 'Deaths'],
            datasets:[{
                label:'',
                backgroundColor:[
                    "skyblue", "yellow", "red"
                ],
                data:[confirmed.value, recovered.value, deaths.value ]
            }]
        }}
        options={{
            legend:{ dispaly:false},
            title:{display:true, text:`current state in ${country}`}
        }}      
        />
    ): ""

)

    return(
        <div className={style.container}>
          {
              country ?barChart:
              lineChart
          }  

        </div>
    )
}

export default Chart;