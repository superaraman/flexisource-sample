import { useState } from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import axiosClient from '../axios.js'

export default function Login() {
    const { setCurrentUser, setUserToken } = useStateContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({ __html: "" });


    const onSubmit = (ev) => {
        ev.preventDefault();
        setError({ __html: "" });

        axiosClient
            .post("/login", {
                email,
                password
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

    return (
        <div className="text-center">
            <h2>Sign in to your account</h2>
            {error.__html && (<div dangerouslySetInnerHTML={error}>
            </div>)}


            <div>
                <form action="#" method="POST" onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="email">Email address</label>
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
                        <button type="submit">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
