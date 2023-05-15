import { TextField, Typography } from '@mui/material'
import { Controller } from 'react-hook-form'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames/bind';
import styles from './InputField.module.scss'

const cx = classNames.bind(styles)

interface Props {
    control: any,
    className: string,
    errors: any,
    name: string,
    type: string,
    helperText: any,
    id: string,
    InputProps: any
}

const InputField = (prop: Props) => {
    const { control, className, errors, name, type, helperText, id, InputProps } = prop
    return (
        <Grid2 container spacing={1} className={cx("login-form-content")}>
            <Grid2 direction="row" xs={12}>
                <Typography>
                    <FormattedMessage id={id} />
                    <span></span>
                </Typography>
            </Grid2>
            <Grid2 direction='row' xs={12}>
                <Controller
                    name={name}
                    control={control}
                    defaultValue=''
                    rules={{ required: true }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            className={className}
                            name={name}
                            type={type}
                            fullWidth
                            variant='filled'
                            error={errors}
                            helperText={helperText}
                            InputProps={InputProps}
                        />
                    )}
                />
            </Grid2>
        </Grid2>
    )
}

export default InputField