import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, Toolbar, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import { AttendanceIcon, EmployeeIcon, GlobalSettingIcon, LeaveIcon, MasterIcon, PayrollIcon, SettingIcon, UserIcon } from '../../components/Icons'
import { ROUTES } from '../../configs/routes'
import styles from './Sidebar.module.scss'
import React, { MouseEvent, useEffect, useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'

const cx = classNames.bind(styles)

const LIST_ITEM = [
    {
        id: 0,
        href: ROUTES.attendance,
        icon: <AttendanceIcon />,
        title: 'Attendance Management'
    },
    {
        id: 1,
        href: ROUTES.leave,
        icon: <LeaveIcon />,
        title: 'Leave Management'
    },
    {
        id: 2,
        href: ROUTES.payroll,
        icon: <PayrollIcon />,
        title: 'Payroll Management'
    },
    {
        id: 3,
        href: ROUTES.employee,
        icon: <EmployeeIcon />,
        title: 'Employee Management'
    },
    {
        id: 4,
        href: ROUTES.user,
        icon: <UserIcon />,
        title: 'User Management'
    },
    {
        id: 5,
        href: ROUTES.master,
        icon: <MasterIcon />,
        title: 'Master Management'
    },
]

const MORE_ITEM = [
    {
        id: 6,
        href: ROUTES.globalsetting,
        icon: <GlobalSettingIcon />,
        title: "Global Settings"
    },
    {
        id: 7,
        href: ROUTES.settings,
        icon: <SettingIcon />,
        title: "Settings"
    }
]

const drawerWidth = 329

const Sidebar = () => {

    const [selectedIndex, setSelectedIndex] = useState(0)
    const history = useHistory()
    const location = useLocation()

    useEffect(() => {
        const storedIndex = localStorage.getItem('selectedIndex');
        const index = storedIndex ? parseInt(storedIndex, 10) : 0;
        setSelectedIndex(index);
    }, []);

    useEffect(() => {
        localStorage.setItem('selectedIndex', selectedIndex.toString());
    }, [selectedIndex]);

    const handleClickListItem = (index: number, href: string) => {
        setSelectedIndex(index);
        history.push(href);
    };

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
                    {LIST_ITEM.map((item, index) => {
                        return (
                            <ListItemButton
                                selected={selectedIndex === index}
                                onClick={() => handleClickListItem(index, item.href)}
                                className={cx("more-btn")}
                                key={index}
                            >
                                <ListItemIcon sx={{
                                    color: "rgb(215, 219, 223)",
                                    marginRight: "10px",
                                    width: "36px",
                                    minWidth: "36px",
                                    borderRadius: "50%",
                                    backgroundColor: "rgb(241, 243, 245)",
                                    justifyContent: 'center',
                                    alignItems: "center"
                                }}>
                                    {item.icon}
                                </ListItemIcon>
                                <Typography sx={{ fontSize: "16px" }}>{item.title}</Typography>
                            </ListItemButton>
                        )
                    })
                    }
                    <Divider />
                    <Typography variant='h4' className={cx("advance")}>Advance</Typography>
                    {MORE_ITEM.map((item, key) => (
                        <ListItemButton
                            key={key}
                            selected={selectedIndex === key}
                            onClick={() => handleClickListItem(key, item.href)}
                            className={cx("more-btn")}>
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