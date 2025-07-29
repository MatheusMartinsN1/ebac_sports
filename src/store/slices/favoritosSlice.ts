// src/store/slices/favoritosSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Produto } from '../../App'

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState: [] as Produto[],
  reducers: {
    toggleFavorito(state, action: PayloadAction<Produto>) {
      const existe = state.find((p) => p.id === action.payload.id)
      if (existe) {
        return state.filter((p) => p.id !== action.payload.id)
      } else {
        state.push(action.payload)
      }
    }
  }
})

export const { toggleFavorito } = favoritosSlice.actions
export default favoritosSlice.reducer
