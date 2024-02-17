import React, { useState } from "react";
import styles from "./SignIn.module.css";
import ButtonSemantic from "../../components/ButtonSemantic/ButtonSemantic";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    console.log("Signing in with:", email, password);
    // Implement your sign-in logic here
  };

  const handleForgotPassword = () => {
    console.log("Navigating to forgot password screen...");
    // Implement navigation logic to the forgot password screen
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <text className={styles.title}>Sign in</text>
        <div className={styles.inputContainer}>
          <text className={styles.inputLabel}>Email</text>
          <input
            className={styles.input}
            placeholder="Email"
            onChange={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </div>
        <div className={styles.inputContainer}>
          <text className={styles.inputLabel}>Password</text>
          <input
            type="password"
            className={styles.input}
            placeholder="Password"
            onChange={setPassword}
            secureTextEntry
          />
        </div>
        <ButtonSemantic
          title="Sign in"
          onClick={handleSignIn}
          theme={"black"}
          fontWeight={700}
          fontSize={14}
          width={180}
          height={32}
        />
        <div className={styles.forgot} onClick={handleForgotPassword}>Forgot Password?</div>
      </div>
    </div>
  );
};

export default SignIn;