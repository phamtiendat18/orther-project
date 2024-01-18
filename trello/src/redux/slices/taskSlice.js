import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../../server/client";
import { useDispatch } from "react-redux";
import { checkAuthSlice } from "./checkAuthSlice";
const { updateAuth } = checkAuthSlice.actions;
const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  column: JSON.parse(localStorage.getItem("columns")) || [],
};
export const getTasks = createAsyncThunk("getTasks", async () => {
  const { response, data } = await client.get(`/tasks`);
  if (response.status === 200) {
    const dispatch = useDispatch();
    const taskList = data.data.tasks.map((item) => {
      return {
        id: item._id,
        content: item.content,
        column: item.column,
      };
    });
    const columnList = data.data.columns.map((item) => {
      return {
        _id: item._id,
        column: item.column,
        columnName: item.columnName,
      };
    });
    return { taskList, columnList };
  } else {
    dispatch(updateAuth(false));
  }
});
