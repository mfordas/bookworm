import React from 'react';

import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import MainPage from '../../Components/Main_page';
import '../../Styling/main_styling.scss';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
