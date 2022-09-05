const swup = new Swup(); 


    function toggleNavMenu(){
        var toggleMenu = document.querySelector('.toggleNav');
        var nav = document.querySelector('.nav');
        var header = document.querySelector('header');
        toggleMenu.classList.toggle('active');
        nav.classList.toggle('active');
        header.classList.toggle('active');

    }


    window.addEventListener("scroll", function() {
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0)
    })


