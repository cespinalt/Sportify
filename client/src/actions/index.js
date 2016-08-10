import axios from 'axios';

export const FETCH_ROSTER = 'FETCH_ROSTER';
export const TOGGLE_NAVIGATION = 'TOGGLE_NAVIGATION';
export const CANCEL_NAVIGATION = 'CANCEL_NAVIGATION';

export function fetchRoster() {
  const request = axios.get('/roster');
  return {
    type: FETCH_ROSTER,
    payload: request,
  };
}


export function toggleNavigation() {
  const navCanvasClick = document.getElementsByClassName('nav-canvas');
  const mainContentClick = document.getElementsByClassName('main-content');
  const shadowClick = document.getElementsByClassName('shadow');

  const navOpen = () => {
    navCanvasClick[0].className = 'nav-canvas-clicked';
    mainContentClick[0].className = 'main-content-clicked';
    shadowClick[0].className = 'shadow-click';
  };

  return {
    type: TOGGLE_NAVIGATION,
    payload: navOpen(),
  };
}

export function closeNavigation() {
  const mainContentClosed = document.getElementsByClassName('main-content-clicked');
  const shadowClosed = document.getElementsByClassName('shadow-click');
  const navCanvasClosed = document.getElementsByClassName('nav-canvas-clicked');

  const navClose = () => {
    navCanvasClosed[0].className = 'nav-canvas';
    mainContentClosed[0].className = 'main-content';
    shadowClosed[0].className = 'shadow';
  };

  return {
    type: CANCEL_NAVIGATION,
    payload: navClose(),
  };
}

