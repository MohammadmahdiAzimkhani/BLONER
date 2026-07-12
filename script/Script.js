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
        </div>
        <div class="box-gamedownload">
            <h1>${game.title}</h1>
            <div class="boxtextgame">
                <span class="texttop">1.Description:</span>
                <div class="textDescriptipn-DownloadGame">
                    ${game.description}
                </div>
                
                <span class="texttop">2.PC:</span>
                <div class="boxsistemAtleastPC">
                    <div>CPU: <span class="Descriptiontextmodelpc">${game.cpu ||  'CORE i5'}</span></div>
                    <div>GPU: <span class="Descriptiontextmodelpc">${game.gpu || 'RX580'}</span></div>
                    <div>RAM: <span class="Descriptiontextmodelpc">${game.ram || '12G'}</span></div>
                    <div>SSD: <span class="Descriptiontextmodelpc">${game.ssd || '200G'}</span></div>
                </div>

                <span class="texttop">4.Size:</span>
                <span class="DownloadSize-Game">${game.size}</span>
            </div>
        </div>
        <div class="btnclickstabdownload">
            <button class="btnclickgo" data-action="detail" data-id="${game.id}">
                <i class="fas fa-arrow-up-right-from-square"></i>
            </button>
            <button class="btnclickdownload" data-action="download" data-id="${game.id}">
                <i class="fas fa-download"></i>
            </button>
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
        title: "FC 26",
        image: "./static/img/Cover-Fc.jpg",
        description: "fc game in the Lorem ipsum dolorulla inventore recusandae illo totam, quae magni. Veniam.",
        size: "200 G",
        cpu: "CORE i5",
        gpu: "RX580",
        ram: "12G",
        ssd: "200G"
    },
    {
        id: 2,
        title: "PES 2026",
        image: "./static/img/Cover-Pes.jpg",
        description: "pes game in the Lorem ipsum dolorulla inventore recusandae illo totam, quae magni. Veniam.",
        size: "180 G",
        cpu: "CORE i5",
        gpu: "RX580",
        ram: "12G",
        ssd: "150G"
    },
    {
        id: 3,
        title: "Need For",
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
        title: "FC 26",
        image: "./static/img/Cover-Fc.jpg",
        description: "game in the Lorem ipsum dolorulla invenojojjtore recusandae illo totam, quae magni. Veniam.",
        size: "200 G",
        cpu: "CORE i5",
        gpu: "RX580",
        ram: "12G",
        ssd: "200G"
    },
    {
        id: 5,
        title: "PES 2026",
        image: "./static/img/Cover-Pes.jpg",
        description: "game in the Lorem ipsum dolorulla inventore recusandae illo totam, quae magni. Veniam.",
        size: "180 G",
        cpu: "CORE i5",
        gpu: "RX580",
        ram: "12G",
        ssd: "150G"
    },
    {
        id: 3,
        title: "Need Fort",
        image: "./static/img/Cover-NeedFor-Speed.jpg",
        description: "game in the Lorem ipsum dolorulla inventore recusandae illo totam, quae magni. Veniam.",
        size: "120 G",
        cpu: "CORE i7",
        gpu: "RTX 2060",
        ram: "16G",
        ssd: "100G"
    },
     {
        id: 1,
        title: "FC 26",
        image: "./static/img/Cover-Fc.jpg",
        description: "game in the Lorem ipsum dolorulla inventore recusandae illo totam, quae magni. Veniam.",
        size: "200 G",
        cpu: "CORE i5",
        gpu: "RX580",
        ram: "12G",
        ssd: "200G"
    },
    {
        id: 2,
        title: "PES 2026",
        image: "./static/img/Cover-Pes.jpg",
        description: "game in the Lorem ipsum dolorulla inventore recusandae illo totam, quae magni. Veniam.",
        size: "180 G",
        cpu: "CORE i5",
        gpu: "RX580",
        ram: "12G",
        ssd: "150G"
    },
    {
        id: 3,
        title: "Need for",
        image: "./static/img/Cover-NeedFor-Speed.jpg",     
        description: "game in the Lorem ipsum dolorulla inventore recusandae illo totam, quae magni. Veniam.",
        size: "120 G",
        cpu: "COREi7",
        gpu: "RX580",
        ram: "16G",
        ssd: "100G"
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