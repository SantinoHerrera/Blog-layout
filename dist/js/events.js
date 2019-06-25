var slide = document.getElementsByClassName('btn-slide');
console.log(slide);
for (const btn of slide) {
  btn.addEventListener('click', toggleDisplay);
}

function toggleDisplay(e) {
  var page1 = document.getElementsByClassName('page1');
  var page2 = document.getElementsByClassName('page2');
  for (const item of page1) {
    if (item.style.display == 'none') {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  }
  for (const item of page2) {
    if (item.style.display == 'none') {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  }
}
