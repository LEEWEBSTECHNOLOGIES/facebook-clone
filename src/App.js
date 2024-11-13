import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

// BEM (Block Element Modifier) Naming Convention
function App() {
  return (
    <div className="app">
      <Header />
      {/* Header */}
        {/* App Body */}
        <div className="app__body">
          <Sidebar />

        </div>
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}

    </div>
  );
}

export default App;
