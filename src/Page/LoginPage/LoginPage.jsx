import { useDispatch } from 'react-redux';
import { apiLoginUser } from '../../redux/Auth/authOperations';

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
    <div>
      <h1>Login</h1>

      <form onSubmit={onSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="userEmail"
            placeholder="Enter your email"
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="userPassword"
            placeholder="Enter your password"
            minLength={7}
            required
          />
        </label>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};
export default LoginPage;
