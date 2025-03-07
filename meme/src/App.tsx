
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Homepage from "./pages/Home";
import EditPage from "./pages/Edit";

import "./App.css";


function App() {
  return (
      <div
       className="App"
       
       style={{
        backgroundColor:"#EFE9FF",
        minHeight: "100vh",
        height: "100%",
        margin: "0" , padding: "0",
      }}>
      
      <div
      style={{
        display: "flex", // Включаем Flexbox
        justifyContent: "center", // Выравниваем по центру по горизонтали
        alignItems: "center", // Выравниваем по центру по вертикали
        height: "60px", // Высота контейнера равна высоте экрана
      }}
    >
      <h1
        style={{
          fontWeight: "bold",
          color: "#263AB2",
        }}
      >
        Meme Generator
      </h1>
    </div>
        
         <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/edit" element={<EditPage />} />
         </Routes>
      </div>
  );
}

export default App;
