import React, { FC } from 'react';
import { ThemeProvider } from 'react-jss';

import logo from './logo.svg';
import './App.css';

const theme = {
  color: {
      active: '#99CA3D', //green
      secondary: '#0E203A', //blue dark
      primary: '#1D174F', // blue dark
      grey: '#EFF0F3', //grey light
      secondaryHover: '#7ea530', //green
      secondaryBlue: '#05396B', //blue lighter
      secondaryGrey: 'rgba(14,32,58,0.6)', //grey with opacity
      altGrey: '#DDDDDD', //grey used on simulator
      white: '#FFFFFF',
  },
  font: {
      poppins: 'Poppins, sans-serif',
      montserrat: 'Montserrat, sans-serif',
      proximaNova: 'Proxima Nova',
      bold: 'bold',
  },
  spacing: (size: number): number => size * 6,
};

const App: FC = () => {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>        
      </ThemeProvider>
    );
};

export default App;
