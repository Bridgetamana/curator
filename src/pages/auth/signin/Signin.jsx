import styles from './Signin.module.css';
import { Link } from 'react-router';

export default function Signin() {
  return (
    <section className={styles.signinPage}>
      <h1>Welcome back</h1>
      <form>
        <div>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' placeholder='you@gmail.com' />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input type='password' placeholder='********' id='password' />
        </div>
        <button>Sign In</button>
        <p>Don't have an account? <Link to="/signup">SignUp</Link></p>
      </form>
    </section>
  );
}
