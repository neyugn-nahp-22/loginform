import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { API_PATHS } from '../../../configs/api'
import { FilterProduct, IProduct } from '../../../models/product'
import { AppState } from '../../../redux/reducer'
import { RESPONSE_STATUS_SUCCESS } from '../../../utils/httpResponseCode'
import { fetchThunk } from '../../common/redux/thunk'
import FilterComponent from '../components/FilterComponent'
import ProductForm from '../components/ProductForm'
import { deleteProduct } from '../redux/productReducer'

const ProductPage = () => {
    const dispatch = useDispatch<ThunkDispatch<AppState, null, Action<string>>>()


    const [values, setValues] = useState<IProduct>({
        id: 1,
        status: '',
        currency: '',
        fundingMethod: '',
        total: 1,
        order: '',
        client: '',
        invoice: '',
        createdAt: '',
        updatedAt: '',
    })

    const [filterProduct, setFilterProduct] = useState<FilterProduct>({
        status: '',
        client: '',
        createdAt: '',
        updatedAt: '',
        invoice: '',
    })
    const [listProduct, setListProduct] = useState([])

    const getAllProduct = useCallback(async () => {
        const json = await dispatch(fetchThunk(API_PATHS.getAllProduct, 'get'))
        if (json?.code === RESPONSE_STATUS_SUCCESS) {
            // console.log(json.data);
            setListProduct(json.data)
        }
    }, [dispatch])

    useEffect(() => {
        getAllProduct()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleDeleteProduct = useCallback(async (id: number) => {
        const currentId = await dispatch(fetchThunk(`${API_PATHS.getAllProduct}/${id}`, 'delete', { id: id }))

        if (currentId?.code === RESPONSE_STATUS_SUCCESS) {
            dispatch(deleteProduct(currentId.data))
            console.log(currentId.data, 'currentID');
            getAllProduct()
            return
        }
    }, [dispatch, getAllProduct])

    const handleFilterStatus = (e: ChangeEvent<HTMLSelectElement>) => {
        setFilterProduct((prev) => ({ ...prev, [e.target.value]: e.target.value }))
        console.log(values);
    }



    return (
        <div>
            <FilterComponent handleFilterStatus={() => handleFilterStatus} />
            <ProductForm values={listProduct} handleDeleteProduct={handleDeleteProduct} />
        </div>
    )
}

export default ProductPage