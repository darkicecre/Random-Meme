import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.scss";

interface MyObj{
  url: string;
}
interface MyData{
  [index:number]: MyObj;
}

function App() {
  var EmptyData: MyData;
  const [datas, setData] = useState<any[]>([]);
  // var datas:object[];
  useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setData(data.data.memes));
  },[])

  function random(){
    
  }

  return (
    <>
      <button className="random" onClick={random}>Random Meme</button>
      
    </>
  );
}

export default App;
