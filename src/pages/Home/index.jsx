import React, { useState, useContext } from 'react'
import styles from './style.module.css'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Favorites from '../../components/Favorites'
import Form from '../../components/Form'
import Footer from '../../components/Footer'
import LastProducts from '../../components/LastProducts'
import DataContext from "../../Data"

export default function Home() {

   const [user, setUser] = useState([{ name : "gust", id: '', img : '' }])

   console.log(user);
   return (
      <div>
         <DataContext.Provider value={ {user , setUser } }>
            <Header />
            <Hero />
            <Favorites />
            <LastProducts />
            <Form />
            <Footer />
         </DataContext.Provider>


      </div>
   )
}
