import Reveal from 'reveal.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import Notes from 'reveal.js/plugin/notes/notes.esm.js';

import './style.css';

// One file per section of the talk, injected in presentation order.
import title from './slides/00-title.html?raw';
import introduction from './slides/01-introduction.html?raw';
import myChapters from './slides/02-my-chapters.html?raw';
import chapter1 from './slides/03-chapter-1.html?raw';
import chapter2 from './slides/04-chapter-2.html?raw';
import chapter3 from './slides/05-chapter-3.html?raw';
import chapter4 from './slides/06-chapter-4.html?raw';
import learnings from './slides/07-learnings.html?raw';
import thankYou from './slides/08-thank-you.html?raw';

document.querySelector('.reveal .slides').innerHTML = [
  title,
  introduction,
  myChapters,
  chapter1,
  chapter2,
  chapter3,
  chapter4,
  learnings,
  thankYou,
].join('\n');

Reveal.initialize({
  hash: true,
  slideNumber: 'c/t',
  progress: true,
  width: 1280,
  height: 960,
  margin: 0.07,
  transition: 'slide',
  backgroundTransition: 'fade',
  plugins: [Highlight, Notes],
});
