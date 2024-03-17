import React from 'react';
import './style/index.scss';
import { Header } from './components/Users/Header';
import { Content } from './components/Users/Content';
import { Paginator } from './components/Users/Paginator';



function App() {
   const [collections, setCollections] = React.useState([]);
   const [searchValue, setSeacrhValue] = React.useState('');
   const [isLoading, setIsLoading] = React.useState(true);
   const [pageSelected, setPageSelected] = React.useState(1);
   const [catsSelected, setCatsSelected] = React.useState(0);




   React.useEffect(() => {
      setIsLoading(true)
      const catsSelect = catsSelected ? `category=${catsSelected}` : '';
      fetch(`https://65f5dad441d90c1c5e0a44e3.mockapi.io/photocollections?page=${pageSelected}&limit=3&${catsSelect}`)
         .then(res => res.json())
         .then(json => setCollections(json))
         .catch(err => {
            console.warn(err)
            alert('Щось пішло не так...')
         }).finally(() => setIsLoading(false))

   }, [catsSelected, pageSelected])

   const Search = (e) => {
      setSeacrhValue(e.target.value)
   }

   const SetCats = (i) => {
      setCatsSelected(i);
      setPageSelected(1);
   }

   return (
      <div className="App">
         <Header
            setCatsSelected={setCatsSelected}
            catsSelected={catsSelected}
            search={Search}
            setCats={SetCats} />
         <Content
            collections={collections}
            searchValue={searchValue}
            isLoading={isLoading} />
         <Paginator
            setPageSelected={setPageSelected}
            pageSelected={pageSelected} />
      </div>
   );
}

export default App;
