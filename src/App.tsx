import SinValidation from "./components/SinValidation";

function App() {
  return (
    // Creating a section with a gradient background and positioning items in the center
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <SinValidation />
    </section>
  );
}

export default App;
