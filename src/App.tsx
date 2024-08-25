import Router from "@/client-routes/Router"
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query"

function App() {
  

  return (
    <>
      <Router/>    

      <div className="font-bold text-green-400">
        name
      </div>
    </>
  )
}

export default App
