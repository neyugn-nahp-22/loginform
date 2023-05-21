import { Checkbox, TableCell, TableRow } from '@mui/material';
import { useEffect, useState } from 'react';
import { TABLE_FIELD, Type } from '../../../assets/data/data';

interface Props {
    data: any,
    checked: boolean,
    key: number
}

const styleTableCell = {
    color: "rgb(104, 112, 118)",
    padding: "0px 10px",
    border: "1px solid white",
    lineHeight: 1.5,
    fontSize: "12px"
}

const TableEmployee = (props: Props) => {
    const { data, checked, key } = props
    const [isChecked, setIsChecked] = useState(false)

    const handleChecked = () => {
        setIsChecked(!isChecked)
    }

    useEffect(() => { setIsChecked(checked) }, [checked])

    return (
        <TableRow sx={{ backgroundColor: "rgb(248, 249, 250)", opacity: 1 }} hover key={key}>
            <TableCell sx={{
                lineHeight: 1.35714,
                fontSize: "14px",
                width: '36px',
                border: "1px solid white",
                textAlign: "center",
                padding: 0
            }} padding='checkbox'>
                <Checkbox sx={{
                    "&:hover": {
                        backgroundColor: "rgba(48, 164, 108, 0.08)"
                    },
                    padding: "3px",
                }} onChange={handleChecked} checked={isChecked} color='success'></Checkbox>
            </TableCell>
            {TABLE_FIELD.map((item: any, index: number) => {
                switch (item.id) {
                    case 'contracts':
                        if (item.label === "First Contract") {
                            return (
                                <TableCell sx={styleTableCell}>{data[item.id][0] ? data[item.id][0].contract_date : ''}</TableCell>
                            )
                        }
                        else if (item.label === "Second Contract") {
                            return (
                                <TableCell sx={styleTableCell}>{data[item.id][1] ? data[item.id][1].contract_date : ''}</TableCell>
                            )
                        }
                        else if (item.label === "End Contract") {
                            return (
                                <TableCell sx={styleTableCell}>{data[item.id][2] ? data[item.id][2].contract_date : ''}</TableCell>
                            )
                        }
                        break;
                    case 'gender':
                        return (
                            <TableCell sx={styleTableCell}>{data[item.id] === 0 ? 'Male' : "Female"}</TableCell>
                        )
                    case 'type':
                        let value;
                        if (data[item.id] === "0") {
                            value = Type.Permanent.name
                        }
                        else if (data[item.id] === "1") {
                            value = Type.PartTime.name
                        }
                        else if (data[item.id] === "2") {
                            value = Type.Contract.name
                        }
                        return (
                            <TableCell sx={styleTableCell}>{value}</TableCell>
                        )
                    case 'entitle_ot':
                    case 'meal_allowance_paid':
                        return (
                            <TableCell sx={styleTableCell}>{data[item.id] >= 1 ? "Yes" : ""}</TableCell>
                        )
                    default:
                        break;
                }
                if (item.label === 'Home Address') {
                    return item.id.map((values: string) => {
                        return (
                            <TableCell
                                sx={styleTableCell}
                                key={values}>
                                {data[values]}
                            </TableCell>
                        );
                    });
                }

                const value = data[item.id];

                return <TableCell
                    sx={styleTableCell}
                    key={index}
                >
                    {value}
                </TableCell>
            })}
        </TableRow>
    )
}

export default TableEmployee