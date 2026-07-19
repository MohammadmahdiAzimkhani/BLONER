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

