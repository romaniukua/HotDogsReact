import React, {Component} from 'react';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Cards from './components/cards/Cards';
import PostForm from './components/postForm/PostForm';
import Footer from './components/footer/Footer';
import {HashRouter, Route} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header/>
          <main className='main'>
            <Banner/>
            <Route exact path='/' component ={Cards} />
            <Route path='/contact' component ={PostForm}/>
          </main>
          <Footer/>
        </div>
      </HashRouter>
    );
  }
}

export default App;
