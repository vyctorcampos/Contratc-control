import React from 'react';
import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from './styles/globalStyles';
import AppRoutes from './routes/routes';

import 'react-toastify/dist/ReactToastify.css';
import UsersProvider from './contexts/usersContext';
import ThemeLocalProvider from './contexts/themeContext';

const App = () => {
  return (
    <UsersProvider>
      <ThemeLocalProvider>
        <GlobalStyle />
        <>
          <AppRoutes />
        </>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ThemeLocalProvider>
    </UsersProvider>
  );
};

export default App;
