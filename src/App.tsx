import React, {useState, useEffect} from 'react';
import ICatData from './types/Cat';
import CatService from './services/CatService';
import CatList from './components/CatList';
import CatDisplay from './components/CatDisplay';
import { stringify } from 'querystring';


function App() {
const [cuteCats, setCuteCats] = useState<Array<ICatData>>([]);
useEffect(() => {
  fetchAllCuteCats()
},[])
const [selectedCat, setSelectedCat] = useState<ICatData>({_id: "", owner: "", tags: [], createdAt: null, updatedAt: null})

const fetchAllCuteCats = () => {
  CatService.getAllCuteCats().then((response: any) => {
    setCuteCats(response.data);
  }).catch((e: Error) => {
    console.log(e)
  })
}

const handleCatSelect = (cat: ICatData): void => {
 
  setSelectedCat(cat)
}

  return (
    <div className="App">
      <header className="App-header">
        <CatList cats={cuteCats} handleCatSelect={handleCatSelect}/>
        <CatDisplay cat={selectedCat}/>
      </header>
    </div>
  );
}

export default App;
