import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import css from "../Styles/Form.module.scss";
import VisitingCard from "./VisitingCard";
import VisitingCard2 from "./VisitingCard2";

const VisitorForm = () => {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    logo: "",
    name: "",
    description: "",
    email: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "logo" && files.length > 0) {
      // Convert the logo file to a data URL
      const reader = new FileReader();
      reader.onload = function (event) {
        setFormData((prevData) => ({
          ...prevData,
          logo: event.target.result,
        }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(formData.phone)) {
      alert("Phone number should be a 10-digit number.");
      return;
    }

    const requiredFields = ["name", "email", "phone"];
    const isAnyRequiredFieldEmpty = requiredFields.some(
      (field) => formData[field].trim() === ""
    );

    if (isAnyRequiredFieldEmpty) {
      alert("Please fill in all required fields.");
      return;
    }
    setData(formData);
    setModal(true);
  };

  console.log(data);

  return (
    <div className={css.container}>
      {modal ? (
        <div>
          <VisitingCard data={data} />
          <VisitingCard2 data={data} />
        </div>
      ) : (
        <div>
          <h1>Visitor Card Form</h1>
          <form onSubmit={handleSubmit} className={css.form}>
            <div className={css.formdata}>
              <label>Logo:</label>
              <input
                type="file"
                name="logo"
                onChange={handleChange}
                accept=".jpg, .jpeg .png"
                required
              />
            </div>

            <div className={css.formdata}>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your name..."
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={css.formdata}>
              <label>Description:</label>
              <textarea
                name="description"
                placeholder="Enter Dasc..."
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <div className={css.formdata}>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={css.formdata}>
              <label>Address:</label>
              <input
                type="text"
                name="address"
                placeholder="Enter Address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div className={css.formdata}>
              <label>Phone: </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter Your Phoneno..."
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default VisitorForm;
