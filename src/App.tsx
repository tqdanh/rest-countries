import './App.css';

import { Container } from '@mui/material';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Container maxWidth={"xl"}>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
