import { createReducer } from '@reduxjs/toolkit';
import { persistReducer, purgeStoredState } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createTableStateReducers } from '@/store/table-state.reducer';
import t from '@/store/types';
import type { TableQuery } from '@/store/store.types';

interface VendorCreditState {
  tableState: Partial<TableQuery>;
  selectedRows: Array<unknown>;
}

export const defaultTableQuery: Partial<TableQuery> = {
  pageSize: 20,
  pageIndex: 0,
  filterRoles: [],
  viewSlug: null,
};

const initialState: VendorCreditState = {
  tableState: defaultTableQuery,
  selectedRows: [],
};

const STORAGE_KEY = 'bigcapital:vendor_credits';

const CONFIG = {
  key: STORAGE_KEY,
  whitelist: [],
  storage,
};

const reducerInstance = createReducer(initialState, {
  ...createTableStateReducers('VENDOR_CREDITS', defaultTableQuery),

  [`VENDOR_CREDITS/SET_SELECTED_ROWS`]: (state: VendorCreditState, action: { payload: Array<unknown> }) => {
    state.selectedRows = action.payload;
  },

  [t.RESET]: () => {
    purgeStoredState(CONFIG);
  },
});

export const vendorCreditPersistReducer = persistReducer(CONFIG, reducerInstance);
