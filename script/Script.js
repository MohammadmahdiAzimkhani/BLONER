// in the name off ALLAH 

// select-page
function selectpage(id, btn, number) {
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

    boxbarscontentbtn.forEach(b => {
        b.classList.remove('active')
    })
    boxbarscontentbtn[number].classList.add('active')

   document.querySelector('*').scrollTop = 0;
}

// select-page-bars

const tabsclickheader = document.querySelectorAll('.tabsclickheader')

const boxbarscontentbtn = document.querySelectorAll('.boxbarscontentbtn');

function pagebars(id, Number, btn) {
    const boxbarscontentbtns = document.querySelectorAll('.boxbarscontentbtn');
    boxbarscontentbtns.forEach(boxbarscontentbtn => {
        boxbarscontentbtn.classList.remove('active')
    })

    boxbarscontentbtns[Number].classList.add('active')

    selectpage(id, tabsclickheader[Number], Number);

    barsslider.classList.remove('active');
    blurslider.classList.remove('active');
    document.body.style.overflow = "auto"
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








// main-all

// const boxallspans=document.querySelectorAll('.boxallspan')

// boxallspans.forEach(boxallspan=>{
//     boxallspan.addEventListener('click',()=>{
//         boxallspan.classList.remove("active")
//     })
//      boxallspan.classList.toggle("active")
// })





function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'boxdownloadbtn';
    card.id = game.id

    card.innerHTML = `
        <div class="box-imgdownload">
            <img class="boxdownloadimg" src="${game.image}" alt="${game.title}">
            <div class="boxdownloadimggame">
                <div class='boxtopcard'>
                       <div class="boxdownloadsize-gamename">
                    <span>${game.gamename}</span>
                    <span class="sizedownload">10G</span>
                </div>
                <div class="boxdownloadicondl">
                     <span><i class="fas fa-download"></i></span>   
                </div>
                </div>
                 <div id='boxs'>
                 <div class="sideBoxst">
                    <button><span><i class="fas fa-play"></i></span></button>
                    <button><span><i class="fas fa-pause"></i></span></button>
                    <button><span><i class="fas fa-xmark"></i></span></button>
                    <button><span><i class="fas fa-circle-info"></i></span></button>
                    <button><span><i class="fas fa-trash-can"></i></span></button>
                    <button><span><i class="fas fa-bookmark"></i></span></button>
                 </div>
              </div>
            </.div>
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
    card.id = gameall.id

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
        class: "fc all"
    },
    {
        gamename: "PES 2026",
        image: "./static/img/Cover-Pes.jpg",
        class: "pes all"
    },
    {
        gamename: "GTA5",
        image: "./static/img/Cover-gta.jpg",
        class: "gta all"
    },
    {
        gamename: "GTAv",
        image: "./static/img/Cover-gta.jpg",
        class: "gta all"
    },
    {
        gamename: "GTA",
        image: "./static/img/Cover-gta.jpg",
        class: "gta all"
    },
    {
        gamename: "PES 2025",
        image: "./static/img/Cover-Pes.jpg",
        class: "pes all"
    },
    {
        gamename: "FC 26",
        image: "./static/img/Cover-Fc.jpg",
        class: "fc all"
    },
    {
        gamename: "PES 2026",
        image: "./static/img/Cover-Pes.jpg",
        class: "pes all"
    },
    {
        gamename: "NeedFor",
        image: "./static/img/Cover-NeedFor-Speed.jpg",
        class: "needfor all"
    },
    {
        gamename: "PES 2025",
        image: "./static/img/Cover-Pes.jpg",
        class: "pes all"
    },
    {
        gamename: "FC 26",
        image: "./static/img/Cover-Fc.jpg",
        class: "fc all"
    },
    {
        gamename: "PES 2026",
        image: "./static/img/Cover-Pes.jpg",
        class: "pes all"
    },
    {
        gamename: "GTA san",
        image: "./static/img/Cover-gta.jpg",
        class: "gta all"
    },
    {
        gamename: "GTA5",
        image: "./static/img/Cover-gta.jpg",
        class: "gta all"
    },
    {
        gamename: "Need For",
        image: "./static/img/Cover-NeedFor-Speed.jpg",
        class: "needfor all"
    },
    {
        gamename: "PES 2025",
        image: "./static/img/Cover-Pes.jpg",
        class: "pes all"
    },
    {
        gamename: "FC 26",
        image: "./static/img/Cover-Fc.jpg",
        class: "fc all"
    },
    {
        gamename: "PES 2026",
        image: "./static/img/Cover-Pes.jpg",
        class: "pes all"
    },
    {
        gamename: "Need For",
        image: "./static/img/Cover-NeedFor-Speed.jpg",
        class: "needfor all"
    },
    {
        gamename: "PES 2025",
        image: "./static/img/Cover-Pes.jpg",
        class: "pes all"
    },
    {
        gamename: "FC 26",
        image: "./static/img/Cover-Fc.jpg",
        class: "fc all"
    },
    {
        gamename: "PES 2026",
        image: "./static/img/Cover-Pes.jpg",
        class: "pes all"
    },
    {
        gamename: "Need For",
        image: "./static/img/Cover-NeedFor-Speed.jpg",
        class: "needfor all"
    },
    {
        gamename: "PES 2025",
        image: "./static/img/Cover-Pes.jpg",
        class: "pes all"
    },
    {
        gamename: "FC 26",
        image: "./static/img/Cover-Fc.jpg",
        class: "fc all"
    },
    {
        gamename: "PES 2026",
        image: "./static/img/Cover-Pes.jpg",
        class: "pes all"
    },
    {
        gamename: "Need For",
        image: "./static/img/Cover-NeedFor-Speed.jpg",
        class: "needfor all"
    },
    {
        gamename: "PES 2025",
        image: "./static/img/Cover-Pes.jpg",
        class: "pes all"
    },
    {
        gamename: "FC 26",
        image: "./static/img/Cover-Fc.jpg",
        class: "fc all"
    },
    {
        gamename: "PES 2026",
        image: "./static/img/Cover-Pes.jpg",
        class: "pes all"
    },
    {
        gamename: "Need For",
        image: "./static/img/Cover-NeedFor-Speed.jpg",
        class: "reddead all"
    },
    {
        gamename: "PES 2025",
        image: "./static/img/Cover-Pes.jpg",
        class: "pes all"
    },
    {
        gamename: "FC 26",
        image: "./static/img/Cover-Fc.jpg",
        class: "fc all"
    },
    {
        gamename: "PES 2026",
        image: "./static/img/Cover-Pes.jpg",
        class: "pes all"
    },
    {
        gamename: "Need For",
        image: "./static/img/Cover-NeedFor-Speed.jpg",
        class: "needfor all"
    },
    {
        gamename: "PES 2025",
        image: "./static/img/Cover-Pes.jpg",
        class: "pes all"
    },

    // بازی‌های بیشتر اضافه کن...
];


const gameboxall = document.getElementById("allcardgame");
// ساخت همه کارت‌ها
gamesall.forEach(gameall => {
    gameboxall.appendChild(createGameCardall(gameall));
});




function selectallcard(classall, btn) {
    const allcardgamesall = document.querySelectorAll(".allcardgames");
    allcardgamesall.forEach(allcardgames => {
        allcardgames.classList.remove("active")
    })
    document.querySelectorAll(classall).forEach(f => {
        f.classList.add('active')
    })

    const boxallspans = document.querySelectorAll('.boxallspan')
    boxallspans.forEach(boxallspan => {
        boxallspan.classList.remove("active")
    })
    btn.classList.add('active')
}




const cardgamesearchs = document.querySelectorAll(".allcardgames")

const searchinputall = document.getElementById("searchallgame");

searchinputall.addEventListener("input", () => {
    const value = searchinputall.value.trim().toLowerCase()

    cardgamesearchs.forEach(allcardgames => {
        const text = allcardgames.textContent.toLowerCase()

        if (text.includes(value)) {
            allcardgames.classList.add('active')
        } else {
            allcardgames.classList.remove('active')
        }
    })
})



const carddownloadopens = document.querySelectorAll('.carddownloadopen')

const searchdownloadgame = document.getElementById('searchdownloadgame');

searchdownloadgame.addEventListener("input", () => {
    const value = searchdownloadgame.value.trim().toLowerCase()
    carddownloadopens.forEach(carddownloadopen => {
        const text = carddownloadopen.textContent.toLowerCase()
        if (text.includes(value)) {
            carddownloadopen.style.display = "grid"
        } else {
            carddownloadopen.style.display = "none"
        }
    })
})



const opensearchhomebtn = document.getElementById('opensearchhomebtn');

const opensearchhomeinput = document.getElementById('opensearchhomeinput');

opensearchhomebtn.addEventListener('click', () => {
    opensearchhomebtn.classList.toggle('active');
    opensearchhomeinput.classList.toggle('active');
})


const createaccantbtnlogin = document.getElementById('createaccantbtnlogin')

const loginformcontent = document.getElementById('loginformcontent');

const signinformcontent = document.getElementById('signinformcontent');

const backsignin = document.querySelectorAll('.backsignin')

const forgotpasswordformcontent = document.getElementById('forgotpasswordformcontent');

const fotgotpasswordbtn = document.getElementById('fotgotpasswordbtn')

createaccantbtnlogin.addEventListener('click', () => {
    loginformcontent.classList.remove('active')
    signinformcontent.classList.add('active')
})





fotgotpasswordbtn.addEventListener('click', () => {
    forgotpasswordformcontent.classList.add('active')
    loginformcontent.classList.remove('active')
    signinformcontent.classList.remove('active')
})


backsignin.forEach(back => {
    back.addEventListener('click', () => {

        loginformcontent.classList.add('active')
        signinformcontent.classList.remove('active')
        forgotpasswordformcontent.classList.remove('active')

    })
})



const usernameinput = document.getElementById('usernameinput');

const emailinput = document.getElementById('emailinput')

const passwordinput = document.getElementById('passwordinput')



const testbtn = document.getElementById('testbtn')

const textnameaccant = document.getElementById('textnameaccant');

testbtn.addEventListener('click', () => {


    const newuser = {
        nameaccant: usernameinput.value,
        emailuser: emailinput.value,
        passworduser: passwordinput.value
    }
    console.log(`
            Name: ${newuser.nameaccant}
            Email: ${newuser.emailuser}
            Password: ${newuser.passworduser}
        `);

    usernameinput.value = ""
    emailinput.value = ""
    passwordinput.value = ""
    checkInputs();
})


function checkInputs() {
    if (
        usernameinput.value.trim() !== "" &&
        emailinput.value.trim() !== "" &&
        passwordinput.value.trim() !== ""
    ) {
        testbtn.disabled = false; // فعال
    } else {
        testbtn.disabled = true; // غیرفعال
    }
}

usernameinput.addEventListener("input", checkInputs);
emailinput.addEventListener("input", checkInputs);
passwordinput.addEventListener("input", checkInputs);

// هنگام لود صفحه هم بررسی کن
checkInputs();


emailinput.addEventListener('input', () => {
    if (emailinput.value.includes("@")) {
        emailinput.style.border = "2px solid #00ff00"
    }
    else {
        emailinput.style.border = "2px solid red"
    }
})

passwordinput.addEventListener('input', () => {
    if (passwordinput.value.includes('@') || passwordinput.value.includes('$') || passwordinput.value === "") {
        passwordinput.style.border = "2px solid red"
    } else {
        passwordinput.style.border = "2px solid #00ff00"
    }
})





const dragBox = document.getElementById("dragBox");
const sideBox = document.getElementById("sideBox");

// let startX = 0;

// dragBox.addEventListener("mousedown", (e) => {
//     startX = e.clientX;

//     function move(e) {
//         let dx = e.clientX - startX
//         dragBox.style.transform = `translate(${dx}px)`
//         // اگر بیشتر از ۵۰ پیکسل به چپ کشیده شد
//         if (dx < -200) {
//             sideBox.style.visibility = "visible";
//             dragBox.style.display = "none"
//         }
//     }

//     function up() {
//         document.removeEventListener("mousemove", move);
//         document.removeEventListener("mouseup", up);
//     }

//     document.addEventListener("mousemove", move);
//     document.addEventListener("mouseup", up);
// });


// const carddownloadopen = document.querySelectorAll('.carddownloadopen')

// const sideBoxs = document.querySelectorAll('.sideboxs')


const items = document.querySelectorAll(".carddownloadopen");
const menus = document.querySelectorAll(".sideBoxs");

items.forEach((item, index) => {

    let timer;

    item.addEventListener("mousedown", (e) => {

        timer = setTimeout(() => {

            menus[index].style.left = e.clientX + "px";
            menus[index].style.top = e.clientY + "px";
            menus[index].style.display = "grid";
            items[index].style.boxShadow = '0 0 5px 1px #0054bb86'
            items[index].style.transform = 'scale(1.02)'
            items[index].style.transition = '0.1s all'
        }, 1000);

    });


    item.addEventListener("mouseup", () => {
        clearTimeout(timer);
    });

    item.addEventListener("mouseleave", () => {
        clearTimeout(timer);
    });

    item.addEventListener("touchstart", (e) => {

        let touch = e.touches[0];

        timer = setTimeout(() => {

            menus[index].style.left = touch.clientX + "px";
            menus[index].style.top = touch.clientY + "px";
            items[index].style.boxShadow = '0 0 8px 3px #0054bb86'
            items[index].style.transform = 'scale(1.02)'
            items[index].style.transition = '0.3s all'
            menus[index].style.display = "grid";

        }, 1000);

    });




});



document.addEventListener("mousedown", (e) => {

    menus.forEach((menu, index) => {

        if (
            !items[index].contains(e.target) &&
            !menu.contains(e.target)
        ) {
            menu.style.display = "none";
            items[index].style.boxShadow = '0 0 5px 1px #000'
            items[index].style.transform = 'scale(1)'
        }

    });

});

// menus.addEventListener("touchend", () => {
//     clearTimeout(timer);
// });





const btncard = document.querySelectorAll(".boxdownloadbtn");

const boxdownloadimggame = document.querySelectorAll(".boxdownloadimggame");

const sideBoxst = document.querySelectorAll('.sideBoxst')

const boxs = document.getElementById('boxs')

btncard.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        boxdownloadimggame[index].classList.toggle('active');
    })
})

