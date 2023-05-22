import { lazy, Suspense } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { ROUTES } from './configs/routes';
import ProtectedRoute from './modules/common/components/ProtectedRoute';

const HomePage = lazy(() => import('./modules/home/pages/HomePage'));
const LoginPage = lazy(() => import('./modules/auth/pages/LoginPage'));
const ForgotPage = lazy(() => import('./modules/auth/pages/ForgetPasswordPage'))
const EmployeePape = lazy(() => import('./modules/contents/pages/EmployeePage'))
const CreatePage = lazy(() => import("./modules/function/pages/CreatePage"))

interface Props { }

export const Routes = (props: Props) => {
    const location = useLocation();
    return (
        <Suspense fallback={<div>Loading.....</div>}>
            <Switch location={location}>
                <Route path={ROUTES.login} component={LoginPage} />
                <ProtectedRoute path={ROUTES.home} component={HomePage} />
                <Route path={ROUTES.forgotPassword} component={ForgotPage} />
                <Route path={ROUTES.employee} component={EmployeePape} />
                <Route path={ROUTES.add} component={CreatePage} />
                <Route path="/" component={LoginPage} />
            </Switch>
        </Suspense>
    );
};
