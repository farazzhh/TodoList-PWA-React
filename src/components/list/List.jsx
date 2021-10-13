import React from "react";
import List_item from "../list_item/List_item";
import { useState } from "react";
import styles from "./List.module.scss";
import Input from "../input/Input";
const List = () => {
  const [todoList, setTodoList] = useState([
    {
      title: "running",
      detail: "running at 8 am",
      complete: true,
    },
    {
      title: "running",
      detail: "running at 8 am",
      complete: true,
    },
    {
      title: "rest",
      detail: "take a rest at 9:30",
      complete: false,
    },
    {
      title: "running",
      detail: "running at 8 am",
      complete: true,
    },
    {
      title: "rest",
      detail: "take a rest at 9:30",
      complete: false,
    },
  ]);

  const taskClick = ({ index }) => {
    let copy = [...todoList];
    copy[index] = {
      title: copy[index].title,
      detail: copy[index].detail,
      complete: !copy[index].complete,
    };
    setTodoList(copy);
  };
  const addNewItem = (title, detail) => {
    let copy = [...todoList];
    let copyItem = {
      title: `${title}`,
      detail: `${detail}`,
      complete: true,
    };
    copy.push(copyItem);
    setTodoList(copy);
    console.log(copy);
    console.log(todoList);
  };
  const deleteTask = (index) => {
    let copy = [...todoList];
    console.log(index);
    copy.splice(index , 1)
    console.log(copy);
    setTodoList(copy)
  }
  return (
    <div className="h-100">
      <div className=" text-center container py-1 ">
        <h1 className="card-title text-light">Todo List (React)</h1>
        <Input addNewItem={addNewItem} />
        <div className="mt-3 ">
          <ul className={styles.list}>
            {todoList.map((item, index) => (
              <List_item
                item={item}
                key={index}
                index={index}
                taskClick={taskClick}
                deletTask={deleteTask}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default List;
