import { useEffect } from "react";
import API from "./api/api";

function App() {
  useEffect(() => {
    API.get("/api/students")
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-red-500">React Running</h1>
    </div>
  );
}

export default App;
