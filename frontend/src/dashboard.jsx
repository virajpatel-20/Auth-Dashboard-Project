import React,{useEffect,useState} from "react";
import API from "./api";

function Dashboard(){

 const [tasks,setTasks]=useState([]);
 const [title,setTitle]=useState("");

 const fetchTasks = async()=>{

  const res = await API.get("/tasks");

  setTasks(res.data);

 };

 const addTask = async()=>{

  await API.post("/tasks",{title});

  setTitle("");

  fetchTasks();

 };

 const deleteTask = async(id)=>{

  await API.delete("/tasks/"+id);

  fetchTasks();

 };

 const logout = ()=>{

  localStorage.removeItem("token");

  window.location="/";

 };

 useEffect(()=>{

  fetchTasks();

 },[]);

 return(

  <div style={{padding:"50px"}}>

   <h2>Dashboard</h2>

   <button onClick={logout}>Logout</button>

   <br/><br/>

   <input
   value={title}
   onChange={e=>setTitle(e.target.value)}
   placeholder="New Task"
   />

   <button onClick={addTask}>
    Add Task
   </button>

   <br/><br/>

   {tasks.map(task=>(

    <div key={task._id}>

     {task.title}

     <button
     onClick={()=>deleteTask(task._id)}
     >
      Delete
     </button>

    </div>

   ))}

  </div>

 );

}

export default Dashboard;
