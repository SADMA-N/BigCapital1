import t from '@/store/types';
import type { TableQuery } from '@/store/store.types';

export const setReceiptsTableState = (queries: Partial<TableQuery>) => {
  return {
    type: t.RECEIPTS_TABLE_STATE_SET,
    payload: { queries },
  };
};

export const resetReceiptsTableState = () => {
  return {
    type: t.RECEIPTS_TABLE_STATE_RESET,
  };
}

export const setReceiptsSelectedRows = (selectedRows: Array<unknown>) => {
  return {
    type: t.RECEIPTS_SELECTED_ROWS_SET,
    payload: selectedRows,
  };
};