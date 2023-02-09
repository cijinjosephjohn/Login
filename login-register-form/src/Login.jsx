import React, {useState} from 'react'
export const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log("email", email);

    }
    return (
        <>
        <form onSubmit = {handleSubmit}>
            <label htmlfor="email">Email</label>
            <input value={email} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
            <label htmlfor="password">Password</label>
            <input value={password} type="password" placeholder="********" id="password" name="password"/>
            <button type="submit">Login</button>
        </form>
        <button onClick = { () => props.onFormSwitch('register')}>Don't have an account ? Register here</button>
        </>
    )
}