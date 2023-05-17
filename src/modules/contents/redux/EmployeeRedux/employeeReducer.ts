import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllEmployee } from '../../../../services/employeeService';

export interface initialEmployeeState {
  loading: boolean;
  id: number;
  name: string;
  gender: number;
  card_number: string;
  bank_account_no: string;
  family_card_number: string;
  marriage_code: string;
  mother_name: string;
  pob: string;
  dob: string;
  home_address_1: string;
  home_address_2: string;
  nc_id: string;
  contract_start_date: string;
  first_contract_date: string;
  secound_contract_date: string;
  deleted_at: string;
  department_name: string;
  type: string;
  basic_salary: number;
  position_name: string;
  entitle_ot: string;
  meal_allowance_paid: string;
  meal_allowance: number;
  grade_name: string;
}

export const initialState: initialEmployeeState = {
  loading: false,
  id: 0,
  name: '',
  gender: 0,
  card_number: '',
  bank_account_no: '',
  family_card_number: '',
  marriage_code: '',
  mother_name: '',
  pob: '',
  dob: '',
  home_address_1: '',
  home_address_2: '',
  nc_id: '',
  contract_start_date: '',
  first_contract_date: '',
  secound_contract_date: '',
  deleted_at: '',
  department_name: '',
  type: '',
  basic_salary: 0,
  position_name: '',
  entitle_ot: '',
  meal_allowance_paid: '',
  meal_allowance: 0,
  grade_name: '',
};

export const getEmployee = createAsyncThunk<void, any, {}>(
  'employee/getAllEmployee',
  async (data, { rejectWithValue }) => {
    try {
      const res = await getAllEmployee();
      return res;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

const employeeReducer = createSlice({
  name: 'employee',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEmployee.pending, (state, action) => {
      state.loading = true;
    });
  },
});

export default employeeReducer.reducer;
