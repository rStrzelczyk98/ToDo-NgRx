import { createSelector } from '@ngrx/store';
import { Data, taskData } from './task.reducer';

export const selectTasks = (state: { data: Data }) => state.data.tasks;
export const selectTaskById = (id: number) =>
  createSelector(selectTasks, (tasks: taskData[]) =>
    tasks.find((task) => task.id === id)
  );
export const selectActiveTasks = createSelector(
  selectTasks,
  (tasks: taskData[]) => tasks.filter((task) => !task.checked)
);
export const selectCheckedTasks = createSelector(
  selectTasks,
  (tasks: taskData[]) => tasks.filter((task) => task.checked)
);
export const selectCounter = (state: { data: Data }) => state.data.counter;

