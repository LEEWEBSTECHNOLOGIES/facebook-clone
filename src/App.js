import Feed from "./components/feed/Feed";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

// BEM (Block Element Modifier) Naming Convention
function App() {
  return (
    <div className="app">
      <Header />
        <div className="app__body">
          <Sidebar />
          <Feed />
          {/* Widgets */}
        </div>
    </div>
  );
}

export default App;
