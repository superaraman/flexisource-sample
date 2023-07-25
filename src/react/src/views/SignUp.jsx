import { useState } from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import { useNavigate } from "react-router-dom";
import axiosClient from '../axios.js'

export default function SignUp() {
    const { setCurrentUser, setUserToken } = useStateContext();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [error, setError] = useState({ __html: "" });
    const navigate = useNavigate();


    const onSubmit = (ev) => {
        ev.preventDefault();
        setError({ __html: "" });

        axiosClient
            .post("/signup", {
                name: fullName,
                email,
                password,
                password_confirmation: passwordConfirmation,
            })
            .then(({ data }) => {
                alert('Successfully Created an Account');
                navigate('/login');
            })
            .catch((error) => {
                if (error.response) {
                    const finalErrors = Object.values(error.response.data.errors).reduce((accum, next) => [...accum, ...next], [])
                    console.log(finalErrors);
                    setError({ __html: finalErrors.join('<br>') });
                }
                console.error(error);
            });
    };


    return (
        <div className="text-center">
            <h2>Sign up for free</h2>
            {error.__html && (<div dangerouslySetInnerHTML={error}>
            </div>)}

            <div>
                <form action="#" method="POST" onSubmit={onSubmit}>
                    <div>
                        <div>
                            <label htmlFor="full-name">Full Name</label>
                        </div>
                        <div>
                            <input
                                id="full-name"
                                name="name"
                                type="text"
                                required
                                value={fullName}
                                onChange={(event) => setFullName(event.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <div>
                            <label htmlFor="email">Email address</label>
                        </div>
                        <div>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <div>
                            <label htmlFor="password">Password</label>
                        </div>
                        <div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <div>
                            <label htmlFor="confirm-password">Confirm Password</label>
                        </div>
                        <div>
                            <input
                                id="confirm-password"
                                name="confirm-password"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={passwordConfirmation}
                                onChange={(event) => setPasswordConfirmation(event.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <button type="submit">
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
