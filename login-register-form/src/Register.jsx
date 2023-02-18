import React, {useState} from 'react'

export const Register = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log("email", email);

    }
    return (
        <div className = "auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit = {handleSubmit}>
            <lable>Full Name</lable>
            <input type="text" placeholder="Enter your full name" id="name" name="name"/>

            <label htmlfor="email">Email</label>
            <input value={email} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
            <label htmlfor="password">Password</label>
            <input value={password} type="password" placeholder="********" id="password" name="password"/>
            <button type="submit">Submi </button>
        </form>
        <button className="link-btn" onClick = {()=> props.onFormSwitch("login")} >back</button>
        </div>
    )
}