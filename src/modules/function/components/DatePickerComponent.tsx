import { FormControl, TextField, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useState } from 'react';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { Controller } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

interface Props {
    label: string,
    control: any,
    name: string,
    type: string,
    errors?: any,
    helperText?: any,
    InputProps: any,
    require: boolean
}

const DatePickerField = (props: Props) => {
    const { label, control, errors, name, type, helperText, InputProps, require } = props
    const [startDate, setStartDate] = useState(new Date())
    return (
        <Grid2 sx={{ flexFlow: "row wrap", alignItems: 'center', justifyContent: 'space-between' }} container spacing={1}>
            <Grid2 xs={12} sm={12} md={5} lg={4.8} xl={4}>
                <Typography sx={{ display: 'flex', flexWrap: "wrap" }}>
                    <FormattedMessage id={label} />
                    {
                        require === true
                            ? <Typography component={'span'} sx={{ letterSpacing: "-0.01em", color: "rgb(229, 72, 77)" }}>*</Typography>
                            : null
                    }
                </Typography>
            </Grid2>
            <Grid2 xs={12} sm={12} md={7} lg={7.2} xl={8}>

                <Controller
                    name={name}
                    control={control}
                    defaultValue=''
                    rules={{ required: require }}
                    render={({ field }) => (
                        <DatePicker selected={startDate} onChange={(date: any) => setStartDate(date)} />
                    )} />
            </Grid2>
        </Grid2>
    )
}

export default DatePickerField