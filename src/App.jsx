import NavBar from './assets/NavBar/NavBar'
import ItemListContainer from './assets/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './assets/ItemDetailContainer/ItemDetailContainer'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = () => {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App