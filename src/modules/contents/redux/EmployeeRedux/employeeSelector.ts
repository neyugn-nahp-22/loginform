import { AppState } from '../../../../redux/reducer';

export const employeeSelector = (state: AppState) => state.employee.id;
