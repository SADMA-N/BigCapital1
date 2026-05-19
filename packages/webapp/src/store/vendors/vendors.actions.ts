import t from '@/store/types';
import type { TableQuery } from '@/store/store.types';

export const setVendorsTableState = (queries: Partial<TableQuery>) => {
  return {
    type: t.VENDORS_TABLE_STATE_SET,
    payload: { queries },
  };
}

export const resetVendorsTableState = () => {
  return {
    type: t.VENDORS_TABLE_STATE_RESET,
  }
}

export const setVendorsSelectedRows = (selectedRows: Array<unknown>) => {
  return {
    type: 'VENDORS/SET_SELECTED_ROWS',
    payload: selectedRows,
  };
};

export const resetVendorsSelectedRows = () => {
  return {
    type: 'VENDORS/RESET_SELECTED_ROWS',
  };
};