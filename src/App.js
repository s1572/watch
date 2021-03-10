import './App.css';
import React,{useState} from "react";


const App = ()=>{
    let time = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(time);

    const updateTime = ()=>{
        time = new Date().toLocaleTimeString();
        setCtime(time);
}
setInterval(updateTime, 1000);

return(
<div className="backApp">
  <div>

    <h1 className='App'>{time}</h1>
 </div>
 </div>
);
}

export default App;
