import './searchbar.css';
import Task from './task';
import React, { useState } from 'react';


function Searchbar() {
    const [task, setTask] = useState([
        "Go to the market",
    ]);   
    const handleDelete = (index) => {
        const newTasks = task.filter((_, i) => i !== index);
        setTask(newTasks);
    }

    const handleAddition = () => {
        const inputElement = document.querySelector('.box');
        const newAdd = inputElement.value.trim();
        if(newAdd !== '') {
        fetch('http://localhost:3001/addtask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ task: newAdd }) 
            
        }).then(res => res.json())
          .then(data =>{
              if (data === 'success') {
                  setTask([...task, newAdd]);
                  inputElement.value = '';
              }
                
          });
        }
    }

    return (
        <div className='frame'>
            <input type="text" placeholder="Enter task and Press Add" className='box' />
            <button className='main-button' onClick={() => { handleAddition() }}>ADD</button>

            <div>
                <Task task={task} handleDelete={handleDelete} />
            </div>
        </div>
    )
}

export default Searchbar;   