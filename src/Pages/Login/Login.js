import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import img1 from '../../assets/images/Login/img1.jpg'
import useTitle from '../../hooks/useTitle';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const { logIn } = useContext(AuthContext);
    useTitle('Login');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User logged in Succesfully');
                form.reset();
                // navigate(from, { replace: true });

                const currentUser = {
                    email: user.email
                }
                console.log(currentUser)

                // get JWT token
                fetch('https://assignment-11-server-eta.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        // Local storage is the easiest but not the best place to store JWT token
                        localStorage.setItem('trainer-token', data.token);
                        navigate(from, { replace: true });

                    })
            })
            .catch(err => console.error(err))
    }

    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={img1} alt="" />
                </div>
                <div className="card py-16 max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl text-center font-bold">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Your Password" className="input input-bordered" required />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Login" />
                        </div>
                    </form>
                    <p className='text-center'>New to the website? <Link className='text-orange-600 font-bold' to='/signup'>Sign Up</Link></p>
                </div>
            </div>
            <ToastContainer position="top-center" />
        </div>
    );
};

export default Login;