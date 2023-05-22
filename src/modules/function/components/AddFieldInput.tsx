import { TextField, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import { FormattedMessage } from 'react-intl'

interface Props {
    label: string,
}

const InputField = (props: Props) => {
    const { label } = props
    return (
        <Grid2 sx={{ flexFlow: "row wrap", alignItems: 'center', justifyContent: 'space-between' }} container spacing={1}>
            <Grid2 xs={12} sm={12} md={5} lg={4.8} xl={4}>
                <Typography sx={{ display: 'flex', flexWrap: "wrap" }}>
                    <FormattedMessage id={label} />
                    <Typography component={'span'} sx={{ letterSpacing: "-0.01em", color: "rgb(229, 72, 77)" }}>*</Typography>
                </Typography>
            </Grid2>
            <Grid2 xs={12} sm={12} md={7} lg={7.2} xl={8}>
                <TextField
                    variant='filled'
                    fullWidth
                    sx={{
                        ".MuiInputBase-root": {
                            borderRadius: '6px',
                            backgroundColor: "rgb(241, 243, 245)",
                            overflow: "hidden",
                            "input": {
                                padding: "12px"
                            }
                        }

                    }}
                />
            </Grid2>
        </Grid2>
    )
}

export default InputField