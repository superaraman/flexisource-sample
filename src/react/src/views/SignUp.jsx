import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axiosClient from '../axios.js'
import { Link } from 'react-router-dom';


export default function SignUp() {
    const navigateTo = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleSubmit = (ev) => {
        ev.preventDefault();

        axiosClient
            .post("/signup", {
                name: formData.firstName + ' ' + formData.lastName,
                email: formData.email,
                password: formData.password,
                password_confirmation: formData.confirmPassword,
            })
            .then(({ data }) => {
                console.log(data);
                alert('Successfully Created an Account');
                navigateTo('/login');
            })
            .catch((error) => {
                if (error.response) {
                    const finalErrors = Object.values(error.response.data.errors).reduce((accum, next) => [...accum, ...next], [])
                    alert(finalErrors);
                }
                console.error(error);
            });
    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <h1> SIGN UP </h1>

                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                        <div>
                            <p>Already have an account? <Link to="/login">Login Here</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
