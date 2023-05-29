import React from 'react'
import styles from './style.module.css'

import DataContext from '../../Data';
import { useContext } from 'react';



export default function Hero() {
   let valueData = useContext(DataContext)
   return (
      <div className={styles.hero}>
         <h1>my store</h1>
         {/* TODO */}
         <p>nice to see you {valueData.user[0].name} <br /> what do you want to buy? </p>
         <button>click here</button>
      </div>
   )
}
