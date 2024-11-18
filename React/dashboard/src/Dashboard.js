import React, { useState } from 'react'
import "./Dashboard.css"

const Dashboard = () => {

    const [formData, setFormData] = useState({
        name: '',
        age: '',
        file: null
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({ ...prev, [name]: value}));
    } 

    const handleFileChange = (e) => {
        setFormData((prev) => ({ ...prev, file: e.target.files[0]}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${formData.name}, Age: ${formData.age}, File: ${formData.file?.name || 'No file selected...'}`);

        if(formData.file)
        {
            const fileURl = URL.createObjectURL(formData.file);

            window.open(fileURl, '_blank');
        }
    }

    return (
        <div className="dashboard-container">

            <h1 className="dashboard-title">Health Dashboard</h1>
            <form className="dashboard-form" onSubmit={handleSubmit}>

            <label className="form-label" htmlFor="name">
                Name
            </label>
            <input
                className="form-input"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
            />
  
            <label className="form-label" htmlFor="age">
                Age
            </label>
            <input
                className="form-input"
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter your age"
                required
            />
    
            <label className="form-label" htmlFor="file">
                Upload File
            </label>
            <input
                className="form-file"
                type="file"
                id="file"
                onChange={handleFileChange}
            />
    
            <button className="form-submit-button" type="submit">
                Submit
            </button>
            </form>
        </div>
    );
};

export default Dashboard;