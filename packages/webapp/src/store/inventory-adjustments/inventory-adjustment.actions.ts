import t from '@/store/types';
import type { TableQuery } from '@/store/store.types';

/**
 * Sets the inventory adjustments table state.
 */
export const setInventoryAdjustmentsTableState = (queries: Partial<TableQuery>) => {
  return {
    type: t.INVENTORY_ADJUSTMENTS_TABLE_STATE_SET,
    payload: { queries },
  };
};
