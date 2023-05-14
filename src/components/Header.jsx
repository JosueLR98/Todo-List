import { useDispatch } from "react-redux"
import { changeShowModal } from "../store/slices/todo.slice"

const Header = () => {

  const dispatch = useDispatch()

  const handleClickShowModal = () => {
    dispatch(changeShowModal())
  }

  return (
    <header className="flex justify-around p-5">
      <div className="text-5xl flex items-center">
        <i className='bx bx-list-check text-green-500'></i>
        <h1 className="tracking-wider font-semibold">TO<span className="text-indigo-500">DO</span></h1>
      </div>
      <button onClick={handleClickShowModal} className="text-4xl  bg-indigo-500 px-2 rounded-md hover:bg-indigo-400 hover:tracking-wider duration-200">Crear tarea</button>
    </header>
  )
}
export default Header