import { Stack } from "expo-router";
import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

function InitDB() {
  const db = useSQLiteContext();
  useEffect(() => {
    (async () => {
      await db.execAsync("PRAGMA journal_mode = WAL;");
      await db.execAsync(`
        CREATE TABLE IF NOT EXISTS tasks(
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT NOT NULL,
          done INTEGER NOT NULL DEFAULT 0,
          updated_at INTEGER NOT NULL
        );
      `);
    })();
  }, [db]);
  return null;
}

export default function Layout() {
  return (
    <SQLiteProvider databaseName="tasks.db">
      <InitDB />
      <SafeAreaProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </SafeAreaProvider>
    </SQLiteProvider>
  );
}
