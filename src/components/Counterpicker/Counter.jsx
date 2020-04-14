import React , { useState, useEffect }from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import style from './Counter.module.css';
import { countries } from '../../api'


const Counter=({handleCountryChange})=>{

    
    const [country, setCountry] = useState([])


    useEffect(() => {
        const fetch = async()=>{
            setCountry(await countries())
        }

        fetch()
    }, [setCountry])


    return(
        <div className={style.container}>
            <FormControl>
                <NativeSelect defaultValue=""  onChange={e=>handleCountryChange(e.target.value)}>
                    <option value="">Global</option>
                    {
                       country.map((count,i)=><option key={i} value={count}>{count}</option>) 
                    }
                </NativeSelect>
            </FormControl>

        </div>
    )
}

export default Counter;