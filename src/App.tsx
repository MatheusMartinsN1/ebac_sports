import { useEffect } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'

import { useAppDispatch, useAppSelector } from './store/hooks'
import { fetchProdutos } from './store/slices/produtosSlice'
import { adicionarAoCarrinho } from './store/slices/carrinhoSlice'
import { toggleFavorito } from './store/slices/favoritosSlice'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const dispatch = useAppDispatch()
  const produtos = useAppSelector((state) => state.produtos.itens)
  const favoritos = useAppSelector((state) => state.favoritos)
  const carrinho = useAppSelector((state) => state.carrinho)

  useEffect(() => {
    dispatch(fetchProdutos())
  }, [dispatch])

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={(p) => dispatch(toggleFavorito(p))}
          adicionarAoCarrinho={(p) => dispatch(adicionarAoCarrinho(p))}
        />
      </div>
    </>
  )
}

export default App
