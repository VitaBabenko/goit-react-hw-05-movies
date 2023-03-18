import { Outlet } from 'react-router-dom';
import { Container, List, NavLink } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <List>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </List>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default Layout;
