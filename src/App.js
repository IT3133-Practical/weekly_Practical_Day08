import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routers>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/contact' element={<Contactus/>}/>

        </Routers>
      </Router>
    </div>
  );
}

export default App;
