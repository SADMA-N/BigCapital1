export interface SettingsState {
  data: Record<string, unknown>;
}

export type SettingOption = {
  key: string;
  group: string;
  value: unknown;
};

export type SettingAction = {
  type: string;
  options?: Array<SettingOption>;
  payload?: { group: string; key: string; value: unknown };
};

export default {
  SETTING_LIST_SET: 'SETTING_LIST_SET',
  CLEAR_OPTIONS_FORM_ERRORS: 'CLEAR_OPTIONS_FORM_ERRORS',
  SETTING_SET: 'SETTING_SET',
  SETTING_ADD: 'SETTING_ADD',
};
