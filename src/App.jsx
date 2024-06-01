import './App.css'
import MainPage from './pages/MainPage'
import SideBar from './pages/SideBar'

function App() {
  
  return (
    <>
     <main className='bg-indigo-950 dark:bg-[#1a1a1a] mx-auto min-h-screen md:flex'>
        <SideBar/>
        <MainPage/>
     </main>
    </>
  )
}

export default App
