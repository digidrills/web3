import { useRef, useState, useEffect } from "react";
import axios from '../api/axios';
// import O_Auth from "./O_auth";
// import { gapi } from 'gapi-script';
import './login.css';

const REGISTER_URL = '/register';
const clientId = "1074180487968-jg0sbt8361t36bsf0ladqi4hd7tti3mv.apps.googleusercontent.com";
export default function Register() {
        const errRef = useRef();

        const [name,setName] = useState("");
        const [email,setEmail] = useState("");
        const [password,setPassword] = useState("");
        const [phone,setPhone] = useState("");

        const [errMsg, setErrMsg] = useState('');
        const [success, setSuccess] = useState(false);

        useEffect(() => {
        //     function start(){
        //         gapi.client.init(
        //           {
        //             clientId: clientId,
        //             scope:"https://www.googleapis.com/auth/userinfo.profile"
        //           }
        //         )
        //         };
        //   gapi.load('client:auth2',start);


          setErrMsg('');
        }, [email,password])

        

        let PostRegister = async (e) => {
            e.preventDefault();

            try {
              //   var details = {
              //       name: name,
              //       email: email,
              //       password: password,
              //       phone_no: phone
              //     };

                  
               
              //   var formBody = [];
              //   for (var property in details) {
              //       console.log(details[property]);
              //   var encodedKey = encodeURIComponent(property);
              //   var encodedValue = encodeURIComponent(details[property]);
              //   formBody.push(encodedKey + "=" + encodedValue);
              //   }
              //   formBody = formBody.join("&");

              // let res = await fetch("http://localhost:5000/register", {
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

              const response = await axios.post(REGISTER_URL,
                JSON.stringify({ name, email,password,phone_no:phone }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            // TODO: remove console.logs before deployment
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response))
            setSuccess(true);
            //clear state and controlled inputs
            setName('');
            setEmail('');
            setPassword('');
            setPhone('');
            } catch (err) {
              // console.log(err);
              if (!err?.response) {
                setErrMsg('No Server Response');
              } else if (err.response?.status === 409) {
                  setErrMsg('Account Taken');
              } else {
                  setErrMsg('Registration Failed')
              }
              errRef.current.focus()
              }
          };

        return (
            <form className='register'>
                {/* <h3>Register</h3> */}
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" className="form-control" placeholder="Full Name" value={name} onChange={(e)=> setName(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" 
                    value={email} onChange={(e)=> setEmail(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" 
                    value={password} onChange={(e)=> setPassword(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Phone</label>
                    <input type="text" className="form-control" placeholder="Enter Phone number" 
                    value={phone} onChange={(e)=> setPhone(e.target.value)}/>
                </div>

                <div style={{textAlign:"center"}}>
                    <button className="btn btn-primary btn-md btn-block" style={{width:"50%"}} onClick={PostRegister}>Register</button>
                </div>
                <div style={{textAlign:"center"}}>
                    <p>-------OR------</p>
                </div>
                <div style={{textAlign:"center"}}>
                    {/* <O_Auth/> */}
                </div>
            </form>
        );
    }
