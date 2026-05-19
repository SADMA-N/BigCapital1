import t from '@/store/types';
import type { TableQuery } from '@/store/store.types';

export const setBillsTableState = (queries: Partial<TableQuery>) => {
  return {
    type: t.BILLS_TABLE_STATE_SET,
    payload: { queries },
  };
};

export const resetBillsTableState = () => {
  return {
    type: t.BILLS_TABLE_STATE_RESET,
  };
};

export const setBillsSelectedRows = (selectedRows: Array<unknown>) => {
  return {
    type: 'BILLS/SET_SELECTED_ROWS',
    payload: selectedRows,
  };
};
