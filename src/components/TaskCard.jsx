import { useDispatch } from "react-redux"
import { changeDoneTask, changeShowModal, deleteTask, setTaskToEdit } from "../store/slices/todo.slice"

const TaskCard = ({task}) => {

  const dispatch = useDispatch()

  const handleChangeDone = () => {
    dispatch(changeDoneTask(task.id))
  }

  const handleClickDelete = () => {
    dispatch(deleteTask(task.id))
  }

  const handleClickEdit = () => {
    dispatch(changeShowModal())
    dispatch(setTaskToEdit(task))
  }

  return (
    <article className="grid gap-2 border-b-2 border-indigo-500 pb-4">
      <div className="flex gap-2 text-2xl items-center">
        <input checked={task.done} onChange={handleChangeDone} className="w-6 aspect-square accent-indigo-500" type="checkbox" />
        <h3 className={`text-indigo-500 font-semibold ${task.done && "line-through"}`}>{task.title}</h3>
      </div>
      <p className={`${task.done && "line-through"}`}>{task.description}</p>
      <div className="text-3xl flex gap-2">
        <i onClick={handleClickEdit} className='bx bxs-pencil hover:text-indigo-500 cursor-pointer transition-colors'></i>
        <i onClick={handleClickDelete} className='bx bxs-trash hover:text-indigo-500 cursor-pointer transition-colors'></i>
      </div>
    </article>
  )
}
export default TaskCard