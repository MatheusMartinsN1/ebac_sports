// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit'
import produtosReducer from './slices/produtosSlice'
import carrinhoReducer from './slices/carrinhoSlice'
import favoritosReducer from './slices/favoritosSlice'

export const store = configureStore({
  reducer: {
    produtos: produtosReducer,
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
