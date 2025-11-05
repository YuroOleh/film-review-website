import React from "react";
import styles from "../styles/pages/Register.module.css";
import Button from "../components/shared/Button";
import Input from "../components/shared/Input";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div className={styles.card}>
            <img className={styles.logo} src={logo} />

            <h2>Create account</h2>
            <h5>Join CineView to start reviewing films</h5>

            <Input placeholder="Your full name" />
            <Input placeholder="Email address" />
            <Input placeholder="Password" type="password" />
            <Input placeholder="Confirm password" type="password" />

            <Link to="/films">
                <Button label="Login" />
            </Link>

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