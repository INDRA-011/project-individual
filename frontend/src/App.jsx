import { useEffect } from "react";
import API from "./api/api";

function App() {
  useEffect(() => {
    API.get("/api/students")
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  }, []);

  return <h1>React Running</h1>;
}

export default App;
