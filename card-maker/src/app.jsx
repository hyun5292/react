import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./app.module.css";
import Login from "./components/login/login";
import Maker from "./components/maker/maker";

function App({ FileInput, authService, cardRepository }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login authService={authService} />}></Route>
          <Route
            path="/maker"
            element={
              <Maker
                authService={authService}
                FileInput={FileInput}
                cardRepository={cardRepository}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
