import { useEffect, useState } from "react";

function App() {
  const [name,setNmae]=useState("");
  useEffect(()=>{
    document.title=name;
  })
  return (
    <>
    <input type="text" value={name} onChange={(e)=>setNmae(e.target.value)} />
    <p>name: {name}</p>
    </>
  );
}

export default App;
