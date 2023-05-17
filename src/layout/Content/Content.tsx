import React from 'react'
import { Routes } from '../../Routes'
import { Route, Switch } from 'react-router-dom'
import EmployeePage from '../../modules/contents/pages/EmployeePage'
import { ROUTES } from '../../configs/routes'
import { Box, Stack } from '@mui/material'

const Content = () => {
    return (
        <Stack sx={{ flex: "1 1 0%", overflow: "hidden", backgroundColor: "rgb(241, 243, 245)" }}>
            <Box sx={{ maxWidth: "1170px", flex: "1 1 0%", margin: "30px 46px 0px" }}>
                {/* <Routes /> */}
                <Switch>
                    <Route path={ROUTES.employee}>
                        <EmployeePage />
                    </Route>
                </Switch>
            </Box>
        </Stack>
    )
}

export default Content