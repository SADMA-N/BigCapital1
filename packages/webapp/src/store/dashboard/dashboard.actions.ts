import t from '@/store/types';

export function dashboardPageTitle(pageTitle: string) {
  return { type: t.CHANGE_DASHBOARD_PAGE_TITLE, pageTitle };
}
export function dashboardPageHint(pageHint: string) {
  return { type: t.CHANGE_DASHBOARD_PAGE_HINT, payload: { pageHint } };
}
export function openDialog(name: string, payload?: Record<string, unknown>) {
  return { type: t.OPEN_DIALOG, name, payload };
}
export function closeDialog(name: string, payload?: Record<string, unknown>) {
  return { type: t.CLOSE_DIALOG, name, payload };
}
export function openAlert(name: string, payload?: Record<string, unknown>) {
  return { type: t.OPEN_ALERT, name, payload };
}
export function closeAlert(name: string, payload?: Record<string, unknown>) {
  return { type: t.CLOSE_ALERT, name, payload };
}
export function openDrawer(name: string, payload?: Record<string, unknown>) {
  return { type: t.OPEN_DRAWER, name, payload };
}
export function closeDrawer(name: string, payload?: Record<string, unknown>) {
  return { type: t.CLOSE_DRAWER, name, payload };
}
export function toggleExpendSidebar(toggle?: boolean) {
  return { type: t.SIDEBAR_EXPEND_TOGGLE, payload: { toggle } };
}
export function appIsLoading(toggle: boolean) {
  return { type: t.APP_IS_LOADING, payload: { isLoading: toggle } };
}
export function appIntlIsLoading(toggle: boolean) {
  return { type: t.APP_INTL_IS_LOADING, payload: { isLoading: toggle } };
}
export function splashStartLoading() {
  return { type: t.SPLASH_START_LOADING };
}
export function splashStopLoading() {
  return { type: t.SPLASH_STOP_LOADING };
}
export const setFeatureDashboardMeta = ({
  features,
}: {
  features: Array<{ name: string; is_accessible: boolean }>;
}) => ({ type: t.SET_FEATURE_DASHBOARD_META, payload: { features } });

export function openSidebarSubmenu({ submenuId }: { submenuId: unknown }) {
  return { type: t.SIDEBAR_SUBMENU_OPEN, payload: { submenuId } };
}
export function closeSidebarSubmenu() {
  return { type: t.SIDEBAR_SUBMENU_CLOSE };
}
export function addAutofill(autofillRef: number, payload: unknown) {
  return { type: t.ADD_AUTOFILL_REF, payload: { ref: autofillRef, payload } };
}
export function removeAutofill(autofillRef: number) {
  return { type: t.REMOVE_AUTOFILL_REF, payload: { ref: autofillRef } };
}
export function resetAutofill() {
  return { type: t.RESET_AUTOFILL_REF };
}
export function changePreferencesPageTitle(pageTitle: string) {
  return { type: 'CHANGE_PREFERENCES_PAGE_TITLE', pageTitle };
}
