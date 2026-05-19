import t from '@/store/types';
import type { TableQuery } from '@/store/store.types';

/**
 * Sets global table state of the table.
 * @param {object} queries
 */
export const setExpensesTableState = (queries: Partial<TableQuery>) => {
  return {
    type: t.EXPENSES_TABLE_STATE_SET,
    payload: { queries },
  };
};

export const resetExpensesTableState = () => {
  return {
    type: t.EXPENSES_TABLE_STATE_RESET,
  };
};

export const setExpensesSelectedRows = (selectedRows: Array<unknown>) => {
  return {
    type: 'EXPENSES/SET_SELECTED_ROWS',
    payload: selectedRows,
  };
};
