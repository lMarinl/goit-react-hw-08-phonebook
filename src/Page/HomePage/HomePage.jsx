import css from './HomePage.module.css';
const HomePage = () => {
  return (
    <h1 className={css.homePageTitle}>
      Welcome to the main page of our phone book! Here you will find a simple
      and effective tool for managing your contacts. Create, edit, and quickly
      find the phone numbers you need with our convenient features.
    </h1>
  );
};
export default HomePage;
