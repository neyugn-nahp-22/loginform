import { Box } from '@mui/material'
import { useForm } from 'react-hook-form'
import { DEPARTMENT, POSITION } from '../../../assets/data/data'
import { ICreateParams, ICreateValidation } from '../../../models/employee'
import SelectField from '../components/CreateSelectField'

const EmploymentDetailsComponent = () => {

    const { control, handleSubmit, formState: { errors } } = useForm<ICreateParams>({ mode: "onBlur" })
    return (
        <Box sx={{
            display: 'flex',
            flexFlow: "column wrap",
            padding: '0px 20px 20px',
            maxWidth: '560px',
            gap: "10px"
        }}
            component='form'
        >
            <SelectField
                label='department'
                name="department"
                require={false}
                control={control}
                placeholder='Choose Department'
                data={DEPARTMENT}
            />
            <SelectField
                label='position'
                name="position"
                require={false}
                control={control}
                placeholder='Choose Position'
                data={POSITION}
            />
        </Box>
    )
}

export default EmploymentDetailsComponent