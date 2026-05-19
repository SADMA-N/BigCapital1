import t from '@/store/types';
import type { TableQuery } from '@/store/store.types';

export const setWarehouseTransferTableState = (queries: Partial<TableQuery>) => {
  return {
    type: t.WAREHOUSE_TRANSFERS_TABLE_STATE_SET,
    payload: { queries },
  };
};

export const resetWarehouseTransferTableState = () => {
  return {
    type: t.WAREHOUSE_TRANSFERS_TABLE_STATE_RESET,
  };
};
