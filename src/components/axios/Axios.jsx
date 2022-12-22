import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Axios = () => {
  const [data, setdata] = useState([]);

  //   useEffect(() => {
  //     axios.get("https://gorest.co.in/public/v2/posts").then((res) => {
  //       console.log(res.data);
  //       setdata(res.data);
  //     });
  //   },[]);

  // useEffect(()=>{
  //     fetch("https://gorest.co.in/public/v2/posts").then((res)=>{
  //         return res.json()

  //     }).then((item)=>{
  //         console.log(item);
  //         setdata(item)
  //     },[])
  //})

  useEffect(() => {
    async function getdata() {
      const da =await axios
        .get("https://gorest.co.in/public/v2/posts")
        .then((data) => {
          console.log(data.data);
          setdata(data.data)
        }).catch((err)=>{
            console.log("erro",err);
        })
    }
    getdata()
  },[]);

  return (
    <div>
      <h1>axios</h1>
      {data.map((item) => {
        const { id, user_id, title, body } = item;
        return (
          <div key={id}>
            <div>{user_id}</div>
            <div>{title}</div>
            <div>{body}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Axios;
