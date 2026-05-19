import t from '@/store/types';
import type { TableQuery } from '@/store/store.types';

export const setManualJournalsTableState = (queries: Partial<TableQuery>) => {
  return {
    type: t.MANUAL_JOURNALS_TABLE_STATE_SET,
    payload: { queries },
  };
};

export const setManualJournalsSelectedRows = (selectedRows: Array<unknown>) => {
  return {
    type: 'MANUAL_JOURNALS/SET_SELECTED_ROWS',
    payload: selectedRows,
  };
};
