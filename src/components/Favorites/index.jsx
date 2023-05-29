import React from 'react'
import styles from './style.module.css'
import ItemCard from '../ItemCard'
import items from '../../assets/favorites.json'

export default function Favorites() {

   {/* TODO  - remove if disconnected and show please check in message*/ }
   return (
      <div className={styles.main}>
         <h2>your favorite:</h2>
         <div className={styles.itemList}>
            {items.map((item) => (
               <ItemCard key={item.id} item={item} />
            ))}
         </div>
      </div>
   )
}
