import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../loader/Loader';
import { Container, List, NavLink } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <List>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </List>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default Layout;
