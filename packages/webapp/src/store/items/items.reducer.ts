import { createReducer } from '@reduxjs/toolkit';
import { persistReducer, purgeStoredState } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createTableStateReducers } from '@/store/table-state.reducer';
import t from '@/store/types';
import type { TableQuery } from '@/store/store.types';

interface ItemsTableQuery extends Partial<TableQuery> {
  inactiveMode?: boolean;
}

interface ItemsState {
  tableState: ItemsTableQuery;
  selectedRows: Array<unknown>;
}

export const defaultTableQuery: ItemsTableQuery = {
  pageSize: 20,
  pageIndex: 0,
  filterRoles: [],
  inactiveMode: false,
  viewSlug: null,
};

const initialState: ItemsState = {
  tableState: defaultTableQuery,
  selectedRows: [],
};

const STORAGE_KEY = 'bigcapital:items';

const CONFIG = {
  key: STORAGE_KEY,
  whitelist: [],
  storage,
};

const reducerInstance = createReducer(initialState, {
  ...createTableStateReducers('ITEMS', defaultTableQuery),

  [`ITEMS/SET_SELECTED_ROWS`]: (state: ItemsState, action: { payload: Array<unknown> }) => {
    state.selectedRows = action.payload;
  },

  [t.RESET]: () => {
    purgeStoredState(CONFIG);
  },
});

export const itemsPersistReducer = persistReducer(
  CONFIG,
  reducerInstance,
);