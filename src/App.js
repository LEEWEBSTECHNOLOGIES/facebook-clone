import Feed from "./components/feed/Feed";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import Widget from "./components/widget/Widget";
import Login from "./components/login/Login";
import { useStateValue } from "./StateProvider";

// BEM (Block Element Modifier) Naming Convention
function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
        </>
      )}      
    </div>
  );
}

export default App;
