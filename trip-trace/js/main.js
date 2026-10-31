// Entry point: map + switching between the trip library and a trip.
import { initMap, map } from './mapview.js';
import * as library from './library.js';
import * as tripview from './tripview.js';

const $ = id => document.getElementById(id);

initMap($('map'));

function showLibrary() {
  document.body.className = 'at-library';
  $('tripView').hidden = true;
  $('replayView').hidden = true;
  $('libraryView').hidden = false;
  library.render();
}

async function openTrip(id, opts) {
  document.body.className = 'at-trip';
  $('libraryView').hidden = true;
  $('tripView').hidden = false;
  map.invalidateSize();
  await tripview.open(id, opts);
}

library.init({ onOpen: openTrip });
tripview.init({ onBack: showLibrary });
showLibrary();
