import ApiService from '@/services/ApiService';
import t from '@/store/types';
import type { SettingOption } from './settings.type';

export const submitOptions = ({ form }: { form: { options?: Array<SettingOption> } }) => {
  return (dispatch: any) =>
    ApiService.post('settings', form).then((response) => {
      dispatch({ type: t.SETTING_SET, options: form.options });
      return response;
    });
};

export const FetchOptions = ({ form }: { form: unknown }) => {
  return (dispatch: any) =>
    new Promise((resolve, reject) => {
      ApiService.get('settings')
        .then((response) => {
          dispatch({ type: t.SETTING_SET, options: response.data.settings });
          resolve(response);
        })
        .catch((error) => reject(error));
    });
};

export const setSettings = (settings: Array<SettingOption>) => ({
  type: t.SETTING_SET,
  options: settings,
});

export const addSettings = (group: string, key: string, value: unknown) => ({
  type: t.SETTING_ADD,
  payload: { group, key, value },
});
