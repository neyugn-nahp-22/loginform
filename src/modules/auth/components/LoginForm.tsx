import { useCallback, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { ILoginParams, ILoginValidation } from '../../../models/auth';
import { validLogin, validateLogin } from '../utils';
import { Box, Container, FilledInput, FormControl, IconButton, InputAdornment, Paper, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import '../pages/Login.scss'

interface Props {
    onLogin(values: ILoginParams): void;
    loading: boolean;
    errorMessage: string
}

const LoginForm = (props: Props) => {

    const { onLogin, loading, errorMessage } = props;

    const [formValues, setFormValues] = useState<ILoginParams>({ email: "", password: "", rememberMe: false })
    const [validate, setValidate] = useState<ILoginValidation>();
    const [inputValues, setInputValues] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const handleChangeInput = (e: any) => {
        setInputValues(e.target.value)
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const onSubmit = useCallback(() => {
        const validate = validateLogin(formValues)

        setValidate(validate)

        if (!validLogin(validate)) {
            return
        }

        onLogin(formValues)

    }, [formValues, onLogin])
    return (
        <Container className='login-container' component='main' maxWidth="lg">
            <Box className="login-content">
                <Typography className='login-label' variant='h3'>
                    Sign In
                </Typography>
                <Paper className='login-paper' elevation={4}>
                    <Box component='form' className='login-form'>
                        <Grid2 container spacing={1} className="login-form-content">
                            <Grid2 direction="row" xs={12}>
                                <Typography>
                                    Username
                                    <span></span>
                                </Typography>
                            </Grid2>
                            <Grid2 className="login-form-input">
                                <FormControl>
                                    <FilledInput
                                        disableUnderline
                                        fullWidth
                                        style={{
                                            paddingRight: "0px"
                                        }}
                                    />
                                </FormControl>
                            </Grid2>
                        </Grid2>
                        <Grid2 container spacing={1} className="login-form-content">
                            <Grid2 direction="row" xs={12}>
                                <Typography>
                                    Password
                                    <span></span>
                                </Typography>
                            </Grid2>
                            <Grid2 className="login-form-input">
                                <FormControl>
                                    <FilledInput
                                        disableUnderline
                                        type={showPassword ? 'text' : 'password'}
                                        value={inputValues}
                                        onChange={handleChangeInput}
                                    />
                                </FormControl>
                            </Grid2>
                        </Grid2>
                        <Grid2 container spacing={1} className="login-form-content">
                            <Grid2 direction="row" xs={12}>
                                <Typography>
                                    Factory
                                    <span></span>
                                </Typography>
                            </Grid2>
                            <Grid2 className="login-form-input">
                                <FormControl>
                                    <FilledInput
                                        disableUnderline
                                        fullWidth
                                        style={{
                                            paddingRight: "0px"
                                        }}
                                    />
                                </FormControl>
                            </Grid2>
                        </Grid2>
                    </Box>
                </Paper>
            </Box >
        </Container>
    )
}

export default LoginForm