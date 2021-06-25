import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class SimpleForm extends Component {
  state = {
    person: {
      name: "",
      age: "",
      country: "",
      gender: "",
      panCard: "",
      passport: "",
      license: "",
    },
    countries: [
      "India",
      "China",
      "England",
      "United States of America",
      "South Africa",
    ],
  };

  handleChange = (e) => {
    const { currentTarget: input } = e;
    let s1 = { ...this.state };
    if (
      input.type === "checkbox"
        ? (s1.person[input.name] = input.checked)
        : (s1.person[input.name] = input.value)
    )
      this.setState(s1);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Hello I'm ${this.state.person.name}` +
        "\n" +
        `I am ${this.state.person.age} years old` +
        "\n" +
        `I live in ${this.state.person.country}` +
        "\n" +
        `My Gender is ${this.state.person.gender}` +
        "\n" +
        `I have a Pan Card : ${this.state.person.panCard ? "Yes" : "No"}` +
        "\n" +
        `I have a Passport : ${this.state.person.passport ? "Yes" : "No"}` +
        "\n" +
        `I have a License : ${this.state.person.license ? "Yes" : "No"}`
    );
  };

  render() {
    let { name, age, country, gender, panCard, passport, license } =
      this.state.person;
    const { countries } = this.state;
    return (
      <div className="container mt-5">
        <h5>Enter New Details</h5>
        <div className="form-group mb-2">
          <label htmlFor="name" className="mb-2">
            Name :{" "}
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            placeholder="Enter Name"
            value={name}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="name" className="mb-2">
            Age :{" "}
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            name="age"
            placeholder="Enter Age"
            value={age}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="country" className="mb-2">
            Country :{" "}
          </label>
          <select
            className="form-control"
            name="country"
            id="country"
            value={country}
            onChange={this.handleChange}
          >
            <option disabled value="">
              Select the country
            </option>
            {countries.map((c1) => (
              <option>{c1}</option>
            ))}
          </select>
        </div>
        <div className="mb-2">
          <label htmlFor="gender">Gender : </label>
        </div>
        <div className="form-check form-check-inline mb-2 ">
          <input
            type="radio"
            className="form-check-input"
            name="gender"
            value="Male"
            checked={gender === "Male"}
            onChange={this.handleChange}
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="form-check form-check-inline mb-2 ">
          <input
            type="radio"
            className="form-check-input"
            name="gender"
            value="Female"
            checked={gender === "Female"}
            onChange={this.handleChange}
          />
          <label className="form-check-label">Female</label>
        </div>
        <div className="form-check form-check-inline mb-2 ">
          <input
            type="radio"
            className="form-check-input"
            name="gender"
            value="Others"
            checked={gender === "Others"}
            onChange={this.handleChange}
          />
          <label className="form-check-label">Others</label>
        </div>
        <br />
        <div className="mb-2">
          <label htmlFor="gender">Verification Ids : </label>
        </div>
        <div className="form-check mb-2">
          <input
            type="checkbox"
            className="form-check-input"
            name="panCard"
            value={panCard}
            checked={panCard}
            onChange={this.handleChange}
          />
          <label className="form-check-label">Pan Card</label>
        </div>
        <div className="form-check mb-2">
          <input
            type="checkbox"
            className="form-check-input"
            name="passport"
            value={passport}
            checked={passport}
            onChange={this.handleChange}
          />
          <label className="form-check-label">Passport</label>
        </div>
        <div className="form-check mb-2">
          <input
            type="checkbox"
            className="form-check-input"
            name="license"
            value={license}
            checked={license}
            onChange={this.handleChange}
          />
          <label className="form-check-label">License</label>
        </div>
        <button className="btn btn-primary" onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
}
