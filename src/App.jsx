 
import './App.css'
import LeftSide from './Components/LeftSide/LeftSide'
import RightSide from './Components/RightSide/RightSide'

function App() {
 

  return (
    <div className='flex gap-5 px-5'>
       <div className='w-[180px] '>
          <LeftSide></LeftSide>
       </div>
       <div className=' w-full'>
          <RightSide></RightSide>
       </div>
    </div>
  )
}

export default App
