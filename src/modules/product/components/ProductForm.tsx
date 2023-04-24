import React, { useCallback, useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { Button, Form } from 'react-bootstrap'
import { DeleteOutline } from '@mui/icons-material'
import { fetchThunk } from '../../common/redux/thunk'
import { API_PATHS } from '../../../configs/api'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { AppState } from '../../../redux/reducer'
import { Action } from 'redux'
import { IProduct } from '../../../models/product'
import { RESPONSE_STATUS_SUCCESS } from '../../../utils/httpResponseCode'

interface Props {
    product: Array<IProduct>
}

const ProducForm = () => {
    const dispatch = useDispatch<ThunkDispatch<AppState, null, Action<string>>>()
    const [values, setValues] = useState([])

    const getAllProduct = useCallback(
        async () => {
            const json = await dispatch(fetchThunk(API_PATHS.getAllProduct, 'get'))

            if (json?.code === RESPONSE_STATUS_SUCCESS) {
                setValues(json.data)
            }
        }, [dispatch])



    useEffect(() => {
        getAllProduct()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const handleDelete = (id: number) => {

    }
    return (
        <Form>
            <Form.Label style={{ fontWeight: 600, fontSize: "1.8rem" }}>List Product</Form.Label>
            <Form.Group className='' controlId="">
                <Form.Select style={{
                    width: "150px",
                    margin: "10px 5px"
                }}>
                    <option>Status</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </Form.Group>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Currency</th>
                        <th>Total</th>
                    </tr>
                    {values.map((item: any, index) => {
                        return (
                            <tr key={index}>
                                <th>{item.status}</th>
                                <th>{item.updatedAt}</th>
                                <th>{item.currency}</th>
                                <th>{item.total}</th>
                                <th>
                                    <Button variant='outline-primary'>View Details</Button>
                                    <Button variant='outline-danger'>
                                        <DeleteOutline />
                                    </Button>
                                </th>
                            </tr>
                        )
                    })}
                </thead>
            </Table >
        </Form>
    )
}

export default ProducForm