import { Checkbox, TableCell, TableRow } from '@mui/material';
import { ChangeEvent } from 'react';
import { TABLE_FIELD, Type } from '../../../assets/data/data';

const styleTableCell = {
    color: "rgb(104, 112, 118)",
    padding: "0px 10px",
    border: "1px solid white",
    lineHeight: 1.5,
    fontSize: "12px"
}

const TableEmployee = ({ data, checked, setCheck }: any) => {
    // const [isChecked, setIsChecked] = useState(false)

    const handleChecked = (event: ChangeEvent<HTMLInputElement>, id: number) => {
        // setIsChecked(!isChecked)
        // console.log(event.target.checked, 'event');

        setCheck((prevList: number[]) => {
            // console.log(prevList, 'preList');
            return !event.target.checked ? prevList?.filter((item: any) => item !== id) : [...prevList, id]
        })
    }

    // useEffect(() => { setIsChecked(checked) }, [checked])

    return (
        <TableRow sx={{ backgroundColor: "rgb(248, 249, 250)", opacity: 1 }} hover>
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
                }} onChange={(event) => handleChecked(event, data?.id)} color='success' checked={checked}></Checkbox>
            </TableCell>
            {TABLE_FIELD.map((item: any, index: number) => {
                switch (item.id) {
                    case 'contracts':
                        if (item.label === "First Contract") {
                            return (
                                <TableCell key={index} sx={styleTableCell}>{data[item.id][0] ? data[item.id][0].contract_date : ''}</TableCell>
                            )
                        }
                        else if (item.label === "Second Contract") {
                            return (
                                <TableCell key={index} sx={styleTableCell}>{data[item.id][1] ? data[item.id][1].contract_date : ''}</TableCell>
                            )
                        }
                        else if (item.label === "End Contract") {
                            return (
                                <TableCell key={index} sx={styleTableCell}>{data[item.id][2] ? data[item.id][2].contract_date : ''}</TableCell>
                            )
                        }
                        break;
                    case 'gender':
                        return (
                            <TableCell key={index} sx={styleTableCell}>{data[item.id] === 0 ? 'Male' : "Female"}</TableCell>
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
                            <TableCell key={index} sx={styleTableCell}>{value}</TableCell>
                        )
                    case 'entitle_ot':
                    case 'meal_allowance_paid':
                        return (
                            <TableCell key={index} sx={styleTableCell}>{data[item.id] >= 1 ? "Yes" : ""}</TableCell>
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

                return (
                    <TableCell
                        sx={styleTableCell}
                        key={index}
                    >
                        {value}
                    </TableCell>
                )
            })}
        </TableRow>
    )
}

export default TableEmployee