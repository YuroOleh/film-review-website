import React from "react";
import styles from "../styles/pages/Login.module.css";
import Button from "../components/shared/Button";
import Input from "../components/shared/Input";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className={styles.card}>
            <img className={styles.logo} src={logo} />

            <h2>Welcome back!</h2>
            <h5>Sign in to your CineView account</h5>

            <Input placeholder="Email address" />
            <Input placeholder="Password" type="password" />

            <Link to="/films">
                <Button label="Login" />
            </Link>
            

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