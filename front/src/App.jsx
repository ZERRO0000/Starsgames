import Header from './components/header/Header.jsx';
import './App.css';
import Container from './components/container/Container.jsx';
import Route from './modules/Route.js';
import { useState, useEffect, useCallback} from 'react';

function App() {
  
 	let [currentPath, setCurrentPath] = useState('index');

  	const setPath = useCallback(async () => {
    	let r = new Route();
    	setCurrentPath(r.getUrl());
  	}, []);

  	useEffect(
    	() => {setPath()}, [setPath]
  	)

  	return (
    	<div className="App">
		<Header curPath={currentPath}/>

		<Container curPath={currentPath}></Container>
		
		</div>
	);
}

export default App;
