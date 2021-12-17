import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

// components
import Header from './components/Header/Header';
import CollectionCard from './components/Collection Card/CollectionCard';
import Punklist from './components/Punklist/Punklist';
import Main from './components/Main/Main';

function App() {

  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios
        .get(
          'https://testnets-api.opensea.io/assets?asset_contract_address=0xea608b00B0A19015DBAf2C93b2b394a268f4a68F&order_direction=asc'
        )
      // console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }
    return getMyNfts()
  }, [])

  return (
    <div className='app'>
      <Header />
      {
        punkListData.length > 0 && (
          <>
            <Main
              punkListData={punkListData}
              selectedPunk={selectedPunk} />
            <Punklist
              punkListData={punkListData}
              setSelectedPunk={setSelectedPunk}
            />
          </>
        )
      }
    </div>
  );
}

export default App;
