import { useState, useEffect } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import "./app.css";

export function App() {
  const [isFetching, setIsFetching] = useState(false);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    setIsFetching(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => result.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      {isFetching ? (
        "Fetching users..."
      ) : (
        <ol>
          {users?.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
        </ol>
      )}
    </>
  );
}
