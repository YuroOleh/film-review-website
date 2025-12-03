import styles from "../styles/pages/Register.module.css";
import Button from "../components/shared/Button";
import Input from "../components/shared/Input";
import logo from "../assets/logo.png";
import { useAuth2 } from "../hooks/useAuth2";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
    const { register } = useAuth2();
    const navigate = useNavigate();

    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[passwordConfirm, setPasswordConfirm] = useState("")
    const[fullName, setFullName] = useState("")


    async function handleSubmit() {
        if(email.trim()==="" || password.trim()==="" || passwordConfirm.trim()==="" || fullName.trim()==="" ){
            alert("All fields are required");
            return;
        }

        if (password !== passwordConfirm) {
            alert("Passwords do not match");
            return;
        }

        try {
            await register(email, password, fullName);
            alert("Account created!");
            navigate("/login");
            console.log(email)
            console.log(password)
            console.log(fullName)
        } catch {
            console.log(email)
            console.log(password)
            console.log(fullName)
            alert("Registration failed");
        }
    }

    return (
        <div className={styles.card}>
            <img className={styles.logo} src={logo} />

            <h2>Create account</h2>
            <h5>Join CineView to start reviewing films</h5>

            <Input 
                name="name" 
                placeholder="Your full name" 
                value={fullName} 
                onChange={setFullName} 
            />
            <Input 
                name="email" 
                placeholder="Email address" 
                value={email} 
                onChange={setEmail} 
            />
            <Input 
                name="password" 
                placeholder="Password" 
                type="password" 
                value={password} 
                onChange={setPassword} 
            />
            <Input 
                name="confirm" 
                placeholder="Confirm password" 
                type="password" 
                value={passwordConfirm} 
                onChange={setPasswordConfirm} 
            />

            <Button label="Sign up" onClick={handleSubmit} />

            <p className={styles.bottomText}>
                Already have an account?{" "}
                <span>
                    <Link to="/login" className="gradient-text">
                        Sign in
                    </Link>
                </span>
            </p>
        </div>
    );
}