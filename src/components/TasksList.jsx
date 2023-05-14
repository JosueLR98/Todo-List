import { useSelector } from "react-redux"
import TaskCard from "./TaskCard"

const TasksList = () => {

  const {tasks} = useSelector((store) => store.todo)

  return (
    <section className="px-2 py-4 grid gap-4 max-w-[400px] mx-auto">
      <h2 className="text-3xl font-semibold">Lista de tareas</h2>
      {
        tasks.map((task) => <TaskCard key={task.id} task={task} />)
      }
    </section>
  )
}
export default TasksList