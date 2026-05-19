import { createReducer } from '@reduxjs/toolkit';
import t from '@/store/types';

interface FinancialReportSlice {
  displayFilterDrawer: boolean;
}

export interface FinancialStatementsState {
  [key: string]: FinancialReportSlice;
}

const initialState: FinancialStatementsState = {
  balanceSheet: { displayFilterDrawer: false },
  trialBalance: { displayFilterDrawer: false },
  generalLedger: { displayFilterDrawer: false },
  journal: { displayFilterDrawer: false },
  profitLoss: { displayFilterDrawer: false },
  ARAgingSummary: { displayFilterDrawer: false },
  APAgingSummary: { displayFilterDrawer: false },
  purchasesByItems: { displayFilterDrawer: false },
  salesByItems: { displayFilterDrawer: false },
  inventoryValuation: { displayFilterDrawer: false },
  customersBalanceSummary: { displayFilterDrawer: false },
  vendorsBalanceSummary: { displayFilterDrawer: false },
  customersTransactions: { displayFilterDrawer: false },
  vendorsTransactions: { displayFilterDrawer: false },
  cashFlowStatement: { displayFilterDrawer: false },
  inventoryItemDetails: { displayFilterDrawer: false },
  realizedGainOrLoss: { displayFilterDrawer: false },
  unrealizedGainOrLoss: { displayFilterDrawer: false },
  projectProfitabilitySummary: { displayFilterDrawer: false },
  salesTaxLiabilitySummary: { displayFilterDrawer: false },
};

type ToggleAction = { payload?: { toggle?: boolean } };

const financialStatementFilterToggle = (financialName: string, statePath: string) => ({
  [`${financialName}/${t.DISPLAY_FILTER_DRAWER_TOGGLE}`]: (
    state: FinancialStatementsState,
    action: ToggleAction,
  ) => {
    state[statePath].displayFilterDrawer =
      typeof action?.payload?.toggle !== 'undefined'
        ? action.payload!.toggle!
        : !state[statePath].displayFilterDrawer;
  },
});

export const financialStatementsReducer = createReducer(initialState, {
  ...financialStatementFilterToggle(t.BALANCE_SHEET, 'balanceSheet'),
  ...financialStatementFilterToggle(t.TRIAL_BALANCE_SHEET, 'trialBalance'),
  ...financialStatementFilterToggle(t.JOURNAL, 'journal'),
  ...financialStatementFilterToggle(t.GENERAL_LEDGER, 'generalLedger'),
  ...financialStatementFilterToggle(t.PROFIT_LOSS, 'profitLoss'),
  ...financialStatementFilterToggle(t.AR_AGING_SUMMARY, 'ARAgingSummary'),
  ...financialStatementFilterToggle(t.AP_AGING_SUMMARY, 'APAgingSummary'),
  ...financialStatementFilterToggle(t.PURCHASES_BY_ITEMS, 'purchasesByItems'),
  ...financialStatementFilterToggle(t.SALES_BY_ITEMS, 'salesByItems'),
  ...financialStatementFilterToggle(t.INVENTORY_VALUATION, 'inventoryValuation'),
  ...financialStatementFilterToggle(t.CUSTOMERS_BALANCE_SUMMARY, 'customersBalanceSummary'),
  ...financialStatementFilterToggle(t.VENDORS_BALANCE_SUMMARY, 'vendorsBalanceSummary'),
  ...financialStatementFilterToggle(t.CUSTOMERS_TRANSACTIONS, 'customersTransactions'),
  ...financialStatementFilterToggle(t.VENDORS_TRANSACTIONS, 'vendorsTransactions'),
  ...financialStatementFilterToggle(t.CASH_FLOW_STATEMENT, 'cashFlowStatement'),
  ...financialStatementFilterToggle(t.INVENTORY_ITEM_DETAILS, 'inventoryItemDetails'),
  ...financialStatementFilterToggle(t.REALIZED_GAIN_OR_LOSS, 'realizedGainOrLoss'),
  ...financialStatementFilterToggle(t.UNREALIZED_GAIN_OR_LOSS, 'unrealizedGainOrLoss'),
  ...financialStatementFilterToggle(t.PROJECT_PROFITABILITY_SUMMARY, 'projectProfitabilitySummary'),
  ...financialStatementFilterToggle(t.SALES_TAX_LIABILITY_SUMMARY, 'salesTaxLiabilitySummary'),
});
