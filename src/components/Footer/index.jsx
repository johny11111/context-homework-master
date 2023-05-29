import React from 'react'
import styles from './style.module.css'

import DataContext from '../../Data';
import { useContext } from 'react';


export default function Footer() {
   let valueData = useContext(DataContext)
   return (
      <footer className={styles.footer}>
         {/* TODO */}
         <p>All rights reserved - {valueData.user[0].name} is connected</p>
      </footer>
   )
}
