import './App.css';
import DisplayBlock from './DisplayBlock';
import PriceEntryField from './PriceEntryField';
import VatRateField from './VatRateField';

function App() {
  return (
    <div className="header field">
      Vat Calculator
      <div className="pale-green-border">
      <VatRateField customstyle="field" />
      <PriceEntryField label="Price Excluding VAT: " price={20} customstyle="field" />
      <DisplayBlock label="VAT to Pay:" value="4" customstyle="field" />
      <PriceEntryField label="Price Including VAT: " price={24} customstyle="field"/>
      </div> 
    </div>
  );
}

export default App;
