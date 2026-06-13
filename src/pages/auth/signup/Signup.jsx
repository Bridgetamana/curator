import { useState } from 'react';
import styles from './Signup.module.css';
import { Link, useNavigate } from 'react-router';

export default function Signup() {
  let navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/signup`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, password }),
        },
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error('error', data.error);
      }
      navigate('/signin');
    } catch (error) {
      console.log('Error', error.message);
    }
  };

  return (
    <section className={styles.signup}>
      <div className={styles.signupHeader}>
        <h1>Create an account</h1>
        <p>Get started with your free account</p>
      </div>
      <form className={styles.signupForm} onSubmit={handleSignup}>
        <div className={styles.inputGroup}>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            placeholder='John Doe'
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            placeholder='you@example.com'
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='password'>Password</label>
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
          Sign Up
        </button>
        <p className={styles.signupFooter}>
          Already have an account? <Link to='/signin'>Sign In</Link>
        </p>
      </form>
    </section>
  );
}
