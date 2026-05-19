import t from '@/store/types';

export function openSearch(result?: unknown) {
  return {
    type: t.OPEN_SEARCH,
    result,
  };
}

export function closeSearch(result?: unknown) {
  return {
    type: t.CLOSE_SEARCH,
    result,
  };
}

export function generalSearch(_name: string, result?: unknown) {
  return {
    type: 'SEARCH_SUCCESS',
    result,
  };
}

export function universalSearchSetResourceType(resourceType: string) {
  return {
    type: t.UNIVERSAL_SEARCH_SET_RESOURCE_TYPE,
    payload: {
      resourceType,
    },
  };
}

export function universalSearchResetResourceType() {
  return {
    type: t.UNIVERSAL_SEARCH_RESET_RESOURCE_TYPE,
  };
}

export function universalSearchSetSelectedItem(resourceType: string, resourceId: string | number) {
  return {
    type: t.UNIVERSAL_SEARCH_SET_ITEM_SELECT,
    payload: {
      resourceType,
      resourceId,
    },
  };
}

export function universalSearchResetSelectedItem() {
  return {
    type: t.UNIVERSAL_SEARCH_RESET_ITEM_SELECT,
    payload: {},
  };
}