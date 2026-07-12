

function selectpage(id, btn) {
    const sectionsall = document.querySelectorAll('.sections');
    const tabbtnheader = document.querySelectorAll('.tabsclickheaderdown');

    sectionsall.forEach(sections => {
        sections.classList.remove('active')
    });
    document.getElementById(id).classList.add('active')
    tabbtnheader.forEach(tab => {
        tab.classList.remove('active')
    });
    btn.classList.add('active')
}



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
        delay: 3000,   // 👈 هر 3 ثانیه
        disableOnInteraction: false, // وقتی کاربر کلیک کرد قطع نشه
    },
});


function selectcompany(id, btn) {
    const sectioncompanys = document.querySelectorAll('.sectioncompany')
    sectioncompanys.forEach(sectioncompany => sectioncompany.classList.remove('active'))
    document.getElementById(id).classList.add('active');
    const tabcompanys = document.querySelectorAll('.tabcompany');
    tabcompanys.forEach(tabcompany => tabcompany.classList.remove('active'))
    btn.classList.add('active')
}




const BLONER = {
    create(options) {
        const el = document.createElement(options.tag);

        if (options.text) {
            el.textContent = options.text
        };

        if (options.css) {
            Object.assign(el.style, options.css)
        }

        if (options.hover) {

            const oldstyle = {};

            for (const key in options.hover) {
                oldstyle[key] = el.style[key];
            };

            el.addEventListener("mouseenter", () => {
                Object.assign(el.style, options.hover)
            })

            el.addEventListener("mouseleave", () => {
                Object.assign(el.style, oldstyle)
            })
        }

        if (options.attributes) {

            for (const key in options.attributes) {

                if (key === "style") {
                    Object.assign(el.style, options.attributes.style);
                } else {
                    el.setAttribute(key, options.attributes[key]);
                }

            }

        }

        if (options.class) {
            el.className = options.class;
        }

        if (options.id) {
            el.id = options.id
        }

        if (options.event) {
            for (const key in options.event) {
                el.addEventListener(key, options.event[key])
            }
        }

        const addChild = (item) => {

            const child = document.createElement(item.tag);

            if (item.text) child.textContent = item.text;
            if (item.class) child.className = item.class;
            if (item.id) child.id = item.id;
            if (item.css) Object.assign(child.style, item.css);
            if (item.attributes) {

                for (const key in item.attributes) {

                    if (key === "style") {
                        Object.assign(child.style, item.attributes.style);
                    } else {
                        child.setAttribute(key, item.attributes[key]);
                    }

                }

            }
            if (item.addtagthis) {

                if (Array.isArray(item.addtagthis)) {
                    item.addtagthis.forEach(x => {
                        child.appendChild(addChild(x));
                    });
                } else {
                    child.appendChild(addChild(item.addtagthis));
                }

            }

            return child;
        };

        if (options.addtagthis) {

            if (Array.isArray(options.addtagthis)) {
                options.addtagthis.forEach(item => {
                    el.appendChild(addChild(item));
                });
            } else {
                el.appendChild(addChild(options.addtagthis));
            }

        }
        if (options.bind) {

            BLONER1.watch(() => {

                for (const key in options.bind) {
                    const value = options.bind[key];
                    el[key] = typeof value === "function" ? value() : value;
                }

            });

        }

        const parent = document.querySelector(options.parent);
        if (parent) {
            parent.appendChild(el)
        };
        return el;
    }
}



