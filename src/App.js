import React, { Component } from 'react';
import {Card, Chart, Counter } from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import image from './image.png';
import {Link} from '@material-ui/core';

class App extends Component {

    state={
        data:{},
        country:''
    }

    async componentDidMount(){
        const data = await fetchData()
        this.setState({data:data})
    }


    handleCountryChange=async(country)=>{
        const data = await fetchData(country)
        this.setState({data:data,country:country })
    }

    render() {
        return (
            <div>
                <div style={{display:"flex",alignItems:"center", justifyContent:"center", margin:"20px"}}>
                <img src={image}  alt="covid-19" />
                </div>
                <div className={styles.container}>
                <Card data={this.state.data} />
                <Counter handleCountryChange={this.handleCountryChange} />
                <Chart data={this.state.data} country={this.state.country}/>
                <h2 style={{fontFamily:"arial"}}>Made by <Link target="blank" href="https://www.linkedin.com/in/sri-hari-2b15b7184/" >
    srihari
  </Link> </h2>       
            </div>
            </div>
        )
    }
}

export default  App;
