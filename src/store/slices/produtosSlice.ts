// src/store/slices/produtosSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { Produto } from '../../App'

interface ProdutosState {
  itens: Produto[]
  status: 'idle' | 'loading' | 'erro'
}

const initialState: ProdutosState = {
  itens: [],
  status: 'idle'
}

export const fetchProdutos = createAsyncThunk(
  'produtos/fetchProdutos',
  async () => {
    const resposta = await fetch('/produtos.json')
    const dados = await resposta.json()
    return dados.produtos as Produto[]
  }
)

const produtosSlice = createSlice({
  name: 'produtos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProdutos.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchProdutos.fulfilled, (state, action) => {
        state.itens = action.payload
        state.status = 'idle'
      })
      .addCase(fetchProdutos.rejected, (state) => {
        state.status = 'erro'
      })
  }
})

export default produtosSlice.reducer
