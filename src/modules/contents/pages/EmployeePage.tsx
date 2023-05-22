import { Box, Button, Checkbox, CircularProgress, Divider, Pagination, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { TABLE_FIELD } from '../../../assets/data/data'
import BreadcrumbComponent from '../../../components/BreadcrumbComponent/BreadcrumbComponent'
import { AddIcon, DeleteIcon } from '../../../components/Icons'
import SearchComponent from '../../../components/SearchField/SearchField'
import { ROUTES } from '../../../configs/routes'
import TableEmployee from '../components/TableEmployee'
import { UseEmployee } from '../hooks/UseEmployee'
import { getEmployee } from '../redux/EmployeeRedux/employeeReducer'
import { useHistory } from 'react-router'
import { FormattedMessage } from 'react-intl'


const EmployeePage = () => {
    const dispatch = useDispatch()
    const { listData, loading, currentPage, firstPage, lastPage, from, linkPage, nextPage, prevPage, to, totalEmployee, totalPage } = UseEmployee()

    const [isChecked, setIsChecked] = useState(false)
    const history = useHistory()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { dispatch<any>(getEmployee()) }, [])

    const handleChecked = () => {
        setIsChecked(!isChecked)
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
                <SearchComponent />
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
                                disabled={isChecked ? false : true}
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
                <Divider />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ position: "relative" }}>
                        <TableContainer style={{ maxHeight: '525px', minHeight: '525px' }}>
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
                                            }} onChange={handleChecked} checked={isChecked} color='success'></Checkbox>
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
                                    {listData.map((data: any, index: number) => (
                                        <TableEmployee data={data} key={index} checked={isChecked} />
                                    ))
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
                    <Divider />
                    <Box>
                        <Box>
                            <Box>
                                <Pagination
                                    count={totalPage ? totalPage : 1}
                                    showFirstButton
                                    showLastButton
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Paper >
        </>
    )
}

export default EmployeePage