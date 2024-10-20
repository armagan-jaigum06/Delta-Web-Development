import { useState } from "react";

export default function CommentsForm() {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };
  let handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
    setFormData({
      username: "",
      remarks: "",
      rating: 5,
    });
  };
  return (
    <div>
      <h4>Give A Comment</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <br /> <br />
        <input
          name="username"
          type="text"
          placeholder="username"
          id="username"
          value={formData.username}
          onChange={handleInputChange}
        />{" "}
        &nbsp; <br /> <br />
        <label htmlFor="remarks">Write you Review</label>
        <br />
        <br />
        <textarea
          name="remarks"
          id="remarks"
          placeholder="write your comment"
          value={formData.remarks}
          onChange={handleInputChange}
        ></textarea>{" "}
        &nbsp; <br /> <br />
        <label htmlFor="rating">Rating</label>
        <br />
        <br />
        <input
          name="rating"
          type="number"
          id="rating"
          min={1}
          max={5}
          value={formData.rating}
          onChange={handleInputChange}
        />
        &nbsp; <br /> <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
