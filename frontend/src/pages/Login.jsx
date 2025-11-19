import styles from "../styles/pages/Login.module.css";
import Button from "../components/shared/Button";
import Input from "../components/shared/Input";
import logo from "../assets/logo.png";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit() {
        if (email.trim() === "" || password.trim() === "") {
            alert("All fields are required");
            return;
        }

        try {
            await login(email, password);
            navigate("/films");
        } catch (err) {
            alert("Invalid email or password");
        }
    }

    return (
        <div className={styles.card}>
            <img className={styles.logo} src={logo} />

            <h2>Welcome back!</h2>
            <h5>Sign in to your CineView account</h5>

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

            <Button label="Login" onClick={handleSubmit} />

            <p className={styles.bottomText}>
                Don't have an account?{" "}
                <span>
                    <Link to="/register" className="gradient-text">
                        Sign up
                    </Link>
                </span>
            </p>
        </div>
    );
}