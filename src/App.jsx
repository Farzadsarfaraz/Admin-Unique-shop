import Navbar from './components/Navbar'
import Sidebar from './components/sidebar'
import { Routes, Route } from 'react-router-dom'
import Add from '../src/pages/Add'
import List from '../src/pages/List'
import Order from '../src/pages/Orders'


function App() {
  return (
    <div className='bg-gray-50 min-h-screen'>
      <div>
       <Navbar/>
       <hr/>
       <div className='flex w-full'>
        <Sidebar/>
        <div className='w-[70%] max-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
          <Routes>
            <Route path='/add' element={<Add/>}/>
            <Route path='/list' element={<List/>}/>
            <Route path='/order' element={<Order/>}/>
          </Routes>
        </div>
       </div>
      </div>
    </div>
  )
}

export default App
