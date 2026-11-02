// Entry: one globe, four layers on top of it (library, import, trip, cinema) plus the editor sheet.
import * as E from './engine.js';
import * as db from './db.js';
import * as model from './model.js';
import { M } from './model.js';
import * as library from './library.js';
import * as importflow from './importflow.js';
import * as tripview from './tripview.js';
import * as editor from './editor.js';
import * as cinema from './cinema.js';
import { createSample } from './sample.js';
import { toast, show, sleep } from './ui.js';

const $ = id => document.getElementById(id);

async function openTrip(id, opts = {}) {
  library.close();
  const ok = await model.load(id);
  if (!ok) { toast('旅をひらけませんでした'); library.open(); return; }
  cinema.prepare(id);
  tripview.open(opts);
}

function backToLibrary() {
  const id = M.trip?.id;
  tripview.hide();
  model.close();
  library.open({ focus: id, from: 'trip' });
}

function play() {
  tripview.hide();
  cinema.start({ exit: () => { tripview.resume(); } });
}

async function makeSample() {
  library.close();
  const el = $('import');
  E.setScreen('import');
  E.setDots([]);
  $('impStack').innerHTML = '';
  $('impCount').textContent = '';
  $('impLabel').textContent = 'サンプルの旅を用意しています';
  $('impNote').textContent = '鎌倉と箱根をめぐる1泊2日';
  show(el, true);
  const urls = [];
  const id = await createSample((f, thumb) => {
    $('impCount').textContent = `${Math.round(f * 100)}%`;
    if (thumb) {
      const u = URL.createObjectURL(thumb);
      urls.push(u);
      const d = document.createElement('div');
      d.className = 'imp-print';
      d.style.setProperty('--r', `${(Math.random() * 10 - 5).toFixed(1)}deg`);
      d.innerHTML = `<img src="${u}" alt="">`;
      $('impStack').appendChild(d);
      while ($('impStack').children.length > 4) $('impStack').firstElementChild.remove();
    }
  });
  await sleep(500);
  show(el, false);
  setTimeout(() => urls.forEach(u => URL.revokeObjectURL(u)), 1500);
  openTrip(id, { fresh: true });
}

async function boot() {
  await E.init($('map'));
  library.init({ openTrip, sample: makeSample });
  tripview.init({ back: backToLibrary, edit: () => editor.open(), play });
  editor.init({
    closed: () => tripview.refresh(),
    renamed: () => tripview.refresh(),
    deleted: async id => {
      await db.removeTrip(id);
      tripview.hide();
      model.close();
      toast('削除しました');
      library.open();
    },
  });

  $('pickNew').addEventListener('change', async e => {
    const files = e.target.files;
    if (!files?.length) return;
    library.close();
    const id = await importflow.run(files);
    e.target.value = '';
    if (id) openTrip(id, { fresh: true }); else library.open();
  });

  $('pickMore').addEventListener('change', async e => {
    const files = e.target.files;
    if (!files?.length || !M.trip) return;
    const tripId = M.trip.id;
    editor.close();
    tripview.hide();
    await model.save();
    const id = await importflow.run(files, tripId);
    e.target.value = '';
    await openTrip(id || tripId);
  });

  library.open();
  if (/[?&]debug\b/.test(location.search)) window.__tt = { E, M, model, cinema };
}

boot().catch(err => {
  console.error(err);
  document.body.insertAdjacentHTML('beforeend', `<p style="position:fixed;inset:auto 16px 40px;z-index:99;color:#fff;font-size:14px;text-align:center">地図を読み込めませんでした。通信状況を確認して、ページを再読み込みしてください。</p>`);
});
