import "./App.css";
import { Navbar } from "./components/Navbar";
import { ProductList } from "./components/ProductList";
//import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
     <section>
        <Navbar />
      </section>
      <section>
        <ProductList />
      </section>
   
    </div>
  );
}

export default App;