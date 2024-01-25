import NavBar from './assets/NavBar/NavBar'
import ItemListContainer from './assets/ItemListContainer/ItemListContainer'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = () => {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element= {<ItemListContainer />}/>
          <Route path='/category/:idCategory' element= {<ItemListContainer />}/>
          <Route path='/item/:idItem' element= {<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App