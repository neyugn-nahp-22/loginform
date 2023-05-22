import { Box, Stack } from '@mui/material'
import React from 'react'
import InputField from './AddFieldInput'

const PersonalInformation = () => {
    return (
        <Box sx={{ display: 'flex', flexWrap: "wrap", paddingBottom: '20px' }} component='form'>
            <Stack sx={{ flex: "1 1 0%", paddingLeft: "20px", paddingRight: "20px", gap: "10px" }}>
                <InputField label='homeAddress1' />
            </Stack>
            <Stack sx={{ flex: "1 1 0%", paddingLeft: "20px", paddingRight: "20px", gap: "10px" }}>

            </Stack>
        </Box>
    )
}

export default PersonalInformation