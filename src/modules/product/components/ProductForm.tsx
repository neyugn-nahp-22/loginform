import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from 'antd'
import { useCallback, useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useDispatch } from 'react-redux'
import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { API_PATHS } from '../../../configs/api'
import { AppState } from '../../../redux/reducer'
import { RESPONSE_STATUS_SUCCESS } from '../../../utils/httpResponseCode'
import { fetchThunk } from '../../common/redux/thunk'
import { deleteProduct } from '../redux/productReducer'
import FilterComponent from './FilterComponent'


const ProducForm = () => {
    const dispatch = useDispatch<ThunkDispatch<AppState, null, Action<string>>>()
    const [values, setValues] = useState([])


    const totalRecord = values.length;
    const totalPage = Math.ceil(totalRecord / 5)

    console.log(totalPage);
    let page = []
    for (let i = 1; i <= totalPage; i++) {
        let button = (
            <Button key={i} onClick={() => { }}>{i}</Button>
        )
        page.push(button)
    }


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

    const handleDeleteProd = async (currId: string) => {
        const currentID = await dispatch(fetchThunk(`${API_PATHS.getAllProduct}/${currId}`, 'delete', { id: currId }))

        if (currentID?.code === RESPONSE_STATUS_SUCCESS) {
            dispatch(deleteProduct(currentID.data))
            getAllProduct()
            return
        }
    }


    return (
        <div>
            <FilterComponent />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Currency</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                    {values.map((item: any, index) => {
                        return (
                            <tr key={index}>
                                <th>{item.status}</th>
                                <th>{item.updatedAt}</th>
                                <th>{item.currency}</th>
                                <th>{item.total}</th>
                                <th>
                                    <Button type='primary' style={{ margin: "10px" }}>View Details</Button>
                                    <Button onClick={() => handleDeleteProd(item.id)} danger>
                                        <FontAwesomeIcon icon={faTrashCan} />
                                    </Button>
                                </th>
                            </tr>
                        )
                    })}
                </thead>
            </Table >
            <div>{page}</div>
        </div >

    )
}

export default ProducForm