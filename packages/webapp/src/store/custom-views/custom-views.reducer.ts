import { createReducer } from "@reduxjs/toolkit";
import t from '@/store/types';
import type { CustomViewsState, CustomViewsAction } from './custom-views.types';

const initialState: CustomViewsState = {
  views: {},
  resourceViews: {
    'accounts': [],
    'expenses': [],
  },
  viewsMeta: {},
};

export const customViewsReducer = createReducer(initialState, {
  [t.VIEW_META_SET]: (state, action: CustomViewsAction) => {
    if (action.view) {
      state.viewsMeta[action.view.id as string] = action.view;
    }
  },

  [t.RESOURCE_VIEWS_SET]: (state, action: CustomViewsAction) => {
    if (action.resource && action.views) {
      state.resourceViews[action.resource] = action.views.map((v) => v.id);
    }
  },

  [t.VIEW_ITEMS_SET]: (state, action: CustomViewsAction) => {
    const _views: Record<string, unknown> = {};

    (action.views ?? []).forEach((view) => {
      _views[view.id as string] = view;
    });
    state.views = { ...state.views, ..._views };
  },
})