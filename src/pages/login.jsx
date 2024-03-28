import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        console.log('submit');
        const data = {
            email: email,
            password: password
        };
        fetch('http://payemnt-env.eba-z2yqwtde.us-east-1.elasticbeanstalk.com/sign-in', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                console.log('data', data);
                if(data?.success === true) {
                    localStorage.setItem('token', data?.token);
                    localStorage.setItem('user', JSON.stringify(data?.user));
                    navigate('/');
                }
                else {
                    alert(data?.message);
                }
            })
            .catch(err => {
                console.log('err', err?.data);
                alert(err);
            });
    };

    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="md:w-1/2 bg-blue-500 text-white flex items-center justify-center p-8">
                <img src={`${process.env.PUBLIC_URL}/images/img.png`} alt="Sports Hub" className="max-w-full h-auto"/>
            </div>
            <div className="md:w-1/2 flex items-center justify-center">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Sign In to Sports Hub
                        </h2>
                    </div>
                    <form onSubmit={submitHandler} className="space-y-6">
                        <input
                            type="email"
                            className="border border-gray-300 rounded w-full p-3"
                            value={email}
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            className="border border-gray-300 rounded w-full p-3"
                            value={password}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" style={{ backgroundColor: '#4f46e5', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
                            Sign In
                        </button>
                    </form>
                    <div className="text-sm text-center">
                        <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Need an account? Create one
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
