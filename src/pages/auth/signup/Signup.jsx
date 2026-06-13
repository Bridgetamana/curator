import styles from './Signup.module.css';
import { Link } from 'react-router';

export default function Signup() {
  return (
    <section className={styles.signup}>
      <div className={styles.signupHeader}>
        <h1>Create an account</h1>
        <p>Get started with your free account</p>
      </div>
      <form className={styles.signupForm}>
        <div className={styles.inputGroup}>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' placeholder='John Doe' required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            placeholder='you@example.com'
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            placeholder='********'
            id='password'
            required
          />
        </div>
        <button className={styles.submitButton} type='submit'>
          Sign Up
        </button>
        <p className={styles.signupFooter}>
          Already have an account? <Link to='/signin'>Sign In</Link>
        </p>
      </form>
    </section>
  );
}
