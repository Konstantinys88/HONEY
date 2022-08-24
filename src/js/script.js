const hamburger = document.querySelector('.header__hamburger'),
    menu = document.querySelector('.header__list'),
    closeElem = document.querySelector('.header__list active');

    // hamburger.addEventListener('click', () => {
    //     menu.classList.add('active');
    // });

    // hamburger.addEventListener('click', () => {
    //    hamburger.classList.add('active');
    // });


    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    hamburger.addEventListener('click', () => {
       hamburger.classList.toggle('active');
    });
