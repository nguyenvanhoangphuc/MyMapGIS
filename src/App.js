import "./App.css";
import { useState, useEffect } from "react";
import OnlyMap from "./qgis2web_2024_04_01-21_44_01_877491/OnlyMap";

function App() {
  const [rapidChecked, setRapidChecked] = useState(false);
  const [districtChecked, setDistrictChecked] = useState(false);
  const [component, setComponent] = useState(<OnlyMap />);
  useEffect(() => {
    component = rapidChecked && districtChecked ? <MapWithRapidAndDistrict /> : rapidChecked ? <MapWithRapid /> : districtChecked ? <MapWithDistrict /> : <OnlyMap />;
    console.log(component);
  }, [rapidChecked, districtChecked]);
  return (
    <div className="App">
      <header className="App-header">
        <input 
          type="checkbox" 
          id="rapid" 
          name="rapid" 
          value={rapidChecked}
          onChange={(e) => setRapidChecked(e.target.checked)}
        />
        <label for="rapid">Điểm tập kết rác</label>

        <input 
          type="checkbox" 
          id="district" 
          name="district" 
          value={districtChecked} 
          onChange={(e) => setDistrictChecked(e.target.checked)}
        />
        <label for="district">Quận huyện</label>
      </header>
      <body>
        <component />
      </body>
    </div>
  );
}

export default App;
