import { useDispatch } from 'react-redux';
import { apiRegisterUser } from '../../redux/Auth/authOperations';
import css from './RegisterPage.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    const name = event.currentTarget.elements.userName.value;
    const email = event.currentTarget.elements.userEmail.value;
    const password = event.currentTarget.elements.userPassword.value;

    const formData = {
      name,
      email,
      password,
    };
    dispatch(apiRegisterUser(formData));
    event.currentTarget.reset();
  };

  return (
    <form className={css.form} onSubmit={onSubmit}>
      <label className={css.label}>
        <span className={css.labelSpan}> Name</span>
        <input
          className={css.input}
          type="text"
          name="userName"
          placeholder="Enter your name"
          minLength={7}
          required
        />
      </label>
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
          minLength={2}
          required
        />
      </label>
      <button className={css.buttonSignUp} type="submit">
        Sign Up
      </button>
    </form>
  );
};
export default RegisterPage;
