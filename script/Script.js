// in the name off ALLAH 

// select-page
function selectpage(id, btn) {
    const sectionsall = document.querySelectorAll('.sections');
    const tabbtnheader = document.querySelectorAll('.tabsclickheader');

    sectionsall.forEach(sections => {
        sections.classList.remove('active')
    });
    document.getElementById(id).classList.add('active')
    tabbtnheader.forEach(tab => {
        tab.classList.remove('active')
    });
    btn.classList.add('active')
}

// select-bars-blur
const clickonslider = document.getElementById('clickonslider')

const barsslider = document.getElementById('barsslider');

const blurslider = document.getElementById('blurslider')

clickonslider.addEventListener('click', () => {
    barsslider.classList.toggle('active');
    blurslider.classList.toggle('active');
    document.body.style.overflow = "hidden"
})


blurslider.addEventListener('click', () => {
    barsslider.classList.remove('active');
    blurslider.classList.remove('active');
    document.body.style.overflow = "auto"
})

// swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    autoplay: {
        delay: 3000, 
        disableOnInteraction: false, 
    },
});

// card-gamedownloadSite
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'boxdownloadbtn';
    
    card.innerHTML = `
        <div class="box-imgdownload">
            <img class="boxdownloadimg" src="${game.image}" alt="${game.title}">
            <span class="boxdownloadimggame">
                ${game.gamename}
            </span>
        </div>
    `;

    // اضافه کردن Event Listener به دکمه‌ها
    // card.querySelectorAll('button').forEach(btn => {
    //     btn.addEventListener('click', function() {
    //         const action = this.dataset.action;
    //         const id = this.dataset.id;
            
    //         if (action === 'detail') {
    //             showGameDetail(id);
    //         } else if (action === 'download') {
    //             handleDownload(id);
    //         }
    //     });
    // });

    return card;
}

const games = [
    {
        id: 1,
        gamename: "FC 26",
        image: "./static/img/Cover-Fc.jpg",
    },
    {
        id: 2,
        gamename: "PES 2026",
        image: "./static/img/Cover-Pes.jpg",
    },
    {
        id: 3,
        gamename: "Need For",
        image: "./static/img/Cover-NeedFor-Speed.jpg",
        description: "need forgame in the Lorem ipsum dolorulla inventore recusandae illo totam, quae magni. Veniam.",
        size: "120 G",
        cpu: "CORE i7",
        gpu: "RTX 2060",
        ram: "16G",
        ssd: "100G"
    },
     {
        id: 4,
        gamename: "FC 26",
        image: "./static/img/Cover-Fc.jpg",
        description: "game in the Lorem ipsum dolorulla invenojojjtore recusandae illo totam, quae magni. Veniam.",
        size: "200 G",
        cpu: "CORE i5",
        gpu: "RX580",
        ram: "12G",
        ssd: "200G"
    },
      {
        id: 4,
        gamename: "FC 26",
        image: "./static/img/Cover-Fc.jpg",
        description: "game in the Lorem ipsum dolorulla invenojojjtore recusandae illo totam, quae magni. Veniam.",
        size: "200 G",
        cpu: "CORE i5",
        gpu: "RX580",
        ram: "12G",
        ssd: "200G"
    },
      {
        id: 4,
        gamename: "FC 26",
        image: "./static/img/Cover-Fc.jpg",
        description: "game in the Lorem ipsum dolorulla invenojojjtore recusandae illo totam, quae magni. Veniam.",
        size: "200 G",
        cpu: "CORE i5",
        gpu: "RX580",
        ram: "12G",
        ssd: "200G"
    },
    

    // بازی‌های بیشتر اضافه کن...
];

// home-cardgame

const gamebox = document.getElementById("cardgamebox");
// ساخت همه کارت‌ها
games.forEach(game => {
    gamebox.appendChild(createGameCard(game));
});



// all-cardgame

const gameboxall = document.getElementById("allcardgame");
// ساخت همه کارت‌ها
games.forEach(game => {
    gameboxall.appendChild(createGameCard(game));
});


// new

const gameboxnew = document.getElementById("cardgameboxnew");

games.forEach(game => {
    gameboxnew.appendChild(createGameCard(game));
});

// update 

const gameboxupdate=document.getElementById("cardgameboxupdate");

games.forEach(game=>{
    gameboxupdate.appendChild(createGameCard(game))
})