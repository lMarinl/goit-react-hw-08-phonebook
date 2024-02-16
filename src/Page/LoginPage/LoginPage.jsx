import { useDispatch } from 'react-redux';
import { apiLoginUser } from '../../redux/Auth/authOperations';
import css from '../RegisterPage/RegisterPage.module.css';
const LoginPage = () => {
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    const email = event.currentTarget.elements.userEmail.value;
    const password = event.currentTarget.elements.userPassword.value;

    const formData = {
      email,
      password,
    };
    dispatch(apiLoginUser(formData));
    event.currentTarget.reset();
  };

  return (
    <form className={css.form} onSubmit={onSubmit}>
      <label className={css.label}>
        <span className={css.labelSpan}> Email</span>
        <input
          className={css.input}
          type="email"
          name="userEmail"
          placeholder="Enter your email"
          required
        />
      </label>
      <label className={css.label}>
        <span className={css.labelSpan}> Password </span>
        <input
          className={css.input}
          type="password"
          name="userPassword"
          placeholder="Enter your password"
          minLength={7}
          required
        />
      </label>
      <button className={css.buttonSignUp} type="submit">
        Sign In
      </button>
    </form>
  );
};
export default LoginPage;
