// Babel
import '@babel/polyfill'

// Preact
import { h, render } from 'preact'

// Shell
import './main.css'

render(
  <div id='app'>
    <h1>Min Webbapp</h1>
  </div>,
  document.body,
  document.getElementById('app')
)
