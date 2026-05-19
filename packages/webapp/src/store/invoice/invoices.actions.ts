import t from '@/store/types';
import type { TableQuery } from '@/store/store.types';

export const setInvoicesTableState = (queries: Partial<TableQuery>) => {
  return {
    type: t.INVOICES_TABLE_STATE_SET,
    payload: { queries },
  };
};

export const resetInvoicesTableState= () => {
  return {
    type: t.INVOICES_TABLE_STATE_RESET,
  };
}

export const setInvoicesSelectedRows = (selectedRows: Array<unknown>) => {
  return {
    type: 'INVOICES/SET_SELECTED_ROWS',
    payload: selectedRows,
  };
};

export const resetInvoicesSelectedRows = () => {
  return {
    type: 'INVOICES/RESET_SELECTED_ROWS',
  };
};