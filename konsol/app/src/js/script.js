'use strict';

//declare variables

const arrToTop = document.getElementById('top'),
    anchorDown = document.getElementById('anchor-down'),
    linksToSection = document.querySelectorAll('.head-nav__link'),
    plan = document.querySelectorAll('.plan');


//scroll down, show the button
window.onscroll = function() {
    scrollFunc();
};

function scrollFunc() {
    if (document.body.scrollTop >= 990 || document.documentElement.scrollTop >= 990) {
        arrToTop.style.display = "flex";
    } else {
        arrToTop.style.display = "none";
    }
}

//click the button to top
arrToTop.addEventListener('click', function() {
    window.scrollTo({
        'behavior': 'smooth',
        'top': 0
    });
});

//click the button to down
anchorDown.addEventListener('click', function() {
    window.scrollTo({
        'behavior': 'smooth',
        'top': 990
    });
});

//scroll to section by click
linksToSection.forEach(anch => {
    anch.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//change color plan on hover
plan.forEach(
    plan => {
        plan.addEventListener('mouseenter', function() {
            this.children[0].style.backgroundColor = '#e74c3c';
            this.children[2].children[4].style.backgroundColor = '#e74c3c';
        });
        plan.addEventListener('mouseleave', function() {
            this.children[0].style.backgroundColor = '#999999';
            this.children[2].children[4].style.backgroundColor = '#999999';
        })
    }
)