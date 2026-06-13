import styles from './Signup.module.css';
import { Link } from 'react-router';

export default function Signup() {
  return (
    <section className={styles.signinPage}>
      <h1>Create an account</h1>
      <form>
        <div>
          <label htmlFor='name'>Name:</label>
          <input type='name' id='name' placeholder='John Doe' />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' placeholder='you@gmail.com' />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input type='password' placeholder='********' id='password' />
        </div>
        <button>Sign Up</button>
        <p>
          Already have an account? <Link to='/signin'>SignIn</Link>
        </p>
      </form>
    </section>
  );
}
