import { BrowserRouter, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes></Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
