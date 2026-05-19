import t from '@/store/types';

export function toggleBalanceSheetFilterDrawer(toggle?: boolean) {
  return { type: `${t.BALANCE_SHEET}/${t.DISPLAY_FILTER_DRAWER_TOGGLE}`, payload: { toggle } };
}
export function toggleTrialBalanceSheetFilterDrawer(toggle?: boolean) {
  return { type: `${t.TRIAL_BALANCE_SHEET}/${t.DISPLAY_FILTER_DRAWER_TOGGLE}`, payload: { toggle } };
}
export function toggleJournalSheeetFilterDrawer(toggle?: boolean) {
  return { type: `${t.JOURNAL}/${t.DISPLAY_FILTER_DRAWER_TOGGLE}`, payload: { toggle } };
}
export function toggleProfitLossFilterDrawer(toggle?: boolean) {
  return { type: `${t.PROFIT_LOSS}/${t.DISPLAY_FILTER_DRAWER_TOGGLE}`, payload: { toggle } };
}
export function toggleGeneralLedgerFilterDrawer(toggle?: boolean) {
  return { type: `${t.GENERAL_LEDGER}/${t.DISPLAY_FILTER_DRAWER_TOGGLE}`, payload: { toggle } };
}
export function toggleARAgingSummaryFilterDrawer(toggle?: boolean) {
  return { type: `${t.AR_AGING_SUMMARY}/${t.DISPLAY_FILTER_DRAWER_TOGGLE}`, payload: { toggle } };
}
export function toggleAPAgingSummaryFilterDrawer(toggle?: boolean) {
  return { type: `${t.AP_AGING_SUMMARY}/${t.DISPLAY_FILTER_DRAWER_TOGGLE}`, payload: { toggle } };
}
export function togglePurchasesByItemsFilterDrawer(toggle?: boolean) {
  return { type: `${t.PURCHASES_BY_ITEMS}/${t.DISPLAY_FILTER_DRAWER_TOGGLE}`, payload: { toggle } };
}
export function toggleSalesByItemsFilterDrawer(toggle?: boolean) {
  return { type: `${t.SALES_BY_ITEMS}/${t.DISPLAY_FILTER_DRAWER_TOGGLE}`, payload: { toggle } };
}
export function toggleInventoryValuationFilterDrawer(toggle?: boolean) {
  return { type: `${t.INVENTORY_VALUATION}/${t.DISPLAY_FILTER_DRAWER_TOGGLE}`, payload: { toggle } };
}
export function toggleCustomersBalanceSummaryFilterDrawer(toggle?: boolean) {
  return { type: `${t.CUSTOMERS_BALANCE_SUMMARY}/${t.DISPLAY_FILTER_DRAWER_TOGGLE}`, payload: { toggle } };
}
export function toggleVendorsBalanceSummaryFilterDrawer(toggle?: boolean) {
  return { type: `${t.VENDORS_BALANCE_SUMMARY}/${t.DISPLAY_FILTER_DRAWER_TOGGLE}`, payload: { toggle } };
}
export function toggleCustomersTransactionsFilterDrawer(toggle?: boolean) {
  return { type: `${t.CUSTOMERS_TRANSACTIONS}/${t.DISPLAY_FILTER_DRAWER_TOGGLE}`, payload: { toggle } };
}
export function toggleVendorsTransactionsFilterDrawer(toggle?: boolean) {
  return { type: `${t.VENDORS_TRANSACTIONS}/${t.DISPLAY_FILTER_DRAWER_TOGGLE}`, payload: { toggle } };
}
export function toggleCashFlowStatementFilterDrawer(toggle?: boolean) {
  return { type: `${t.CASH_FLOW_STATEMENT}/${t.DISPLAY_FILTER_DRAWER_TOGGLE}`, payload: { toggle } };
}
export function toggleInventoryItemDetailsFilterDrawer(toggle?: boolean) {
  return { type: `${t.INVENTORY_ITEM_DETAILS}/${t.DISPLAY_FILTER_DRAWER_TOGGLE}`, payload: { toggle } };
}
export function toggleRealizedGainOrLossFilterDrawer(toggle?: boolean) {
  return { type: `${t.REALIZED_GAIN_OR_LOSS}/${t.DISPLAY_FILTER_DRAWER_TOGGLE}`, payload: { toggle } };
}
export function toggleUnrealizedGainOrLossFilterDrawer(toggle?: boolean) {
  return { type: `${t.UNREALIZED_GAIN_OR_LOSS}/${t.DISPLAY_FILTER_DRAWER_TOGGLE}`, payload: { toggle } };
}
export function toggleProjectProfitabilitySummaryFilterDrawer(toggle?: boolean) {
  return { type: `${t.PROJECT_PROFITABILITY_SUMMARY}/${t.DISPLAY_FILTER_DRAWER_TOGGLE}`, payload: { toggle } };
}
export function toggleSalesTaxLiabilitySummaryFilterDrawer(toggle?: boolean) {
  return { type: `${t.SALES_TAX_LIABILITY_SUMMARY}/${t.DISPLAY_FILTER_DRAWER_TOGGLE}`, payload: { toggle } };
}
