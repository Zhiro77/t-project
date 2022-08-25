
import {Routes, Route} from 'react-router-dom'
import { Header } from './components/Header/Header'
import ShopContent from './components/ShopContent';
import  CreateShop  from './components/CreateShop'
import { createContext } from 'react';



export const LoadContext = createContext<string | null>(null)

function App() {


  return (
    <>
      <Header />
      <LoadContext.Provider value='Loading ...'>
      <Routes>
        <Route path='/' element={<ShopContent />} />
        <Route path='/create' element={<CreateShop />} />
      </Routes>
      </LoadContext.Provider>
     
   
    </>
  );
}

export default App;
