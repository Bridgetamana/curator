import styles from './Signin.module.css';
import { Link } from 'react-router';

export default function Signin() {
  return (
    <section className={styles.signin}>
      <div className={styles.signinHeader}>
        <h1>Welcome back</h1>
        <p>Sign in to your account to continue</p>
      </div>
      <form className={styles.signinForm}>
        <div className={styles.inputGroup}>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' placeholder='you@example.com' required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='password'>Password:</label>
          <input type='password' placeholder='********' id='password' required />
        </div>
        <button className={styles.submitButton} type="submit">Sign In</button>
        <p className={styles.signinFooter}>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </section>
  );
}
