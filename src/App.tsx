import React, {useState, useEffect} from 'react';
import ICatData from './types/Cat';
import CatService from './services/CatService';
import CatList from './components/CatList';


function App() {
const [cuteCats, setCuteCats] = useState<Array<ICatData>>([]);
useEffect(() => {
  fetchAllCuteCats()
},[])

const fetchAllCuteCats = () => {
  CatService.getAllCuteCats().then((response: any) => {
    setCuteCats(response.data);
  }).catch((e: Error) => {
    console.log(e)
  })
}

  return (
    <div className="App">
      <header className="App-header">
        <CatList cats={cuteCats}/>
      </header>
    </div>
  );
}

export default App;
