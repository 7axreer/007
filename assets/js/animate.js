
const sr = ScrollReveal({
    origin: 'left',
    distance: '60px',
    duration: 2000,
    delay: 300
})

sr.reveal(`.header__content-title`, { delay: 200 })
sr.reveal(`.header__content-sub, .about__content-img,   
            .about__content-text,  .blog__detail-title, .blog__detail-data`, { origin: 'top', delay: 300 })
sr.reveal(`.header__content-btns`, { distance: '100px', delay: 600, origin: 'bottom' })
sr.reveal(`.blog__content-menu`, { duration: 1000, delay: 100, origin: 'top' })
sr.reveal(`.blog__content-card, .portfolio__cards, .portfolio__detail-img, .openPro, .blog__detail-img`, { duration: 1500, origin: 'right', distance: '60px' })
sr.reveal(`.blog__content-card, .portfolio__cards, .blog__detail-box, .github`, { duration: 1500, origin: 'left', distance: '60px' })
sr.reveal(`.seeMore,`, { duration: 1500, origin: 'bottom', delay: 100 })

