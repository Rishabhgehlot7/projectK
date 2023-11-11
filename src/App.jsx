import { useState } from 'react'
import Header from './components/Header/Header'
import Tabs from './components/Tabs/Tabs'
import Filter from './components/FIlter/Filter'
import CardContainer from './components/CardContainer/CardContainer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-300 w-full h-full'>
      <Header />
      <Tabs/>
      <Filter/>
      <CardContainer/>
    </div>
  )
}

export default App
