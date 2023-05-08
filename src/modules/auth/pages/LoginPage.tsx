import { Box, Stack, Typography } from '@mui/material';
import { replace } from 'connected-react-router';
import Cookies from 'js-cookie';
import { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { API_PATHS } from '../../../configs/api';
import { ROUTES } from '../../../configs/routes';
import { ILoginParams } from '../../../models/auth';
import { AppState } from '../../../redux/reducer';
import { getErrorMessageResponse } from '../../../utils';
import { ACCESS_TOKEN_KEY } from '../../../utils/constants';
import { RESPONSE_STATUS_SUCCESS } from '../../../utils/httpResponseCode';
import { fetchThunk } from '../../common/redux/thunk';
import LoginForm from '../components/LoginForm';
import { setUserInfo } from '../redux/authReducer';
import './Login.scss'
const LoginPage = () => {
    const dispatch = useDispatch<ThunkDispatch<AppState, null, Action<string>>>()
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const onLogin = useCallback(
        async (values: ILoginParams) => {
            setErrorMessage("")
            setLoading(true)

            const json = await dispatch(
                fetchThunk(API_PATHS.signIn, 'post', { email: values.email, password: values.password })
            )

            setLoading(false)

            if (json?.code === RESPONSE_STATUS_SUCCESS) {
                dispatch(setUserInfo(json.data)); //dispatch action set user data

                Cookies.set(ACCESS_TOKEN_KEY, json.data.token, { expires: values.rememberMe ? 7 : undefined })

                dispatch(replace(ROUTES.product));
                toast.success("Đăng nhập thành công")
                return;
            }

            setErrorMessage(getErrorMessageResponse(json))
        }, [dispatch])
    return (
        <Stack className='login-wrapper'>
            <Box className='login-logo' component='img' src='http://web-training.hrm.div4.pgtest.co/static/media/HR_Logo.99af50016f31f424a3f3a2330f173a06.svg'></Box>
            <Typography className="login-title" variant='h3'>HR Management System</Typography>
            <LoginForm onLogin={onLogin} loading={loading} errorMessage={errorMessage} />
            {/* <LoginFormV2 onLogin={onLogin} loading={loading} errorMessage={errorMessage} /> */}
            <Link to={ROUTES.signUp}>
                <FormattedMessage id='register' />
            </Link>
        </Stack >
    )
}

export default LoginPage