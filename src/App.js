import React, { useState } from "react";
import SampleContainer from "./containers/SampleContainer";
import tests from "./test/tests";
import Axios from "axios";
import MainContainer from "./containers/MainContainer";
import Main from "./components/Main";

function App() {
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const setState1 = e => {
    setId(e.target.value);
  };
  const setState2 = e => {
    setPass(e.target.value);
  };
  const setState3 = e => {
    setName(e.target.value);
  };
  const setState4 = e => {
    setEmail(e.target.value);
  };
  const setState5 = e => {
    setAge(e.target.value);
  };
  const setState6 = e => {
    setPhone(e.target.value);
  };
  const onClick = async () => {
    const post = {
      id: id,
      pass: pass,
      name: name,
      age: age,
      email: email,
      phone: phone,
    };
    Axios.post("/api/json/add", post)
      .then(function (res) {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return <MainContainer></MainContainer>;
}

export default App;
