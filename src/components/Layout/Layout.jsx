import { Footer, Navigation, UserMenu } from 'components';
import css from './Layout.module.css';

export const Layout = ({ children }) => {
  return (
    <div className={css.layout}>
      <header className={css.header}>
        <Navigation />
        <UserMenu />
      </header>
      <main className={css.main}>
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
};
