import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  changeShowModal,
  setTaskToEdit,
  updateTask,
} from "../store/slices/todo.slice";
import { useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";
import { useEffect } from "react";

const DEFAULT_VALUES = {
  title: "",
  description: "",
};

const Modal = () => {
  const { isShowModal, taskToEdit } = useSelector((store) => store.todo);

  const { handleSubmit, register, reset } = useForm();

  const dispatch = useDispatch();

  const submit = (data) => {
    if (taskToEdit) {
      const newTask = {
        ...data,
        id: taskToEdit.id,
        done: taskToEdit.done,
      };
      dispatch(updateTask(newTask));
      dispatch(setTaskToEdit(null));
    } else {
      const newTask = {
        ...data,
        id: uuid(),
        done: false,
      };
      dispatch(addTask(newTask));
    }
    dispatch(changeShowModal());
    reset(DEFAULT_VALUES);
  };

  const handleClickCloseModal = () => {
    dispatch(changeShowModal());
  };

  useEffect(() => {
    if (taskToEdit) {
      reset(taskToEdit);
    }
  }, [taskToEdit]);

  return (
    <section
      className={`fixed top-0 left-0 right-0 bottom-0 grid place-content-center bg-black/60 duration-200  ${
        isShowModal ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className="grid gap-4 w-[300px] relative py-6 shadow-lg "
      >
        <h2 className="text-4xl text-center tracking-wider">
          {taskToEdit ? "Editar tarea" : "Nueva tarea"}
        </h2>
        <div className="grid gap-1 text-xl">
          <label htmlFor="">Titulo</label>
          <input
            {...register("title")}
            className="text-black rounded-md p-2 outline-none"
            type="text"
          />
        </div>
        <div className="grid gap-1 text-xl">
          <label htmlFor="">Descripcion</label>
          <textarea
            {...register("description")}
            className="text-black rounded-md p-2 outline-none text-lg"
            rows={6}
            type="text"
          />
        </div>
        <i
          onClick={handleClickCloseModal}
          className="bx bx-x text-3xl absolute right-0 top-0 hover:text-indigo-500 transition-colors cursor-pointer"
        ></i>
        <button className="bg-indigo-500 px-2 rounded-md hover:bg-indigo-400 hover:tracking-wider duration-200 py-2">
          {taskToEdit ? "Guardar cambios" : "Crear tarea"}
        </button>
      </form>
    </section>
  );
};
export default Modal;
