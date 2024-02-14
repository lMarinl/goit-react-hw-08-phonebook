import { useDispatch } from 'react-redux';

import { apiRegisterUser } from '../../redux/Auth/authOperations';

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
    <div>
      <h1>RegisterPage</h1>

      <form onSubmit={onSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="userName"
            placeholder="Enter your name"
            minLength={7}
            required
          />
        </label>
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
            minLength={2}
            required
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
export default RegisterPage;
