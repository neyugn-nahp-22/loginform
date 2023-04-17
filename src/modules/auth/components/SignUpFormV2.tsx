import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material'
import TextField from '@mui/material/TextField'
import { Controller, useForm } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'
import { IGenderParams, ILocationParams, ISignUpParams } from '../../../models/auth'
import { validEmailRegex } from '../../../utils'
import { GENDER } from '../../intl/constants'

interface Props {
    onSignUp(values: ISignUpParams): void,
    loading: boolean,
    errorMessage: string,
    locations: Array<ILocationParams>,
    states: Array<ILocationParams>,
    onChangeRegion(idRegion: string): void
}

const SignUpFormV2 = (props: Props) => {
    const { onSignUp, loading, errorMessage, locations, states, onChangeRegion } = props
    console.log(states, 'states');

    const { control, handleSubmit, formState: { errors }, watch, setValue } = useForm<ISignUpParams>({
        defaultValues: {
            email: "",
            password: "",
            repeatPassword: "",
            name: "",
            gender: "",
            region: "",
            state: "",
        }
    })

    const password = watch("password")

    const onSubmit = (data: ISignUpParams) => {
        onSignUp(data);
    }

    const renderGender = () => {
        const arrGender: JSX.Element[] = []
        GENDER.map((g: IGenderParams, index: number) => {
            arrGender.push(
                <MenuItem value={g.value} key={index}>
                    {g.label}
                </MenuItem>
            )
        })
        return arrGender;
    }

    const renderRegion = () => {
        const arrRegion: JSX.Element[] = []
        locations.map((location: ILocationParams, index: number) => {
            arrRegion.push(
                <MenuItem value={location.id} key={index}>
                    {location.name}
                </MenuItem>
            )
        })
        return arrRegion;
    }

    const changeRegion = () => (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedRegion = e.target.value as string
        setValue('region', selectedRegion)
    }
    const renderState = () => {
        const arrState: JSX.Element[] = []
        states.map((state: ILocationParams, index: number) => {
            arrState.push(
                <MenuItem value={state.id} key={index}>
                    {state.name}
                </MenuItem>
            )
        })
        return arrState;
    }
    return (
        <form
            style={{ maxWidth: '560px', width: '100%' }}
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="row g-3 needs-validation"
        >
            {!!errorMessage && (
                <div className="alert alert-danger" role="alert" style={{ width: '100%' }}>
                    {errorMessage}
                </div>
            )}
            <Controller
                name='email'
                control={control}
                rules={{ required: true, pattern: validEmailRegex }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        id='inputEmail'
                        label="Email"
                        variant='outlined'
                        fullWidth
                        margin='normal'
                        error={Boolean(errors.email)}
                        helperText={errors.email ? (errors.email.type === "required" ? "Vui lòng nhập email" : "Sai định dạng email") : ""}
                    />
                )}
            />

            <Controller
                name="password"
                control={control}
                rules={{ required: true, minLength: 4 }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Mật khẩu"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        error={Boolean(errors.password)}
                        helperText={errors.password ? (errors.password.type === "required" ? "Vui lòng nhập password" : "Mật khẩu tối thiểu 4 ký tự") : ""}
                    />
                )}
            />
            <Controller
                name="repeatPassword"
                control={control}
                rules={{
                    required: true,
                    validate: (value) => value === password,
                }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Xác nhận mật khẩu"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin='normal'
                        error={Boolean(errors.repeatPassword)}
                        helperText={errors.repeatPassword ? "Xác nhận mật khẩu không khớp" : ""}
                    />
                )}
            />

            <Controller
                name="name"
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Họ và tên"
                        type="text"
                        variant="outlined"
                        fullWidth
                        margin='normal'
                        error={Boolean(errors.name)}
                        helperText={errors.name ? "Họ và tên không được để trống" : ""}
                    />
                )}
            />

            <Controller
                name="gender"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <FormControl margin='normal' error={Boolean(errors.gender)}>
                        <InputLabel id="inputGender">Giới tính</InputLabel>
                        <Select {...field} labelId='inputGender' label="Gender">
                            {renderGender()}
                        </Select>
                        {errors.gender && <FormHelperText>Giới tính không được để trống</FormHelperText>}
                    </FormControl>
                )}
            />

            <Controller
                name="region"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <FormControl margin='normal' error={Boolean(errors.region)}>
                        <InputLabel id="inputRegion">Quốc gia</InputLabel>
                        <Select {...field} labelId='inputGender' label="Region" onChange={changeRegion} >
                            {renderRegion()}
                        </Select>
                        {errors.region && <FormHelperText>Quốc gia không được để trống</FormHelperText>}
                    </FormControl>
                )}
            />

            <Controller
                name="state"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <FormControl margin='normal' error={Boolean(errors.state)}>
                        <InputLabel id="inputState">Thành phố</InputLabel>
                        <Select {...field} labelId='inputState' label="State">
                            {renderState()}
                        </Select>
                        {errors.state && <FormHelperText>Thành phố không được để trống</FormHelperText>}
                    </FormControl>
                )}
            />

            <div className="row justify-content-md-center" style={{ margin: "16px 0" }}>
                <div className="col-md-auto">
                    <button
                        className='btn btn-primary'
                        type='submit'
                        style={{ minWidth: "160px", display: "flex", alignItems: "center", justifyContent: "center" }}
                        disabled={loading}
                    >
                        {loading && <div className='spinner-border spinner-border-sm text-light mr-2' role='status'></div>}
                        <FormattedMessage id='register' />
                    </button>
                </div>
            </div>
        </form>
    )
}

export default SignUpFormV2