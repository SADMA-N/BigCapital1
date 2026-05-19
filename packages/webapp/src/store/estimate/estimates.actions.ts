import t from '@/store/types';
import type { TableQuery } from '@/store/store.types';

export const setEstimatesTableState = (queries: Partial<TableQuery>) => {
  return {
    type: t.ESTIMATES_TABLE_STATE_SET,
    payload: { queries },
  };
};

export const resetEstimatesTableState = () => {
  return {
    type: t.ESTIMATES_TABLE_STATE_RESET,
  };
}

export const setEstimatesSelectedRows = (selectedRows: Array<unknown>) => {
  return {
    type: 'ESTIMATES/SET_SELECTED_ROWS',
    payload: selectedRows,
  };
};
