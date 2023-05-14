import './App.css'
import Header from './components/Header'
import Modal from './components/Modal'
import TasksList from './components/TasksList'

function App() {

  return (
    <section className='bg-black min-h-screen text-white'>
      <Header />
      <TasksList />
      <Modal />
    </section>
  )
}

export default App
