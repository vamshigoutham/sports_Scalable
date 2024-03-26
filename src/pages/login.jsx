import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = () => {
        console.log('submit');
        const data = {
            email: email,
            password: password
        }
        fetch('http://payemnt-env.eba-z2yqwtde.us-east-1.elasticbeanstalk.com/sign-in', {
            //fetch('http://localhost:8000/sign-in', {

            method:'POST',
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(data),
        }).then(res => {
            return res.json();
        })
            .then(data => {
                console.log('data', data);
                if(data?.success === true) {
                    localStorage.setItem('token', data?.token);
                    localStorage.setItem('user', JSON.stringify(data?.user));
                    navigate('/');
                }
                else {
                    alert(data?.message)
                }
            })
            .catch(err => {
                console.log('err', err?.data);
                alert(err)
            })
    }

    return (
        <div className='mt-24'>
            <div class="max-w-md m-auto bg-white">
                <div class="border-t-2 border-blue-200 overflow-hidden rounded shadow-lg pt-6">
                    <div class="px-4 mb-4">
                        <input
                            type="text"
                            placeholder="Enter email"
                            class="border border-gray rounded w-full p-3"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div class="px-4 mb-4">
                        <input
                            type="password"
                            placeholder="Enter password"
                            class="border border-gray rounded w-full p-3"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div class="px-4 mb-6" onClick={submitHandler}>
                        <button class="border border-blue-500 bg-blue-600 rounded w-full px-4 py-3 text-white font-semibold">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}