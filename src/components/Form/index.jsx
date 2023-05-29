import React from 'react'
import styles from './style.module.css'

import DataContext from '../../Data';
import { useContext , useRef } from 'react';


export default function Form() {
   
   let valueData = useContext(DataContext)
   let valueRef = useRef()
   // BONUS !!!
   // TODO- change name by submit
   // TODO- form not shown if not connected
   return (
      <div className={styles.form}>
         <form >
            <h4>change your details</h4>

            <input ref={valueRef} type="text" placeholder="your name..." />

            <button onClick={(e)=>{
               e.preventDefault()
               console.log(valueData);
            
               valueData.user[0].name !== "gust"  ? valueData.setUser(prev => [{name:valueRef.current.value}]) : alert("you most login first");
            }} type="submit"> change now!</button>
         </form>
      </div>
   )
}
