import './App.css'
import MainPage from './components/MainPage'
import SideBar from './components/SideBar'

function App() {
  
  return (
    <>
     <main className='mx-auto min-h-screen  flex'>
        <SideBar/>
        <MainPage/>
     </main>
    </>
  )
}

export default App
