import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';

const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const PhonebookPage = lazy(() => import('../pages/Phonebook'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/"
          element={
            <RestrictedRoute
              redirectTo="/phonebook"
              component={<LoginPage />}
            />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/" component={<RegisterPage />} />
          }
        />

        <Route
          path="phonebook"
          element={
            <PrivateRoute redirectTo="/" component={<PhonebookPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
