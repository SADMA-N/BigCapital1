import { createReducer } from '@reduxjs/toolkit';
import { persistReducer, purgeStoredState } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createTableStateReducers } from '@/store/table-state.reducer';
import t from '@/store/types';
import type { TableQuery } from '@/store/store.types';

interface InvoicesState {
  tableState: Partial<TableQuery>;
  selectedRows: Array<unknown>;
}

export const defaultTableQuery: Partial<TableQuery> = {
  pageSize: 20,
  pageIndex: 0,
  filterRoles: [],
  viewSlug: null,
};

const initialState: InvoicesState = {
  tableState: defaultTableQuery,
  selectedRows: [],
};

const STORAGE_KEY = 'bigcapital:invoices';

const CONFIG = {
  key: STORAGE_KEY,
  whitelist: [],
  storage,
};

const reducerInstance = createReducer(initialState, {
  ...createTableStateReducers('INVOICES', defaultTableQuery),

  [`INVOICES/SET_SELECTED_ROWS`]: (state: InvoicesState, action: { payload: Array<unknown> }) => {
    state.selectedRows = action.payload;
  },

  [`INVOICES/RESET_SELECTED_ROWS`]: (state: InvoicesState) => {
    state.selectedRows = [];
  },

  [t.RESET]: () => {
    purgeStoredState(CONFIG);
  },
});

export const salesInvoicesPersistReducer = persistReducer(CONFIG, reducerInstance);
