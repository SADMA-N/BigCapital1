export interface CurrenciesState {
  data: Record<string, unknown>;
  loading: boolean;
}

export type CurrencyAction = {
  type: string;
  currencies?: Array<Record<string, unknown>>;
  loading?: boolean;
  currency_code?: string;
};

export default {
  CURRENCIES_REGISTERED_SET: 'CURRENCIES_REGISTERED_SET',
  CLEAR_CURRENCY_FORM_ERRORS: 'CLEAR_CURRENCY_FORM_ERRORS',
  CURRENCIES_TABLE_LOADING: 'CURRENCIES_TABLE_LOADING',
  CURRENCY_CODE_DELETE: 'CURRENCY_CODE_DELETE',
};
