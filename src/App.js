import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let[todolist,setTodolist]=useState([])
             
  let saveToDolist=(event)=>{
    let toname=event.target.toname.value;
    if(!todolist.includes(toname)){
       let finalTodolist=[...todolist,toname]
       setTodolist(finalTodolist)
    }
    else{
      alert("...todo already exist")
    }
    
    event.preventDefault();

    
  }

let list=todolist.map((value,index)=>{
  return(
    <ToDoListItems value={value} key={index} indexnumber={index} 
    todolist={todolist}
    setTodolist={setTodolist}
    />
  )
})

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <form onSubmit={saveToDolist}>
       
      <input type='text' name='toname'/><button>save</button>
      </form>
      <div className='outerdiv'>
      <ul>
     {list}
     

        </ul>
      </div>
      
       
     
    </div>
  );
}

export default App;
function ToDoListItems({value,indexnumber,todolist,setTodolist}){
  let[status,setstatus]=useState(false)
  let deletrow=()=>{
    let finalData=todolist.filter((v,i)=>i!=indexnumber)
    setTodolist(finalData)
  }
  let checkstatus=()=>{
    setstatus(!status)
  }
  return(
    <li className={(status) ? 'completetodo' : ''} onClick={checkstatus}> {indexnumber+1}{value} <span onClick={deletrow}>&times;</span></li>)
}