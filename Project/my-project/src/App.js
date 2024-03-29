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
import Navbar from './Nav/Navbar';
import AllRout from './Components/AllRout';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
       <div>
       <Navbar />
      <AllRout />
       </div>
       <div>
       <Header/>
      <Banner />
      <Categories />
      <MultiVitamin/>
      <VitaminBC />
      <Banner1/>
      <PaymentOffer />
      <LiveEasy />
      <LabTest />
      <Footer />
       </div>
      
      
      
    </div>
  );
}

export default App;
