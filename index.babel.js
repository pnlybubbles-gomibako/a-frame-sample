require('aframe');

/**
 * Raw js
 */

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('cube').setAttribute('color', '#fca');
});


/**
 * With jQuery
 */

import $ from 'jquery';

$(() => {
  $('#scene').append('<a-sphere id="sphere"></a-sphere>');
  $('#sphere').attr({
    position: '2 2 0',
    radius: '1',
  });
});
