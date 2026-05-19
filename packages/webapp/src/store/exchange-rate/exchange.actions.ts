import t from '@/store/types';

export const setExchangeRateTableState = (queries: { pageSize?: number; pageIndex?: number }) => {
  return {
    type: t.EXCHANGE_RATES_TABLE_STATE_SET,
    payload: { queries },
  };
};
