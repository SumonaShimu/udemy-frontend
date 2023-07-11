import './App.css'
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';

function App() {

  return (
    <div className='w-[100%] bg-dark text-white'>
      <NavBar/>
      <Sidebar/>
    </div>
  )
}

export default App