const cardgame = BLONER.create({
    tag: "div",
    css: {
        display: "grid",
        width: "110px",
        height: "180px",
        justifySelf: "center",
    },
    addtagthis: {
        tag: "div",
        css: {
            display: "grid",
            gridTemplateRows: "max-content 1fr",
            boxShadow: "0 0 10px #000",
            borderRadius: "10px",
        },
        addtagthis: [
            {
                tag: "div",
                addtagthis:
                {

                    tag: "img",
                    id: "imgbox",
                    attributes: {
                        src: "k"
                    },
                    css: {
                        width: "100%",
                        display: "grid",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                    },
                }
            },

            {
                tag: "div",
                css: {
                    display: "grid",
                    background: "#1b90ff",
                    color: "#fff",
                    fontSize: "10px",
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                    display: "grid",
                    gridTemplateRows: "1fr max-content",
                },
                addtagthis: [{
                    tag: "div",
                    text: ``,
                    css: {
                        width: "100%",
                        height: "105px",
                        overflowY: "scroll",
                    },
                },
                {
                    tag: "div",
                    css: {
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                    },
                    addtagthis: [{
                        tag: "button",
                        class: 'fas fa-arrow-up-right-from-square',
                        css: {
                            background: "#363636bb",
                            color: "#cccccc",
                            width: "100%",
                            borderBottomLeftRadius: "10px",
                            border: "0",
                            padding: "2px",
                            fontSize: "10px",
                            borderRight: "2px solid #000000"
                        }
                    },
                    {
                        tag: "button",
                        class: 'fas fa-download',
                        css: {
                            background: "#0f7e00bb",
                            color: "#cccccc",
                            width: "100%",
                            borderBottomRightRadius: "10px",
                            border: "0",
                            padding: "2px",
                            fontSize: "10px"
                        }
                    }
                    ],

                }
                ],
            }
        ]
    },
})




// const gamebox=document.getElementById("divcardid")


// gamebox.innerHTML+=cardgame.outerHTML;
// gamebox.innerHTML+=cardgame.outerHTML;
// gamebox.innerHTML+=cardgame.outerHTML;


// document.getElementById("imgbox").attributes.src.value = "./static/img/Cover-Gta.jpg"




function createGameCard(data) {

    return BLONER.create(
        {
            tag: "div",
            css: {
                display: "grid",
                width: "110px",
                height: "180px",
                justifySelf: "center",
            },
            addtagthis: {
                tag: "div",
                css: {
                    display: "grid",
                    gridTemplateRows: "max-content 1fr",
                    boxShadow: "0 0 10px #000",
                    borderRadius: "10px",
                },
                addtagthis: [
                    {
                        tag: "div",
                        addtagthis:
                        {

                            tag: "img",
                            id: "imgbox",
                            attributes: {
                                src: data.image
                            },
                            css: {
                                width: "100%",
                                display: "grid",
                                borderTopLeftRadius: "10px",
                                borderTopRightRadius: "10px",
                            },
                        }
                    },

                    {
                        tag: "div",
                        css: {
                            display: "grid",
                            background: "#1b90ff",
                            color: "#fff",
                            fontSize: "10px",
                            borderBottomLeftRadius: "10px",
                            borderBottomRightRadius: "10px",
                            display: "grid",
                            gridTemplateRows: "1fr max-content",
                        },
                        addtagthis: [{
                            tag: "div",
                            text: data.title,
                            css: {
                                width: "100%",
                                height: "105px",
                                overflowY: "scroll",
                                fontSize:"10px",
                                textAlign:"center",
                            },
                        },
                        {
                            tag: "div",
                            css: {
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                            },
                            addtagthis: [{
                                tag: "button",
                                class: 'fas fa-arrow-up-right-from-square',
                                css: {
                                    background: "#363636bb",
                                    color: "#cccccc",
                                    width: "100%",
                                    borderBottomLeftRadius: "10px",
                                    border: "0",
                                    padding: "5px",
                                    fontSize: "10px",
                                }
                            },
                            {
                                tag: "button",
                                class: 'fas fa-download',
                                css: {
                                    background: "#0f7e00bb",
                                    color: "#cccccc",
                                    width: "100%",
                                    borderBottomRightRadius: "10px",
                                    border: "0",
                                    padding: "5px",
                                    fontSize: "10px"
                                }
                            }
                            ],

                        }
                        ],
                    }
                ]
            },
        }
    )
}


const games = [

    {
        title: "Fc mobile",
        image: "./static/img/Cover-Fc.jpg",
    },


    {
        title: "efootball",
        image: "./static/img/Cover-Pes.jpg",
    },


    {
        title: "Needfor-Speed",
        image: "static/img/Cover-NeedFor-Speed.jpg",
    }

];


const gamebox = document.getElementById("divcardid");


games.forEach(game => {
    gamebox.appendChild(
        createGameCard(game)
    );
});
