import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };
  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      userName: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">Full Name</label> &nbsp;
      <input
        placeholder="enter your name"
        type="text"
        value={formData.fullName}
        onChange={handleInputChange}
        id="fullName"
        name="fullName"
      />
      &nbsp; <br /> <br />
      <label htmlFor="userName">User Name</label> &nbsp;
      <input
        placeholder="enter your username"
        type="text"
        value={formData.userName}
        onChange={handleInputChange}
        id="userName"
        name="userName"
      />
      &nbsp; <br /> <br />
      <label htmlFor="password">Password</label> &nbsp;
      <input
        placeholder="enter your password"
        type="password"
        value={formData.password}
        onChange={handleInputChange}
        id="password"
        name="password"
      />
      &nbsp; <br /> <br />
      <button>Submit</button>
    </form>
  );
}
