
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'boxdownloadbtn';
    card.id=game.id

    card.innerHTML = `
        <div class="box-imgdownload">
            <img class="boxdownloadimg" src="${game.image}" alt="${game.title}">
            <div class="boxdownloadimggame">
                <div class="boxdownloadsize-gamename">
                    <span>${game.gamename}</span>
                    <span class="sizedownload">10G</span>
                </div>
                <div class="boxdownloadicondl">
                     <span><i class="fas fa-download"></i></span>   
                </div>
            </div>
        </div>
    `;

    return card;
}


const games = [
    {
        id: "fc",
        gamename: "FC 26",
        image: "./static/img/Cover-Fc.jpg",
    },
    {
        id: "pes",
        gamename: "PES 2026",
        image: "./static/img/Cover-Pes.jpg",
    },
    {
        id: "need",
        gamename: "Need For",
        image: "./static/img/Cover-NeedFor-Speed.jpg",
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



// new

const gameboxnew = document.getElementById("cardgameboxnew");

games.forEach(game => {
    gameboxnew.appendChild(createGameCard(game));
});

// update 

const gameboxupdate = document.getElementById("cardgameboxupdate");

games.forEach(game => {
    gameboxupdate.appendChild(createGameCard(game))
})



// all-cardgame


function createGameCardall(gameall) {
    const card = document.createElement('div');
    card.className = `allcardgames ${gameall.class} active`;
    card.id=gameall.id

    card.innerHTML = `
        <div class="box-imgdownload">
            <img class="boxdownloadimg" src="${gameall.image}" alt="${gameall.title}">
            <div class="boxdownloadimggame">
                <div class="boxdownloadsize-gamename">
                    <span>${gameall.gamename}</span>
                    <span class="sizedownload">10G</span>
                </div>
                <div class="boxdownloadicondl">
                     <span><i class="fas fa-download"></i></span>   
                </div>
            </div>
        </div>
    `;

    return card;
}


const gamesall = [
    {
        gamename: "FC 26",
        image: "./static/img/Cover-Fc.jpg",
        class:"fc all"
    },
    {
        gamename: "PES 2026",
        image: "./static/img/Cover-Pes.jpg",
        class:"pes all"
    },
    {
        gamename: "GTA5",
        image: "./static/img/Cover-gta.jpg",
        class:"gta all"
    },
     {
        gamename: "GTAv",
        image: "./static/img/Cover-gta.jpg",
        class:"gta all"
    },
     {
        gamename: "GTA",
        image: "./static/img/Cover-gta.jpg",
        class:"gta all"
    },
    {
        gamename: "PES 2025",
        image: "./static/img/Cover-Pes.jpg",
        class:"pes all"
    },
     {
        gamename: "FC 26",
        image: "./static/img/Cover-Fc.jpg",
        class:"fc all"
    },
    {
        gamename: "PES 2026",
        image: "./static/img/Cover-Pes.jpg",
        class:"pes all"
    },
    {
        gamename: "NeedFor",
        image: "./static/img/Cover-NeedFor-Speed.jpg",
        class:"needfor all"
    },
    {
        gamename: "PES 2025",
        image: "./static/img/Cover-Pes.jpg",
        class:"pes all"
    },
     {
        gamename: "FC 26",
        image: "./static/img/Cover-Fc.jpg",
        class:"fc all"
    },
    {
        gamename: "PES 2026",
        image: "./static/img/Cover-Pes.jpg",
        class:"pes all"
    },
     {
        gamename: "GTA san",
        image: "./static/img/Cover-gta.jpg",
        class:"gta all"
    },
     {
        gamename: "GTA5",
        image: "./static/img/Cover-gta.jpg",
        class:"gta all"
    },
    {
        gamename: "Need For",
        image: "./static/img/Cover-NeedFor-Speed.jpg",
        class:"needfor all"
    },
    {
        gamename: "PES 2025",
        image: "./static/img/Cover-Pes.jpg",
        class:"pes all"
    },
     {
        gamename: "FC 26",
        image: "./static/img/Cover-Fc.jpg",
        class:"fc all"
    },
    {
        gamename: "PES 2026",
        image: "./static/img/Cover-Pes.jpg",
        class:"pes all"
    },
    {
        gamename: "Need For",
        image: "./static/img/Cover-NeedFor-Speed.jpg",
        class:"needfor all"
    },
    {
        gamename: "PES 2025",
        image: "./static/img/Cover-Pes.jpg",
        class:"pes all"
    },
     {
        gamename: "FC 26",
        image: "./static/img/Cover-Fc.jpg",
        class:"fc all"
    },
    {
        gamename: "PES 2026",
        image: "./static/img/Cover-Pes.jpg",
        class:"pes all"
    },
    {
        gamename: "Need For",
        image: "./static/img/Cover-NeedFor-Speed.jpg",
        class:"needfor all"
    },
    {
        gamename: "PES 2025",
        image: "./static/img/Cover-Pes.jpg",
        class:"pes all"
    },
     {
        gamename: "FC 26",
        image: "./static/img/Cover-Fc.jpg",
        class:"fc all"
    },
    {
        gamename: "PES 2026",
        image: "./static/img/Cover-Pes.jpg",
        class:"pes all"
    },
    {
        gamename: "Need For",
        image: "./static/img/Cover-NeedFor-Speed.jpg",
        class:"needfor all"
    },
    {
        gamename: "PES 2025",
        image: "./static/img/Cover-Pes.jpg",
        class:"pes all"
    },
     {
        gamename: "FC 26",
        image: "./static/img/Cover-Fc.jpg",
        class:"fc all"
    },
    {
        gamename: "PES 2026",
        image: "./static/img/Cover-Pes.jpg",
        class:"pes all"
    },
    {
        gamename: "Need For",
        image: "./static/img/Cover-NeedFor-Speed.jpg",
        class:"reddead all"
    },
    {
        gamename: "PES 2025",
        image: "./static/img/Cover-Pes.jpg",
        class:"pes all"
    },
     {
        gamename: "FC 26",
        image: "./static/img/Cover-Fc.jpg",
        class:"fc all"
    },
    {
        gamename: "PES 2026",
        image: "./static/img/Cover-Pes.jpg",
        class:"pes all"
    },
    {
        gamename: "Need For",
        image: "./static/img/Cover-NeedFor-Speed.jpg",
        class:"needfor all"
    },
    {
        gamename: "PES 2025",
        image: "./static/img/Cover-Pes.jpg",
        class:"pes all"
    },

    // بازی‌های بیشتر اضافه کن...
];


const gameboxall = document.getElementById("allcardgame");
// ساخت همه کارت‌ها
gamesall.forEach(gameall => {
    gameboxall.appendChild(createGameCardall(gameall));
});




function selectallcard(classall,btn){
    const allcardgamesall=document.querySelectorAll(".allcardgames");
    allcardgamesall.forEach(allcardgames=>{
        allcardgames.classList.remove("active")
    })
    document.querySelectorAll(classall).forEach(f=>{
        f.classList.add('active')
    })

    const boxallspans=document.querySelectorAll('.boxallspan')
    boxallspans.forEach(boxallspan=>{
        boxallspan.classList.remove("active")
    })
    btn.classList.add('active')
}