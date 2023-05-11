import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Box, Button, Container, FilledInput, IconButton, Link, MenuItem, Paper, Select, Stack, TextField, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useState } from 'react';
import { ILoginParams, ILoginValidation } from '../../../models/auth';
import styles from '../pages/Login.module.scss';
import { FormattedMessage } from 'react-intl';
import { Controller, useForm } from 'react-hook-form'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
interface Props {
    onLogin(values: ILoginParams): void;
    loading: boolean;
    errorMessage: string
}

const company = [
    {
        id: 1,
        name: "SBM"
    },
    {
        id: 2,
        name: "DMF"
    }
]
const LoginForm = (props: Props) => {
    const { onLogin, loading, errorMessage } = props

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const { control, handleSubmit, formState: { errors } } = useForm<ILoginValidation>()

    const onSubmit = (data: ILoginValidation) => {
        console.log(data);
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event: any) => {
        event.preventDefault();
    };

    return (
        <Container className={cx('login-container')} component='main' maxWidth="lg">
            <Box className={cx("login-content")}>
                <Typography className={cx('login-label')} variant='h3'>
                    <FormattedMessage id='signIn' />
                </Typography>
                <Paper className={cx('login-paper')} elevation={4}>
                    <Box onSubmit={handleSubmit(onSubmit)} component='form' className={cx('login-form')}>
                        <Grid2 container spacing={1} className={cx("login-form-content")}>
                            <Grid2 direction="row" xs={12}>
                                <Typography>
                                    <FormattedMessage id="UserName" />
                                    <span></span>
                                </Typography>
                            </Grid2>
                            <Grid2 direction='row' xs={12}>
                                <Controller
                                    name='username'
                                    control={control}
                                    defaultValue=''
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            className={!!errors.username ? cx('login-input-error') : cx("login-input")}
                                            name='username'
                                            type='text'
                                            fullWidth
                                            variant='filled'
                                            error={errors.username ? true : false}
                                            helperText={errors.username ? <FormattedMessage id="requireUsername" /> : ''}
                                            InputProps={{ disableUnderline: true }}
                                        />
                                    )}
                                />
                            </Grid2>
                        </Grid2>
                        <Grid2 container spacing={1} className={cx("login-form-content")}>
                            <Grid2 direction="row" xs={12}>
                                <Typography>
                                    <FormattedMessage id='passWord' />
                                    <span></span>
                                </Typography>
                            </Grid2>
                            <Grid2 direction='row' xs={12}>
                                <Controller
                                    name='password'
                                    control={control}
                                    defaultValue=''
                                    rules={{ required: true }}
                                    render={({ field }: any) => (
                                        <TextField
                                            {...field}
                                            className={!!errors.password ? cx('login-input-error') : cx("login-input")}
                                            name='password'
                                            type='password'
                                            fullWidth
                                            variant='filled'
                                            error={errors.password ? true : false}
                                            helperText={errors.password ? <FormattedMessage id="requirePassword" /> : ''}
                                            InputProps={{
                                                disableUnderline: true,
                                                type: showPassword ? 'text' : 'password',
                                                endAdornment: (
                                                    !!field ?
                                                        <IconButton
                                                            size='small'
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                        >
                                                            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                                        </IconButton> : ""
                                                ),
                                            }}
                                        />
                                    )}
                                />
                            </Grid2>
                        </Grid2>
                        <Grid2 container spacing={1} className={cx("login-form-content")}>
                            <Grid2 direction="row" xs={12}>
                                <Typography>
                                    <FormattedMessage id='factory' />
                                    <span></span>
                                </Typography>
                            </Grid2>
                            <Grid2 direction='row' xs={12}>
                                <Select
                                    className={cx('login-select')}
                                    fullWidth
                                    displayEmpty
                                    variant='filled'
                                    input={<FilledInput />}
                                    disableUnderline
                                    renderValue={(selected) => {
                                        if (!selected) {
                                            return <Typography style={{ color: "rgb(104, 112, 118)" }}>Select Factory</Typography>
                                        }
                                        return company.find((item) => item.id === selected)?.name
                                    }}
                                >
                                    {
                                        company.map((item, index) => (
                                            <MenuItem className={cx("select-factory")} key={index} value={item.id}>{item.name}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </Grid2>
                        </Grid2>
                        <Stack className={cx("btn-login")}>
                            <Button
                                type='submit'
                                size='large'
                                variant='contained'
                                fullWidth
                                disableElevation
                            >
                                <Typography>
                                    <FormattedMessage id='signIn' />
                                </Typography>
                            </Button>
                        </Stack>
                        <Stack className={cx('forget-password')}>
                            <Link href="/auth/forgot-password" underline='none' variant='body2'>
                                <FormattedMessage id='fogotPassWord' />
                            </Link>
                        </Stack>
                    </Box>
                </Paper>
            </Box >
        </Container >
    )
}

export default LoginForm