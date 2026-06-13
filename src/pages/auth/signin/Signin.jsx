import { useState } from 'react';
import styles from './Signin.module.css';
import { Link } from 'react-router';

export default function Signin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSignin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }
      localStorage.setItem('token', data.token);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <section className={styles.signin}>
      <div className={styles.signinHeader}>
        <h1>Welcome back</h1>
        <p>Sign in to your account to continue</p>
      </div>
      <form className={styles.signinForm} onSubmit={handleSignin}>
        <div className={styles.inputGroup}>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            onChange={(e) => setEmail(e.target.value)}
            placeholder='you@example.com'
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            placeholder='********'
            id='password'
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className={styles.submitButton}
          type='submit'
        >
          Sign In
        </button>
        <p className={styles.signinFooter}>
          Don't have an account? <Link to='/signup'>Sign Up</Link>
        </p>
      </form>
    </section>
  );
}
