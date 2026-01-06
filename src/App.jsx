import Navbar from "./components/Navbar.jsx";
import Portfolio2 from "./pages/Portfolio2.jsx";
function App() {
  return (
    <>
      <div className="bg-[#4A2D1D] min-h-screen">
        {/* Sticky Navbar */}
        <Navbar />

        {/* Add padding so content doesn't hide behind navbar */}
        <div className="pt-10">
          <Portfolio2 />
        </div>
      </div>
    </>
  );
}

export default App;
