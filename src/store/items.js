import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialItems = [
  {
    name: 'Iphone 14',
    price: 1200,
    description: 'This is amazing product !',
    id: 1,
  },
  {
    name: 'Samsung galaxy s20',
    price: 1100,
    description: 'This is amazing product !',
    id: 2,
  },
];

const itemsSlice = createSlice({
  name: 'items',
  initialState: initialItems,
  reducers: {},
});

export default itemsSlice.reducer;
