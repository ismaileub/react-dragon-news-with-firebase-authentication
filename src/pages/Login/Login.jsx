import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
    const { signIn, logIntWithGoogle, user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null);

    const from = location.state?.from?.pathname || '/';  // fallback to home if no specific page

    const handleLogin = (e) => {

        if (user) {
            return;
        }

        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                setErrorMessage(null);  // clear error if login is successful
                navigate(from, { replace: true });  // navigate to the page the user came from


            })
            .catch(error => {
                console.error(error);
                setErrorMessage("Invalid email or password!");
            });
    };



    const handleLoginWithGoogle = () => {
        if (!user) {
            logIntWithGoogle()
                .then((result) => {
                    console.log(result.user);
                    const from = location.state?.from?.pathname || '/';
                    navigate(from); // navigate after login

                })
                .catch((error) => {
                    console.error(error);
                })

        }
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="mx-auto">
                <h2 className="text-center text-lg">Please Login</h2>

                <form onSubmit={handleLogin} className="card-body mx-auto md:w-3/4 lg:w-1/2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    {/* Display error message */}
                    {errorMessage && <p className="text-red-600 text-center">{errorMessage}</p>}

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>

                <p className="text-center">Login with  <button onClick={handleLoginWithGoogle} className="text-blue-600">Google</button></p>

                <p className="text-center">Do not have an account? <Link to={'/register'} className="text-blue-600">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;
