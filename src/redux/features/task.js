import { createSlice } from "@reduxjs/toolkit";

const tasks = [
  {
    id: 1,
    title: "Learn React",
    description: "Learn React",
    status: true,
    createdAt: new Date(),
  },
  {
    id: 2,
    title: "Learn Redux",
    description: "Learn Redux",
    status: false,
    createdAt: new Date(),
  },
  {
    id: 3,
    title: "Learn Redux Toolkit",
    description: "Learn Redux Toolkit",
    status: false,
    createdAt: new Date(),
  },
  {
    id: 4,
    title: "Learn Redux Saga",
    description: "Learn Redux Saga",
    status: false,
    createdAt: new Date(),
  },
];

const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks,
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    getTasks: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export const { addTask, getTasks } = taskSlice.actions;

export default taskSlice.reducer;
