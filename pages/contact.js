import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = async function (e) {
    e.preventDefault();

    const data = { name, email, phone, description };

    try {
      const res = await fetch("http://localhost:3000/api/postcontact/", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      });
      const jsonData = await res.text();

      console.log("success", data);

      setName("");
      setEmail("");
      setPhone("");
      setDescription("");
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  const changeHandler = function (e) {
    if (e.target.name === "phone") {
      setPhone(e.target.value);
    }
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "description") {
      setDescription(e.target.value);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form onSubmit={submitHandler}>
        <div className={styles["input-details"]}>
          <label htmlFor="name" className={styles.formLabel}>
            Name:
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            value={name}
            onChange={changeHandler}
          />
        </div>
        <div className={styles["input-details"]}>
          <label htmlFor="exampleInputEmail1" className={styles.formLabel}>
            Email address:
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={changeHandler}
          />
          {/* <div id="emailHelp" className="form-text">
            We will never share your email with anyone else.
          </div> */}
        </div>
        <div className={styles["input-details"]}>
          <label htmlFor="phone" className={styles.formLabel}>
            Phone:
          </label>
          <input
            type="number"
            className="form-control"
            id="phone"
            value={phone}
            name="phone"
            onChange={changeHandler}
          />
        </div>
        <div className={styles["input-details"]}>
          <label htmlFor="desc">Description: </label>
          <textarea
            className="form-control"
            placeholder="Leave your description here "
            id="desc"
            name="description"
            style={{ height: "100px" }}
            onChange={changeHandler}
            value={description}
            // maxLength={100}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
