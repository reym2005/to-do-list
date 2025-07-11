import './Todo.css';
import { useEffect, useState } from 'react';
import { MdCheck, MdDeleteForever } from "react-icons/md";
import { ToDoForm } from './ToDoForm';

export const ToDo = () => {
  const todoKey = "store1";

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [task, setTask] = useState(() => {
  const data = localStorage.getItem(todoKey);
  try {
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
});

  const handleTick = (content) => {
    const updatedTasks = task.map((curTask) => {
      if (content === curTask.content) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setTask(updatedTasks);
  };

  const handleSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) return;

    const isDuplicate = task.find((curTask) => curTask.content === content);
    if (isDuplicate) {
      return alert("Same task is already there");
    }

    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  const handleDelete = () => {
    setTask([]);
  };

  const handleDeleteItem = (content) => {
    setTask(task.filter((curTask) => curTask.content !== content));
  };


  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setDate(now.toLocaleDateString());
      setTime(now.toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);


    localStorage.setItem(todoKey, JSON.stringify(task));
  

  return (
    <section className="todo-container">
      <header>
        <h1>ToDo List</h1>
        <h2 className="date-time">{date} - {time}</h2>
      </header>
      <ToDoForm onAddToDo={handleSubmit} />
      <section className="myUnOrdList">
        <ul>
          {task.map((curTask) => (
            <li key={curTask.id} className='todo-item'>
              <span className={curTask.checked ? 'checkList' : 'notCheckList'}>
                {curTask.content}
              </span>
              <button className="check-btn" onClick={() => handleTick(curTask.content)}>
                <MdCheck />
              </button>
              <button className="delete-btn" onClick={() => handleDeleteItem(curTask.content)}>
                <MdDeleteForever />
              </button>
            </li>
          ))}
        </ul>
      </section>
      <button className="clear-btn" onClick={handleDelete}>Clear All</button>
    </section>
  );
};
