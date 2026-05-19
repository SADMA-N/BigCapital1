import t from '@/store/types';
import type { TableQuery } from '@/store/store.types';

export const setProjectsTableState = (queries: Partial<TableQuery>) => {
  return {
    type: t.PROJECTS_TABLE_STATE_SET,
    payload: { queries },
  };
};

export const resetProjectsTableState = () => {
  return {
    type: t.PROJECTS_TABLE_STATE_RESET,
  };
};
