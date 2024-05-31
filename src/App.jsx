import './App.css'
import MainPage from './pages/MainPage'
import SideBar from './pages/SideBar'

function App() {
  
  return (
    <>
     <main className='mx-auto min-h-screen md:flex'>
        <SideBar/>
        <MainPage/>
     </main>
    </>
  )
}

export default App
