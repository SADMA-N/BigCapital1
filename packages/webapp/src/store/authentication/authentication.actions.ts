import t from '@/store/types';

export const setLogin = () => ({ type: t.LOGIN_SUCCESS });
export const setLogout = () => ({ type: t.LOGOUT });
export const setStoreReset = () => ({ type: t.RESET });

export const setEmailConfirmed = (verified?: boolean, email?: string) => ({
  type: t.SET_EMAIL_VERIFIED,
  payload: { verified, email },
});
export const setOrganizationId = (organizationId: string) => ({
  type: t.SET_ORGANIZATIOIN_ID,
  payload: { organizationId },
});
export const setAuthToken = (token: string) => ({
  type: t.SET_AUTH_TOKEN,
  payload: { token },
});
export const setAuthUserId = (userId: string) => ({
  type: t.SET_USER_ID,
  payload: { userId },
});
export const setLocale = (locale: string) => ({
  type: t.SET_LOCALE,
  payload: { locale },
});
