import { PayloadAction, createReducer } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import purgeStoredState from 'redux-persist/es/purgeStoredState';
import storage from 'redux-persist/lib/storage';
import { isUndefined } from 'lodash';
import { getCookie } from '@/utils';
import t from '@/store/types';

export interface AuthenticationState {
  token: string | null;
  organizationId: string | null;
  userId: string | null;
  locale: string;
  verified: boolean;
  verifyEmail: string | null;
  errors: Array<{ type: string; [key: string]: unknown }>;
}

const initialState: AuthenticationState = {
  token: getCookie('token', null) || null,
  organizationId: getCookie('organization_id', null) || null,
  userId: getCookie('authenticated_user_id', null) || null,
  locale: getCookie('locale', 'en') as string,
  verified: true,
  verifyEmail: null,
  errors: [],
};

const STORAGE_KEY = 'bigcapital:authentication';
const CONFIG = { key: STORAGE_KEY, whitelist: [], storage };

const reducerInstance = createReducer(initialState, {
  [t.LOGIN_FAILURE]: (
    state: AuthenticationState,
    action: { errors: Array<{ type: string; [key: string]: unknown }> },
  ) => {
    state.errors = action.errors;
  },

  [t.LOGIN_CLEAR_ERRORS]: (state: AuthenticationState) => {
    state.errors = [];
  },

  [t.SET_EMAIL_VERIFIED]: (
    state: AuthenticationState,
    action: PayloadAction<{ verified?: boolean; email?: string }>,
  ) => {
    state.verified = !isUndefined(action.payload.verified)
      ? action.payload.verified!
      : true;
    state.verifyEmail = action.payload.email || null;

    if (state.verified) {
      state.verifyEmail = null;
    }
  },

  [t.SET_AUTH_TOKEN]: (
    state: AuthenticationState,
    action: PayloadAction<{ token: string }>,
  ) => {
    state.token = action.payload.token;
  },

  [t.SET_ORGANIZATIOIN_ID]: (
    state: AuthenticationState,
    action: PayloadAction<{ organizationId: string }>,
  ) => {
    state.organizationId = action.payload.organizationId;
  },

  [t.SET_USER_ID]: (
    state: AuthenticationState,
    action: PayloadAction<{ userId: string }>,
  ) => {
    state.userId = action.payload.userId;
  },

  [t.RESET]: () => {
    purgeStoredState(CONFIG);
  },
});

export const authenticationPersistReducer = persistReducer(CONFIG, reducerInstance);

export const isAuthenticated = (state: { authentication: AuthenticationState }) =>
  !!state.authentication.token;

export const hasErrorType = (
  state: { authentication: AuthenticationState },
  errorType: string,
) => state.authentication.errors.find((e) => e.type === errorType);
