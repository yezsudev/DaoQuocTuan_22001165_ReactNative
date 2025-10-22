// hooks/useTasks.ts
import { useSQLiteContext } from "expo-sqlite";

export type Task = { id: number; title: string; done: number; updated_at: number };

export function useTasks() {
  const db = useSQLiteContext();

  const list = async (q = ""): Promise<Task[]> => {
    if (q.trim()) {
      return await db.getAllAsync<Task>(
        "SELECT * FROM tasks WHERE title LIKE ? ORDER BY updated_at DESC",
        [`%${q}%`]
      );
    }
    return await db.getAllAsync<Task>("SELECT * FROM tasks ORDER BY updated_at DESC");
  };

  const create = async (title: string) => {
    await db.runAsync("INSERT INTO tasks(title, done, updated_at) VALUES (?, 0, ?)", [
      title,
      Date.now(),
    ]);
  };

  const toggleDone = async (id: number, next: 0 | 1) => {
    await db.runAsync("UPDATE tasks SET done=?, updated_at=? WHERE id=?", [next, Date.now(), id]);
  };

  const updateTitle = async (id: number, title: string) => {
    await db.runAsync("UPDATE tasks SET title=?, updated_at=? WHERE id=?", [
      title,
      Date.now(),
      id,
    ]);
  };

  const remove = async (id: number) => {
    await db.runAsync("DELETE FROM tasks WHERE id=?", [id]);
  };

  return { list, create, toggleDone, updateTitle, remove };
}
