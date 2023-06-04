import { Box, Button, Checkbox, CircularProgress, InputAdornment, Pagination, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import { ChangeEvent, useEffect, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { useHistory, useLocation } from 'react-router'

import { TABLE_FIELD } from '../../../assets/data/data'
import BreadcrumbComponent from '../../../components/BreadcrumbComponent/BreadcrumbComponent'
import { AddIcon, DeleteIcon, SearchIcon } from '../../../components/Icons'
import { ROUTES } from '../../../configs/routes'
import { getEmployeeByPage, searchEmployee } from '../../../services/employeeService'
import TableEmployee from '../components/TableEmployee'

import classNames from 'classnames/bind'
import CustomDivider from '../../../components/DividerComponent/DividerComponent'
import styles from '../../function/layouts/styles.module.scss'

const cx = classNames.bind(styles)

const EmployeePage = () => {
    const location = useLocation();
    const history = useHistory()
    const searchParams = new URLSearchParams(location.search);
    // const nameSearch = searchParams.get('search') || ''
    const currentPage = parseInt(searchParams.get('page') || '1');

    const [listDataByPage, setListDataByPage] = useState([])
    const [currPage, setCurrPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const [loading, setLoading] = useState(false)
    const [from, setFrom] = useState(0)
    const [to, setTo] = useState(0)
    const [totalEmployee, setTotalEmployee] = useState(0)
    const [searchQuery, setSearchQuery] = useState<string>('')
    // console.log(listDataByPage, 'aaaaaa');
    const [checkList, setCheckList] = useState<any>([])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (searchQuery) {
            const delay = setTimeout(() => {
                getDataSearch(currentPage, searchQuery)
                const url = `/employee?search=${searchQuery}&page=${currentPage}`;
                history.replace(url);
            }, 500);
            return () => clearTimeout(delay)
        }
        // else if (searchQuery === '') {
        //     const delay = setTimeout(() => {
        //         getDataSearch(currentPage, searchQuery)
        //         const url = `/employee?search=&page=${currentPage}`;
        //         history.replace(url);
        //     }, 500);
        //     return () => clearTimeout(delay)
        // }
        else {
            const delay = setTimeout(() => {
                getDataByPage(currentPage)
            }, 100);
            return () => clearTimeout(delay)
        }
    }, [currentPage, searchQuery, history])

    useEffect(() => {
        const savedSearchQuery = searchParams.get('search');
        if (savedSearchQuery !== null) { // Kiểm tra nếu có giá trị search từ URL
            setSearchQuery(savedSearchQuery);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getDataByPage = async (page: number) => {
        try {
            setLoading(true)
            const res = await getEmployeeByPage(page)
            setLoading(false)
            const data = res.data.data
            setTotalPage(data.last_page)
            setCurrPage(data.current_page)
            setFrom(data.from)
            setTo(data.to)
            setTotalEmployee(data.total)
            // console.log(data, 'listData');
            setListDataByPage(data.data)
            // console.log(`Data page=${page}: `, data);
        } catch (error) {
            console.log(error);
        }
    }

    const getDataSearch = async (page: number, search: string) => {
        try {
            setLoading(true)
            const res = await searchEmployee(page, search)
            setLoading(false)
            const data = res.data.data
            setTotalPage(data.last_page)
            setCurrPage(data.current_page)
            setFrom(data.from)
            setTo(data.to)
            setTotalEmployee(data.total)
            // console.log(data, 'listData');
            setListDataByPage(data.data)
            // console.log(`Data page=${page}: `, data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleChangePage = (event: ChangeEvent<unknown>, page: number) => {
        const url = new URL(window.location.href)
        console.log(url);
        url.searchParams.set('page', page.toString());
        window.history.pushState(null, '', url.toString())
        if (searchQuery) {
            getDataSearch(page, searchQuery)
        }
        else {
            getDataByPage(page)
        }
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value)
        // console.log(searchQuery, 'nameSearch');
    };

    const listID = listDataByPage.map((item: any) => item.id)

    // console.log(checkList, 'checklistttttt');


    const handleChecked = (event: ChangeEvent<HTMLInputElement>) => {
        event.target.checked ? setCheckList(listID) : setCheckList([])
    }

    const handleButtonClick = () => {
        history.push(ROUTES.add)
    }

    return (
        <>
            <BreadcrumbComponent items={[{ label: 'General', path: `${ROUTES.home}` }, { label: "Employee Management" }]} />
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: '10px', marginBottom: "20px" }}>
                <Typography variant="h3" sx={{
                    fontWeight: 500,
                    lineHeight: 1.19444,
                    fontSize: "36px",
                    letterSpacing: "-0.03em",
                    color: "rgb(17, 24, 28)"
                }}>
                    <FormattedMessage id="employeeManagement" />
                </Typography>
                <TextField
                    sx={{
                        maxWidth: "200px", background: "rgb(251, 252, 253)", lineHeight: 1.35714, fontSize: "14px", fontWeight: 400,
                        ".css-1q6at85-MuiInputBase-root-MuiOutlinedInput-root": {
                            fontSize: '16px',
                            letterSpacing: "-0.01em",
                            color: "rgb(17, 24, 28)",
                            borderRadius: "8px"
                        }
                    }}
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleInputChange}
                    size='small'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment sx={{ color: "rgb(215, 219, 223)" }} position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>
            <Paper sx={{
                color: "rgb(17, 24, 28)",
                boxShadow: "rgb(241, 243, 245) 0px 5px 20px",
                backgroundColor: "rgb(251, 252, 253)",
                borderRadius: "12px",
                padding: "10px",
                marginBottom: "10px"
            }}
                elevation={3}>
                <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
                    <Box sx={{ flex: "1 1 0%" }}></Box>
                    <Box sx={{ flexShrink: 0 }}>
                        <Stack sx={{ display: "flex", flexDirection: "row", gap: "4px" }}>
                            <Button
                                onClick={handleButtonClick}
                                sx={{
                                    appearance: "none", fontWeight: 400, textTransform: "capitalize",
                                    color: "rgb(0, 145, 255)", borderRadius: "6px", minWidth: "90px",
                                    padding: "8px 12px", height: "36px", fontSize: '14px', backgroundColor: "rgb(237, 246, 255)"
                                }} disableElevation size='small' startIcon={<AddIcon />}>
                                <Typography sx={{ fontSize: "14px", lineHeight: 1.35714 }} variant='body2'>Add</Typography>
                            </Button>
                            <Button
                                disabled={checkList.length !== 0 ? false : true}
                                sx={{
                                    appearance: "none", fontWeight: 400, textTransform: "capitalize",
                                    color: "rgb(229, 72, 77)", borderRadius: "6px", minWidth: "90px",
                                    padding: "8px 12px", height: "36px", fontSize: '14px', backgroundColor: "rgb(255, 239, 239)"
                                }} disableElevation size='small' startIcon={<DeleteIcon />}>
                                <Typography sx={{ fontSize: "14px", lineHeight: 1.35714 }} variant='body2'>Delete</Typography>
                            </Button>
                        </Stack>
                    </Box>
                </Box>
                <CustomDivider />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ position: "relative" }}>
                        <TableContainer className={cx('container')} style={{ maxHeight: '525px', minHeight: '525px' }}>
                            <Table stickyHeader sx={{ minWidth: "750px" }}>
                                <TableHead>
                                    <TableRow></TableRow>
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                fontSize: "14px",
                                                fontWeight: 600,
                                                padding: "0px !important",
                                                backgroundColor: "rgb(236, 238, 240) !important",
                                                textAlign: "center",
                                                borderTopLeftRadius: "8px",
                                                width: "36px",
                                                minWidth: "36px",
                                                border: "1px solid white"
                                            }}
                                            padding='checkbox'>
                                            <Checkbox sx={{
                                                padding: '4px',
                                                "&:hover": {
                                                    backgroundColor: "rgba(48, 164, 108, 0.08)"
                                                }
                                            }} onChange={handleChecked} checked={checkList.length !== 0} color='success'></Checkbox>
                                        </TableCell>
                                        {TABLE_FIELD.map((item, index) => (
                                            <TableCell
                                                align={item.label === "Home Address" ? 'center' : 'left'}
                                                sx={{
                                                    fontWeight: 600,
                                                    fontSize: "14px",
                                                    border: "1px solid white",
                                                    minWidth: item.minWidth,
                                                    borderTopLeftRadius: "0px",
                                                    borderTopRightRadius: '0px',
                                                    padding: '3px 10px',
                                                    backgroundColor: "rgb(236, 238, 240)"
                                                }}
                                                key={index}
                                                colSpan={item.label === "Home Address" ? 2 : 1}
                                            >
                                                {item.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {listDataByPage.map((data: any, index: number) => {
                                        return (
                                            <TableEmployee data={data} key={index} checked={checkList.includes(data?.id)} setCheck={setCheckList} />
                                        )
                                    })
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                        {loading && (
                            <Box sx={{ position: "absolute", inset: "0px", display: 'flex', justifyContent: 'center', alignItems: "center", backgroundColor: "rgba(223, 227, 230, 0.3)", transition: "all 0.3s ease 0s" }}>
                                <CircularProgress sx={{ width: "32px", height: "32px", color: "rgb(0, 145, 255)" }} />
                            </Box>
                        )}
                    </Box>
                    <CustomDivider />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Box sx={{ display: 'flex', gap: '5px', paddingTop: '10px', paddingBottom: '10px' }}>
                                <Pagination
                                    count={totalPage ? totalPage : 1}
                                    page={currPage}
                                    sx={{
                                        ".MuiPaginationItem-root": {
                                            minWidth: '48px',
                                            height: '35px',
                                            display: 'flex',
                                            borderRadius: '6px',
                                        },
                                        '.MuiPaginationItem-root:not(.MuiPaginationItem-firstLast, .MuiPaginationItem-previousNext, .MuiPaginationItem-ellipsis)': {
                                            background: 'rgb(241, 243, 245)',
                                            color: "rgb(104, 112, 118)"
                                        },
                                        ".Mui-selected": {
                                            background: "rgb(230, 232, 235) !important",
                                            color: "rgb(17, 24, 28) !important",
                                            fontWeight: 600,
                                            '&:hover': {
                                                backgroundColor: "rgba(193, 200, 205, 0.16) !important"
                                            }
                                        }
                                    }}
                                    showFirstButton
                                    showLastButton
                                    onChange={handleChangePage}
                                />
                                {totalEmployee !== 0 ?
                                    <Stack sx={{ flexDirection: 'row', minWidth: '103px', maxHeight: '35px', alignItems: 'center', justifyContent: 'center', borderRadius: '6px', padding: '8px 12px', gap: '5px', backgroundColor: "rgb(241, 243, 245)" }}>
                                        <Typography variant='body2' sx={{ color: 'rgb(104, 112, 118)', lineHeight: 1.35714 }}>{`${from} - ${to} of ${totalEmployee}`}</Typography>
                                    </Stack>
                                    : ''
                                }
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Paper >
        </>
    )
}

export default EmployeePage