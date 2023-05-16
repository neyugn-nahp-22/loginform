import React from 'react'
import { Routes } from '../../Routes'
import { Route, Switch } from 'react-router-dom'
import EmployeePage from '../../modules/home/pages/EmployeePage'
import { ROUTES } from '../../configs/routes'

const Content = () => {
    return (
        <div>
            {/* <Routes /> */}
            <Switch>
                <Route path={ROUTES.employee}>
                    <EmployeePage />
                </Route>
            </Switch>
        </div>
    )
}

export default Content