import { createReducer } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createTableStateReducers } from '@/store/table-state.reducer';
import t from '@/store/types';
import type { TableQuery } from '@/store/store.types';

interface CustomersState {
  tableState: Partial<TableQuery>;
  selectedRows: Array<unknown>;
}

// Default table query state.
export const defaultTableQueryState: Partial<TableQuery> = {
  pageSize: 20,
  pageIndex: 0,
  filterRoles: [],
  viewSlug: null,
};

// initial data.
const initialState: CustomersState = {
  tableState: defaultTableQueryState,
  selectedRows: [],
};

const reducerInstance = createReducer(initialState, {
  ...createTableStateReducers('CUSTOMERS', defaultTableQueryState),

  ['CUSTOMERS/SET_SELECTED_ROWS']: (state: CustomersState, action: { payload: Array<unknown> }) => {
    state.selectedRows = action.payload;
  },

  ['CUSTOMERS/RESET_SELECTED_ROWS']: (state: CustomersState) => {
    state.selectedRows = [];
  },

  [t.RESET]: () => initialState,
});

const STORAGE_KEY = 'bigcapital:estimates';

export const customersPersistReducer = persistReducer(
  {
    key: STORAGE_KEY,
    whitelist: [],
    storage,
  },
  reducerInstance,
);
