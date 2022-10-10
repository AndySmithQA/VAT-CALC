import './App.css';
import PriceEntryField from './PriceEntryField';

function App() {
  return (
    <div className="App">
      Vat Calculator
      <PriceEntryField label="Price Excluding VAT: " />
      <PriceEntryField label="Price Including VAT: " />
    </div>
  );
}

export default App;
