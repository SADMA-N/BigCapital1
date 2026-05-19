import t from '@/store/types';
import type { TableQuery } from '@/store/store.types';

export const setCreditNoteTableState = (queries: Partial<TableQuery>) => {
  return {
    type: t.CREDIT_NOTES_TABLE_STATE_SET,
    payload: { queries },
  };
};

export const resetCreditNoteTableState = () => {
  return {
    type: t.CREDIT_NOTES_TABLE_STATE_RESET,
  };
};

export const setCreditNotesSelectedRows = (selectedRows: Array<unknown>) => {
  return {
    type: 'CREDIT_NOTES/SET_SELECTED_ROWS',
    payload: selectedRows,
  };
};
