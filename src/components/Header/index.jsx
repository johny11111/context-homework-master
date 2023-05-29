import styles from './style.module.css'

import DataContext from '../../Data';
import { useContext, useState } from 'react';


export default function Header() {
   let valueData = useContext(DataContext)

   const [login, setlogin]= useState("login")
 
   return (
      <header className={styles.header}>
         <div className={styles.user}>
            {/* TODO */}
            {valueData.user[0].name}
         </div>
         <nav>
            <ul>
               <li> <a href="#">home</a> </li>
               <li> <a href="#">about</a> </li>
            </ul>
            {/* 
            
            sign in or sign out button - with functionality 
            -  sign in function:
            onClick  = put some user { name : 'avi', id: '88772653', img : '' } in the context
            -  sign out function:
            onClick  = delete this user from the context
            
            */}
            <button onClick={()=>{
             valueData.setUser([{name: "yoni"}]) 
            }}>login</button>
            
            <button onClick={()=>{
             valueData.setUser([{name: "gust"}]) 
            }}>logout</button>
         </nav>
      </header>
   )
}
