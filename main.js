//  Menu Section
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const navBar = document.querySelector('.mobile-nav');

menuBtn.addEventListener('click', () => {
  navBar.classList.add('menu-show');
});

closeBtn.addEventListener('click', () => {
  navBar.classList.remove('menu-show');
});

document.querySelector('.menu-btn').addEventListener('click', () => {
  navBar.style.display = 'block';
});

document.querySelectorAll('.mobile-nav').forEach((n) => (
  n.addEventListener('click', () => {
    menuBtn.classList.remove('menu-show');
    navBar.classList.remove('menu-show');
  })));

// Speaker Section

const mySpeakers = [
  {
    id: 1,
    name: 'Yohai Benkler',
    title: 'Professor at Harvard University',
    img: './images/speaker1.png',
    description: 'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia',
  },
  {
    id: 2,
    name: 'Kilnam Chon',
    title: 'Professor at Oxford University',
    img: './images/speaker2.png',
    description: 'As he is professor at Oxford , he opened Art Center Nabi, Korea first digital art institution in 2012, and is currently serving.',
  },
  {
    id: 3,
    name: 'SohYeong Noh',
    title: 'Trainer at Cambridge University',
    img: './images/speaker3.png',
    description: 'Layla Tretikov is the general secretary of the Cambridges Foundation, a non-profit organization that runs Wikipedia.',
  },
  {
    id: 4,
    name: 'Julia Leda',
    title: 'President Pirates of Europe',
    img: './images/speaker4.png',
    description: 'Developed Asias first Internet protocol network SDN and led Koreas first private line Internet connection in 1990, ushering in a full-fledged',
  },
  {
    id: 5,
    name: 'Lila Tretikov',
    title: 'Director of the Khan Foundation',
    img: './images/speaker5.png',
    description: 'European integration and online youth participation in politics and democracy are major concerns',
  },
  {
    id: 6,
    name: 'Ryan Merkley',
    title: 'CEO of the Mozilla Foundation',
    img: './images/speaker6.png',
    description: 'He led open source projects at the Mozilla Foundation and joined CC as CEO in 2014.',
  },
];

const speakersSection = document.querySelector('.feature');

function showSpeakers(speakerIndex) {
  let showItems = speakerIndex.map(
    (index) => `<article class="speaker-item">
        <img src=${index.img} alt="Speaker Photo" class="Photo"/>
        <div class="speaker-info">
            <div class="info">
                <h4 class="name">${index.name}</h4>
                <p class="title1">${index.title}</p>
            </div>
           <p class="description info">
                ${index.description}
           </p>
        </div>
        </article>`,
  );
  showItems = showItems.join('');
  speakersSection.innerHTML = showItems;
}

window.addEventListener('DOMContentLoaded', () => {
  showSpeakers(mySpeakers);
});