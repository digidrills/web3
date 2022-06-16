import { useRef, useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import './login.css';

import axios from '../api/axios';
const LOGIN_URL = '/login';

export default function Login() {
      const { setAuth } = useAuth();

      // const navigate = useNavigate();
      // const location = useLocation();
      // const from = location.state?.from?.pathname || "/";

      const userRef = useRef();
      const errRef = useRef();

      const [email,setEmail] = useState("");
      const [password,setPassword] = useState("");
      const [errMsg, setErrMsg] = useState('');

      useEffect(() => {
          userRef.current.focus();
      }, [])

      useEffect(() => {
          setErrMsg('');
      }, [email, password])
        

    let PostLogin = async (e) => {
        e.preventDefault();

        try {
          console.log("before axios request")
          const response = await axios.post(LOGIN_URL,
            JSON.stringify({ email, password }),
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            }
           );
          console.log(JSON.stringify(response?.data));

          const accessToken = response?.data?.accessToken;
          setAuth({ email, password, accessToken });
          setEmail("");
          setPassword("");
          // navigate(from, { replace: true });

          //   var details = {
          //       email: email,
          //       password: password,
          //     };

          //   var formBody = [];
          //   for (var property in details) {
          //       console.log(details[property]);
          //   var encodedKey = encodeURIComponent(property);
          //   var encodedValue = encodeURIComponent(details[property]);
          //   formBody.push(encodedKey + "=" + encodedValue);
          //   }
          //   formBody = formBody.join("&");

          // let res = await fetch("http://localhost:5000/login", {
          //   method: "POST",
          //   headers: {
          //       'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          //     },
          //   body: formBody,
          // });
          // let resJson = await res.json();
          // if (res.status === 200) {
          //  console.log(resJson);
          // } else {
          //   console.log("Error")
          // }
        } catch (err) {
          if (!err?.response) {
            setErrMsg('No Server Response');
        } else if (err.response?.status === 400) {
            setErrMsg('Missing Username or Password');
        } else if (err.response?.status === 401) {
            setErrMsg('Unauthorized');
        } else {
            setErrMsg('Login Failed');
        }
        // errRef.current.focus();
        console.log(err)
        }
      };

        return (

            
            <form>

                {/* <h3>Log in</h3> */}
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" 
                    autoComplete='off'
                    ref={userRef}
                    required
                    placeholder="Enter email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control"
                    required 
                    placeholder="Enter password" value={password} onChange={(e)=> setPassword(e.target.value)} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <div style={{textAlign:"center"}}>
                    <button className="btn btn-primary btn-md btn-block" style={{width:"50%"}} onClick={PostLogin}>Sign in</button>
                </div>
                <p className="forgot-password text-right">
                    Forgot <a href="abc">password?</a>
                </p>
            </form>
        );
    }
