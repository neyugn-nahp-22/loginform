import { Box, Stack, Typography } from '@mui/material';
import LoginForm from '../components/LoginForm';
import styles from './Login.module.scss';
import { FormattedMessage } from 'react-intl';
import { ILoginParams } from '../../../models/auth';
import { useDispatch } from 'react-redux';
import { getToken } from '../redux/authReducer';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)
const LoginPage = () => {
    const dispatch = useDispatch()

    const onLogin = (data: ILoginParams) => {
        dispatch(getToken(data))
    }

    return (
        <Stack className={cx('login-wrapper')}>
            <Box className={cx('login-logo')} component='img' src='http://web-training.hrm.div4.pgtest.co/static/media/HR_Logo.99af50016f31f424a3f3a2330f173a06.svg'></Box>
            <Typography className={cx("login-title")} variant='h3'>
                <FormattedMessage id='titleAuthLayout' />
            </Typography>
            <LoginForm onLogin={onLogin} loading={true} errorMessage={""} />
            {/* <LoginFormV2 onLogin={onLogin} loading={loading} errorMessage={errorMessage} /> */}
        </Stack >
    )
}

export default LoginPage