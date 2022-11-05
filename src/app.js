const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

function toggleButton() {
  navList.classList.toggle('show');
}

hamburgerButton.addEventListener('click', toggleButton);

// get the back to top button
scrollBtn = document.getElementById('scroll-btn');

// when user scrolls 75 px down from the top of the document, show the back to top button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
}

// when user clicks on button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // safari
  document.documentElement.scrollTop = 0; // chrome, firefox, IE
}


// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

// ——————————————————————————————————————————————————
// Text Random
// ——————————————————————————————————————————————————

const phrases = [
    'Back End Developer',
    'Morelia, Mx',
    'MoreliaHacks',
    'Debug the City'
]

const el = document.querySelector('.text')
const fx = new TextScramble(el)

let counter = 0
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 1500)
  })
  counter = (counter + 1) % phrases.length
}

next()


// ——————————————————————————————————————————————————
// Date CMD mac About
// ——————————————————————————————————————————————————

const d = new Date();
let fecha = d.toDateString();
let hour = d.toLocaleTimeString().replace(/AM|PM/, '');
document.getElementById("fecha").innerHTML = fecha + ' ' + hour + ' on ttys000';

// ——————————————————————————————————————————————————
// EFFECT COLOR IN NAME
// ——————————————————————————————————————————————————

    $('.txt').html(function (i, html) {
        var chars = $.trim(html).split("");
        return '<span>' + chars.join('</span><span>') + '</span>';
    });

// ——————————————————————————————————————————————————
// FUNCTION CURSOR MAC OS IN CMD ABOUT
// ——————————————————————————————————————————————————
$('#cmd').t({
    delay: 1,
        locale:'en',
        speed: 35,
        caret: '<div class="body__row-cursor"></div>',
        tag: 'div',
    });