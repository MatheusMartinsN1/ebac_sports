// src/store/slices/carrinhoSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Produto } from '../../App'

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState: [] as Produto[],
  reducers: {
    adicionarAoCarrinho(state, action: PayloadAction<Produto>) {
      const produto = action.payload
      if (!state.find((p) => p.id === produto.id)) {
        state.push(produto)
      }
    }
  }
})

export const { adicionarAoCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
