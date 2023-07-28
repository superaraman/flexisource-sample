import { useState } from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import axiosClient from '../axios.js'
import { Link } from 'react-router-dom';


export default function Login() {
    const { setCurrentUser, setUserToken } = useStateContext();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        axiosClient
            .post("/login", {
                email: formData.email,
                password: formData.password
            })
            .then(({ data }) => {
                setCurrentUser(data.user);
                setUserToken(data.token);
            })
            .catch((error) => {
                if (error.response) {
                    setError({ __html: error.response.data.error });
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
                <h1> Sign In to your Account </h1>
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
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
                        <button type="submit" className="btn btn-primary">Login</button>

                        <div>
                            <p>Don't have an account? <Link to="/sign-up">Sign Up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
