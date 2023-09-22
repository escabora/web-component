// Polyfills
// import 'es6-promise/auto';
// import 'unfetch/polyfill';

// Vendors
import './vendors/scrolldir'

import Globals from './pages/globals/index'

// window.alert("teste");

document.addEventListener('DOMContentLoaded', Globals.init)
