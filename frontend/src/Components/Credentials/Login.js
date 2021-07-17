import React, {useState} from 'react'
import LoginForm from './LoginForm.js';

function Login() {

    //temporary for testing it should later check emails and passwords stores in the database
    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
    }

    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");
    
    //Check if email is valid
    const Login = details => {
        console.log(details);
        
        if(details.email == adminUser.email && details.password == adminUser.password){
            console.log("Logged in")
            setUser({
                name: details.name,
                email: details.email
            });
            //True
        }
        else{
            console.log("incrorect details");
            setError("Incorrect Details");
            //False
        }

    }

    const Logout = () => {
        console.log("Logout");
        setUser({ name: "", email: "" });
    }

     return (
        <div className="App">
            {(user.email != "") ? (
                <div className="welcome">
                    <h2>Welcome, <span>{user.name}</span></h2>
                    <button onClick={Logout}>Logout</button>
                </div>
            ) : (
                <LoginForm Login={Login} error={error}/>
            )}
        </div>
        
     )
}

export default Login