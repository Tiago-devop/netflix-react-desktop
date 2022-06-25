import { createSlice } from '@reduxjs/toolkit';
import reducers from 'store/shows/shows.reducer';
import { Shows } from './shows.type';

const initialState: Shows = {
  data: {
    list: [],
  },
  settings: {
    loading: false,
  },
  error: '',
};

const showsSlice = createSlice({
  name: 'shows',
  reducers,
  initialState,
});

export default showsSlice;
