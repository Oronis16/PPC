import React from 'react';
import './Main.css';
import { Titlebox } from './Title/Titlebox';
import { Countbox } from './Countbox/Countbox';

export class Main extends React.Component {
  render() {
    return(
      <div className='main-table'>
        <Titlebox />
        <Countbox />
      </div>

    )
  }
}