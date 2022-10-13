import './App.css';
import React from 'react';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import Section from './components/Main/Section/Section.jsx';
import Footer from './components/Footer';
import Nav from './components/Main/Nav/Nav.jsx';
import Dialogs from './components/Main/Dialog/Dialogs';
import Videos from './components/Main/Videos/Videos';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<div className='wrapper'>
				<Header />
				<Main>
					<Nav></Nav>
					<Routes>
						<Route path='/profiles' element={<Section />} />
						<Route exact path='/dialogs/*' element={<Dialogs />} />
						<Route path='/videos' element={<Videos />} />
					</Routes>
				</Main>
				<Footer />
			</div>
		</BrowserRouter>

	);
}

export default App;
