import { Button, DatePicker, Input, Select } from 'antd';
import { ChangeEvent, useState } from 'react';
import './Filter.scss';
import { IProduct } from '../../../models/product';

const { Option } = Select



const FilterComponent = () => {

    const [formValues, setFormValues] = useState<IProduct>({
        id: 0,
        total: 0,
        status: "",
        currency: "",
        updatedAt: "",
        createdAt: "",
    })


    const optionStyles = {
        pending: { color: '#696a67', fontWeight: 600 },
        fulfilled: { color: '#5ae839', fontWeight: 600 },
        processing: { color: '#F4b45b', fontWeight: 600 },
        received: { color: '#31a7cb', fontWeight: 600 },
    };

    const handleStatusChange = () => (e: ChangeEvent<HTMLSelectElement>) => {



    }

    const handleClickFilter = () => {
    }
    return (
        <div className='wrapper'>
            <div>
                <Select onChange={handleStatusChange()} className='menu-items' style={{ width: 150 }} >
                    <Option key="pending" style={optionStyles.pending}>Pending</Option>
                    <Option key="received" style={optionStyles.received}>Received</Option>
                    <Option key="processing" style={optionStyles.processing}>Processing</Option>
                    <Option key="fulfilled" style={optionStyles.fulfilled}>Fulfilled</Option>
                </Select>
                <Select className='menu-items' defaultValue="Client" style={{ width: 150 }}></Select>
                <DatePicker className='menu-items' style={{ width: 150 }} placeholder='From' />
                <DatePicker className='menu-items' style={{ width: 150 }} placeholder='To' />
                <Input className='menu-items' placeholder='Invoice#' style={{ width: 150 }} />
            </div>
            <div>
                <Button onClick={() => handleClickFilter()} style={{ marginRight: "20px", width: 100 }} type='primary' ghost>Apply</Button>
                <Button style={{ marginRight: "20px", width: 100 }} danger>Clear</Button>
            </div>
        </div>
    )
}

export default FilterComponent