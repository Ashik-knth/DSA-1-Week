let array = [];
const container = document.getElementById('array-container');
const delay = 300;

function generateArray(size = 20) {
  array = Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 10);
  renderArray();
}

function renderArray(highlight = []) {
  container.innerHTML = '';
  array.forEach((value, index) => {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${value * 3}px`;
    if (highlight.includes(index)) {
      bar.classList.add('active');
    }
    container.appendChild(bar);
  });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function mergeSort(start = 0, end = array.length - 1) {
  if (start >= end) return;

  const mid = Math.floor((start + end) / 2);
  await mergeSort(start, mid);
  await mergeSort(mid + 1, end);
  await merge(start, mid, end);
}

async function merge(start, mid, end) {
  const left = array.slice(start, mid + 1);
  const right = array.slice(mid + 1, end + 1);

  let i = 0, j = 0, k = start;

  while (i < left.length && j < right.length) {
    array[k] = left[i] <= right[j] ? left[i++] : right[j++];
    renderArray([k]);
    await sleep(delay);
    k++;
  }

  while (i < left.length) {
    array[k] = left[i++];
    renderArray([k]);
    await sleep(delay);
    k++;
  }

  while (j < right.length) {
    array[k] = right[j++];
    renderArray([k]);
    await sleep(delay);
    k++;
  }

  if (end - start === array.length - 1) {
    for (let idx = start; idx <= end; idx++) {
      document.querySelectorAll('.bar')[idx].classList.add('sorted');
    }
  }
}

function startMergeSort() {
  mergeSort();
}
