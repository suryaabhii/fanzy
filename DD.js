const cls = document.getElementById('cls');
const pstT = document.getElementById('pstT');
const post = document.getElementById('post');
const pst = document.getElementById('pst');
const kw = document.getElementById('kw');
const pfl = document.getElementById('pfl');
const pflbtn = document.getElementById('prf');
const clobtn = document.getElementById('gl');
const main = document.getElementById('main');
const add = document.getElementById('add');

// Blur and Unblur Functions
function blur() {
  main.classList.add('blg');
  main.classList.add('disable');
}

function unblur() {
  main.classList.remove('blg');
  main.classList.remove('disable');
}

// Toggle profile visibility
pflbtn.addEventListener('click', () => {
  pfl.classList.remove('hidden');
  pflbtn.classList.add('hidden');
  blur();
});

clobtn.addEventListener('click', () => {
  pfl.classList.add('hidden');
  pflbtn.classList.remove('hidden');
  unblur();
});

// Handle Post Creation
pst.addEventListener('click', () => {
  post.classList.remove('hidden');
  pst.classList.add('hidden');
  blur();
});

cls.addEventListener('click', () => {
  post.classList.add('hidden');
  pst.classList.remove('hidden');
  unblur();
});

// Add Post and Clear Input
add.addEventListener('click', () => {
  if (pstT.value === '') {
    pstT.classList.add('rdbrd');
    alert('Please write something!');
  } else {
    alert('Post created: ' + pstT.value);
    pstT.value = ''; // Clear the input field
    pstT.classList.remove('rdbrd');
  }
});
