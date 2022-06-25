import { Store } from 'store/store/store.type';

export const settingsSelector = (state: Store) => state.shows.settings.loading;

export const listSelector = (state: Store) => state.shows.data.list;
