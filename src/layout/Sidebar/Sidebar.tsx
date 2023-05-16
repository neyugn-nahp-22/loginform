import { Divider, Drawer, List, ListItemButton, ListItemIcon, Toolbar, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import { AttendanceIcon, EmployeeIcon, GlobalSettingIcon, LeaveIcon, MasterIcon, PayrollIcon, SettingIcon, UserIcon } from '../../components/Icons'
import { ROUTES } from '../../configs/routes'
import styles from './Sidebar.module.scss'

const cx = classNames.bind(styles)

const LIST_ITEM = [
    {
        href: ROUTES.attendance,
        icon: <AttendanceIcon />,
        title: 'Attendance Management'
    },
    {
        href: ROUTES.leave,
        icon: <LeaveIcon />,
        title: 'Leave Management'
    },
    {
        href: ROUTES.payroll,
        icon: <PayrollIcon />,
        title: 'Payroll Management'
    },
    {
        href: ROUTES.employee,
        icon: <EmployeeIcon />,
        title: 'Employee Management'
    },
    {
        href: ROUTES.user,
        icon: <UserIcon />,
        title: 'User Management'
    },
    {
        href: ROUTES.master,
        icon: <MasterIcon />,
        title: 'Master Management'
    },
]

const MORE_ITEM = [
    {
        href: ROUTES.globalsetting,
        icon: <GlobalSettingIcon />,
        title: "Global Settings"
    },
    {
        href: ROUTES.settings,
        icon: <SettingIcon />,
        title: "Settings"
    }
]

const drawerWidth = 329

const Sidebar = () => {
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    overflow: 'hidden',
                    borderRight: "1px solid rgba(193, 200, 205, 0.24)"
                }
            }}
            variant='permanent'
        >
            <SimpleBar style={{ maxHeight: "100%", padding: "24px" }}>
                <Toolbar></Toolbar>
                <List component='nav'>
                    <Typography className={cx("title")} variant='h4'>General</Typography>
                    {LIST_ITEM.map((item, key) => (
                        <ListItemButton className={cx("more-btn")} key={key} href={item.href}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <Typography>{item.title}</Typography>
                        </ListItemButton>
                    ))
                    }
                    <Divider />
                    <Typography variant='h4' className={cx("advance")}>Advance</Typography>
                    {MORE_ITEM.map((item, key) => (
                        <ListItemButton className={cx("more-btn")} key={key} href={item.href}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <Typography>{item.title}</Typography>
                        </ListItemButton>
                    ))
                    }
                </List>
            </SimpleBar>
        </Drawer >
    )
}

export default Sidebar