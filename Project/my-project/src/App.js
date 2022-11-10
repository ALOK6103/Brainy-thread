//import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Banner from "./Components/Banner"
import Categories from './Components/Categories';
import MultiVitamin from './Components/MultiVitamin';
import Banner1 from './Components/Banner1';
import PaymentOffer from './Components/PaymentOffer';
import LiveEasy from './Components/LiveEasy';
import VitaminBC from './Components/VitaminBC';
import LabTest from './Components/LabTest';
import Product from "./Components/Product"

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner />
      <Categories />
      <MultiVitamin/>
      <VitaminBC />
      <Banner1/>
      <PaymentOffer />
      <LiveEasy />
      <LabTest />
      <Product />
    </div>
  );
}

export default App;
