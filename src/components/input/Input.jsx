import React from 'react'
import styles from './input.module.scss'
import {useRef} from 'react'
const Input = ({addNewItem}) => {
    let title = ""
    let detail = ""
    let inputTitleRef = useRef()
    let inputDetailRef = useRef()
    const detailChangeHandler = (e) => {
        detail = e.target.value;
    }
    const titleChangeHandler = (e) => {
        title = e.target.value;
    }
    const submit = () => {
        if (title && detail) {
            
            addNewItem(title, detail)
        } else {
            alert("No Way!!! No empty field.")
        }
        inputTitleRef.current.value=""
        inputDetailRef.current.value=""
    }
    return (
      <div>
        <div className="list-group w-50 mx-auto">
          <input
            type="text"
            className="list-group-item "
            placeholder="Enter title"
            onChange={(e) => titleChangeHandler(e)}
            ref={inputTitleRef}
          />
          <input
            type="text"
            className="list-group-item mb-3"
            placeholder="Enter detail"
            onChange={(e) => detailChangeHandler(e)}
            ref={inputDetailRef}
          />
        </div>
        <button onClick={submit} className={styles.submitButton}>
          add
        </button>
      </div>
    );
}

export default Input
