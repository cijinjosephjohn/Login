import React, {useState} from 'react'
export const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log("email", email);
        fetch("http://localhost:5000/login", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",

    },
    body: JSON.stringify({
        email,password
        }),
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data,"userRegistered");
        if(data.message === "ok"){
            alert("Login Successful");
            window.localStorage.setItem("token", data.data);
            window.localStorage.setItem("LOggedIn", true);

            window.location.href="./userDetails";
        }
    });
}
    return (
        <div className = "auth-form-container">
            <h2>Login</h2>
        <form className = "login-form" onSubmit = {handleSubmit}>
            <label htmlfor="email">Email</label>
            <input  type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
            <label htmlfor="password">Password</label>
            <input  type="password" placeholder="********" id="password" name="password"/>
            <button type="submit">Login</button>
        </form>
        <button className="link-btn" onClick = { () => props.onFormSwitch('register')}>Don't have an account ? Register here</button>
        </div>
    )
}