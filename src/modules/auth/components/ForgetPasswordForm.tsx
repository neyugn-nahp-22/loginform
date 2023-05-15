import { Box, Button, Container, Link, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import styles from '../pages/Login.module.scss';
import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';
import InputField from '../../../components/InputField/InputField';
import { useForm } from 'react-hook-form';
import { IForgotPasswordValidation } from '../../../models/auth';
import { ROUTES } from '../../../configs/routes';

const cx = classNames.bind(styles)

interface Props {
    loading: boolean;
    errorMessage: string
}

const ForgetPasswordForm = (props: Props) => {
    const { loading, errorMessage } = props
    const { control, handleSubmit, formState: { errors } } = useForm<IForgotPasswordValidation>()

    const onSubmit = (data: IForgotPasswordValidation) => {
        console.log(data);

    }
    return (
        <Container className={cx('login-container')} component='main' maxWidth="lg">
            <Box className={cx("login-content")}>
                <Typography className={cx('login-label')} variant='h3'>
                    <FormattedMessage id='titlePageForgotPassword' />
                </Typography>
                <Paper className={cx('login-paper')} elevation={4}>
                    <Box onSubmit={handleSubmit(onSubmit)} component='form' className={cx('login-form')}>
                        <InputField
                            id='labelForgotEmail'
                            name='forgotPassword'
                            className={!!errors.email ? cx('login-input-error') : cx("login-input")}
                            control={control}
                            type='email'
                            errors={errors.email ? true : false}
                            helperText={errors.email ? <FormattedMessage id='requireEmail' /> : ""}
                            InputProps={{ disableUnderline: true }}
                        />
                        <Stack className={cx("btn-login")}>
                            <Button
                                type='submit'
                                size='large'
                                variant='contained'
                                fullWidth
                                disabled={loading}
                                disableElevation
                            >
                                <Typography>
                                    <FormattedMessage id='signIn' />
                                </Typography>
                            </Button>
                            <Stack className={cx('forget-password')}>
                                <Link href={ROUTES.login} underline='none' variant='body2'>
                                    <FormattedMessage id='backToSignIn' />
                                </Link>
                            </Stack>
                        </Stack>
                    </Box>
                </Paper>
            </Box>
        </Container>
    )
}

export default ForgetPasswordForm