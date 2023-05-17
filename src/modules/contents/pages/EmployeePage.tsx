import { Box, Button, Checkbox, Divider, Paper, Stack, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import BreadcrumbComponent from '../../../components/BreadcrumbComponent/BreadcrumbComponent'
import { AddIcon, DeleteIcon } from '../../../components/Icons'
import SearchComponent from '../../../components/SearchField/SearchField'
import { ROUTES } from '../../../configs/routes'
import { TABLE_FIELD } from '../../../assets/data/data'
import { useSelector } from 'react-redux'
import { employeeSelector } from '../redux/EmployeeRedux/employeeSelector'
import { useEffect, useState } from 'react'
import { getAllEmployee } from '../../../services/employeeService'



const EmployeePage = () => {

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
                    Employee Management
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
                                sx={{
                                    appearance: "none", fontWeight: 400, textTransform: "capitalize",
                                    color: "rgb(0, 145, 255)", borderRadius: "6px", minWidth: "90px",
                                    padding: "8px 12px", height: "36px", fontSize: '14px', backgroundColor: "rgb(237, 246, 255)"
                                }} disableElevation size='small' startIcon={<AddIcon />}>
                                <Typography sx={{ fontSize: "14px", lineHeight: 1.35714 }} variant='body2'>Add</Typography>
                            </Button>
                            <Button
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
                                    <TableRow>
                                        <TableCell padding='checkbox'>
                                            <Checkbox color='success'></Checkbox>
                                        </TableCell>
                                        {TABLE_FIELD.map((item, index) => (
                                            <TableCell
                                                align={item.colspan === 2 ? 'center' : 'left'}
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
                                                colSpan={item.colspan}>{item.name}</TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                            </Table>
                        </TableContainer>
                    </Box>
                    <Divider />
                    <Box></Box>
                </Box>
            </Paper>
        </>
    )
}

export default EmployeePage