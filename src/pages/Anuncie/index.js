import Header from 'components/Header';
import { useSelector } from 'react-redux';

export default function Anuncie() {
  const categorias = useSelector(state => state.categorias.map(({ nome, id }) => ({ nome, id })));

  return (
    <div>
      <Header
        titulo='Anuncie aqui!'
        descricao='Anuncie seu produto no melhor site do Brasil!'
      />
      <form>
        <input placeholder='Nome do produto' alt='nome do produto' />
        <input placeholder='Descrição do produto' alt='descrição do produto' />
        <input placeholder='URL da imagem do produto' alt='URL da imagem do produto' />
        <select>
          <option value='' disabled > Selecione a categoria </option>
          {categorias.map(categoria => (
            <option key={categoria.id} value={categoria.id}>
              {categoria.nome}
            </option>
          ))}
        </select>
        <input type='number' placeholder='Preço do produto' />
        <button type='submit'> Cadastrar produto </button>
      </form>
    </div>
  )
}