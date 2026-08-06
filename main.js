import Reveal from 'reveal.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import Notes from 'reveal.js/plugin/notes/notes.esm.js';

import './style.css';

Reveal.initialize({
  hash: true,
  slideNumber: 'c/t',
  progress: true,
  width: 1280,
  height: 720,
  margin: 0.07,
  transition: 'slide',
  backgroundTransition: 'fade',
  plugins: [Highlight, Notes],
});
