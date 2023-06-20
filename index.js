const navList = document.querySelector('#nav-list');

function toggleNav() {
  if (navList.style.display === 'none') {
    navList.style.display = 'flex';
  } else {
    navList.style.display = 'none';
  }
}
