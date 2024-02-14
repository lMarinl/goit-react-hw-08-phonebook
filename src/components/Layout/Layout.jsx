import css from './Layout.module.css';
import { useSelector } from 'react-redux';

import { Footer, Navigation, UserMenu } from 'components';
import { selectedIsLoggedIn } from '../../redux/Auth/authSelectors';

export const Layout = ({ children }) => {
  const isLoggedIn = useSelector(selectedIsLoggedIn);
  return (
    <div className={css.layout}>
      <header className={css.header}>
        <Navigation />
        {isLoggedIn && <UserMenu />}
      </header>
      <main className={css.main}>
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
};
