import Header from "./components/Header";
import UploadForm from "./components/UploadForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <UploadForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;