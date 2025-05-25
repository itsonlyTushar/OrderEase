import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
  ]
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    addMenuItems: (state, action) => {
      state.items.push(action.payload);
    },
    
    deleteMenuID: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    
    setMenuItems: (state, action) => {
      state.items = action.payload;
    },
    
    clearMenuItems: (state) => {
      state.items = [];
    },

    updateMenuItem: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...action.payload };
      }
    }
  }
});

export const { 
  addMenuItems, 
  deleteMenuID, 
  setMenuItems, 
  clearMenuItems,
  updateMenuItem 
} = menuSlice.actions;

export default menuSlice.reducer;