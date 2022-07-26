import type { NextPage } from 'next'
import Item from '../components/Item'
import Lista from '../components/Lista'


const Home: NextPage = () => {
  return (
    <div>
      <Lista>
        <Item>
          Maçã
        </Item>
        <Item>
          Feijão
        </Item>
        <Item>
          Amendoim
        </Item>
      </Lista>
    </div>
    
  )
}

export default Home
