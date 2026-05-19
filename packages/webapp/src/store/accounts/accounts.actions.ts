import t from '@/store/types';
import type { TableQuery } from '@/store/store.types';

export const setAccountsTableState = (queries: Partial<TableQuery>) => {
  return {
    type: t.ACCOUNTS_TABLE_STATE_SET,
    payload: { queries },
  };
};

/**
 * Resets the accounts table state.
 */
export const resetAccountsTableState = () => {
  return {
    type: t.ACCOUNTS_TABLE_STATE_RESET,
  };
};

/**
 * Sets the selected rows for accounts table.
 */
export const setAccountsSelectedRows = (selectedRows: Array<unknown>) => {
  return {
    type: 'ACCOUNTS/SET_SELECTED_ROWS',
    payload: selectedRows,
  };
};