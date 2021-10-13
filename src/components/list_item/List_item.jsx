import React from "react";
import styles from './list_item.module.scss'
import {useState , useEffect} from 'react'


const List_item = ({ item,index ,taskClick,deletTask}) => {
  const [inputData , setInputData] = useState([])
    let textButton = "";
    let styleItem = {}
    if (item.complete) {
          textButton = "Done"; 
          styleItem = styles.item;
    } else {
        textButton = "Undone"
        styleItem = styles.completed_item;
    }
    return (
      <li className={styleItem}>
        <h3>{item.title}</h3>
        <p className={styles.border}>{item.detail}</p>
        <div className={styles.buttons}>
          {item.complete ? (
            <button
              className={styles.undone_buttons}
              onClick={() => taskClick({index})}
            >
              {textButton}
            </button>
          ) : (
            <button
              className={styles.done_buttons}
              onClick={() => taskClick({index})}
            >
              {textButton}
            </button>
          )}
          <button className={styles.remove_buttons} onClick={()=>deletTask(index)}>remove</button>
        </div>
      </li>
    );
};

export default List_item;
