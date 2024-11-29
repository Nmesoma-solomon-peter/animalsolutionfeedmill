// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie';
// import axiosInstance from '../../axiosInstance';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axiosInstance.post('/auth/login', {
//                 email,
//                 password,
//             });
//             console.log('User logged in:', response.data);

//             const { access_token, user } = response.data;

//             Cookies.set('access_token', access_token, {
//                 expires: 1,
//                 secure: true,
//                 sameSite: 'strict',
//             });

//             Cookies.set('user', JSON.stringify(user), {
//                 expires: 1,
//                 secure: true,
//                 sameSite: 'strict',
//             });

//             localStorage.setItem('user', JSON.stringify(user));

//             navigate('/dashboard/create');
//         } catch (error) {
//             console.error(
//                 'Login failed:',
//                 error.response ? error.response.data : error.message
//             );
//         }
//     };


//     return (
//         <div>
//             <h2>Login</h2>
//             <form onSubmit={handleLogin}>
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

// export default Login;


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axiosInstance from '../../axiosInstance';
import "./login.css"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('/auth/login', {
                email,
                password,
            });
            console.log('User logged in:', response.data);

            const { access_token, user } = response.data;

            Cookies.set('access_token', access_token, {
                expires: 1,
                secure: true,
                sameSite: 'strict',
            });

            Cookies.set('user', JSON.stringify(user), {
                expires: 1,
                secure: true,
                sameSite: 'strict',
            });

            localStorage.setItem('user', JSON.stringify(user));

            navigate('/dashboard/create');
        } catch (error) {
            console.error(
                'Login failed:',
                error.response ? error.response.data : error.message
            );
        }
    };

    return (
        <div id="login-container">
            <h2 className="login-title">Login</h2>
            <form id="login-form" onSubmit={handleLogin}>
                <input
                    type="email"
                    className="login-input"
                    id="email-input"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    className="login-input"
                    id="password-input"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
};

export default Login;
