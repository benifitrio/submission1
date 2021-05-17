import 'regenerator-runtime'; /* for async await transpile */
import './styles/main.css';
import './DATA.json';
import {default as main} from './scripts/main';

document.addEventListener('DOMContentLoaded', main);

