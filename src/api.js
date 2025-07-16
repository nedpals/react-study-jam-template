const FAKE_LATENCY = 1500; // 1.5 seconds

const FAKE_TODOS_DB = [
  { id: 1, text: "Learn about Components", completed: true },
  {
    id: 2,
    text: "Learn about State and Props",
    completed: true,
  },
  { id: 3, text: "Build a To-Do List", completed: false },
];

/**
 * Simulates fetching all to-do items from a server.
 * Returns a Promise that resolves with the to-do data after a delay.
 */
export function fetchTodos() {
  console.log("FETCHING TODOS from fake API...");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("...TODOS FETCHED!");
      resolve(FAKE_TODOS_DB);
    }, FAKE_LATENCY);
  });
}
