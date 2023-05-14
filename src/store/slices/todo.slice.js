import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) ?? [],
  isShowModal: false,
  taskToEdit: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    changeShowModal: (state) => {
      state.isShowModal = !state.isShowModal;
    },
    addTask: (state, action) => {
      const newTasks = [...state.tasks, action.payload]
      localStorage.setItem("tasks", JSON.stringify(newTasks))
      state.tasks = newTasks
    },
    changeDoneTask: (state, action) => {
      const newTasks = state.tasks.map((task) => {
        if (task.id === action.payload) {
          return { ...task, done: !task.done };
        } else {
          return task;
        }
      });
      localStorage.setItem("tasks", JSON.stringify(newTasks))
      state.tasks = newTasks;
    },
    deleteTask: (state, action) => {
      const newTasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(newTasks))
      state.tasks = newTasks;
    },
    setTaskToEdit: (state, action) => {
      state.taskToEdit = action.payload;
    },
    updateTask: (state, action) => {
      const newTasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        } else {
          return task;
        }
      });
      localStorage.setItem("tasks", JSON.stringify(newTasks))
      state.tasks = newTasks;
    },
  },
});

export const {
  changeShowModal,
  addTask,
  changeDoneTask,
  deleteTask,
  setTaskToEdit,
  updateTask,
} = todoSlice.actions;

export default todoSlice.reducer;
