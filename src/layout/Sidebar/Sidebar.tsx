import { Divider, Drawer, List, ListItemButton, ListItemIcon, Paper, Toolbar, Typography } from '@mui/material'
import SimpleBar from 'simplebar-react'
import { AttendanceIcon, EmployeeIcon, GlobalSettingIcon, LeaveIcon, MasterIcon, PayrollIcon, SettingIcon, UserIcon } from '../../components/Icons'
import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'

const cx = classNames.bind(styles)

const LIST_ITEM = [
    {
        href: "/attendance",
        icon: <AttendanceIcon />,
        title: 'Attendance Management'
    },
    {
        href: "/leave",
        icon: <LeaveIcon />,
        title: 'Leave Management'
    },
    {
        href: "/payroll",
        icon: <PayrollIcon />,
        title: 'Payroll Management'
    },
    {
        href: "/employee",
        icon: <EmployeeIcon />,
        title: 'Employee Management'
    },
    {
        href: "/user",
        icon: <UserIcon />,
        title: 'User Management'
    },
    {
        href: "/master",
        icon: <MasterIcon />,
        title: 'Master Management'
    },
]

const Sidebar = () => {
    return (
        <Drawer className={cx("wrapper")} style={{ width: '329px' }} variant='permanent'>
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
                    <ListItemButton className={cx("more-btn")} href='/globalsetting'>
                        <ListItemIcon>
                            <GlobalSettingIcon />
                        </ListItemIcon>
                        <Typography>Global Settings</Typography>
                    </ListItemButton>
                    <ListItemButton className={cx("more-btn")} href='/settings'>
                        <ListItemIcon>
                            <SettingIcon />
                        </ListItemIcon>
                        <Typography>Settings</Typography>
                    </ListItemButton>
                </List>
            </SimpleBar>
        </Drawer >
    )
}

export default Sidebar