import t from '@/store/types';
import type { TableQuery } from '@/store/store.types';

export const setPaymentMadesTableState = (queries: Partial<TableQuery>) => {
  return {
    type: t.PAYMENT_MADES_TABLE_STATE_SET,
    payload: { queries },
  };
};

export const resetPaymentMadesTableState = (queries?: Partial<TableQuery>) => {
  return {
    type: t.PAYMENT_MADES_TABLE_STATE_RESET,
    payload: { queries },
  };
};

