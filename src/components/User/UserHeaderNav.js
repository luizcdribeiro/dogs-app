import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../UserContext.js';
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg';
import { ReactComponent as AdicionarFotos } from '../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../Assets/sair.svg';
import useMedia from '../../hooks/useMedia.js';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);

  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          type="button"
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
        />
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/conta" end activeClassName={styles.active}>
          <MinhasFotos />
          {mobile && 'Minhas fotos'}
        </NavLink>
        <NavLink to="/conta/estatisticas" activeClassName={styles.active}>
          <Estatisticas />
          {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to="/conta/postar" activeClassName={styles.active}>
          <AdicionarFotos />
          {mobile && 'Adicionar Fotos'}
        </NavLink>
        <button onClick={userLogout} type="button">
          <Sair />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
