/*j();

function j() {
    alert('dk');
} */

/*---------------------------------- .customConatainer slideshow ---------------------------------*/
const customShow = document.querySelector('.customShow');
const customImg = document.querySelectorAll('.customShow img');


//customShow.innerHTML = "fkasdjk";

//customImg[0].style.display = 'none';
// buttons
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');


//counter 
let counter = 1;
const size = customImg[0].clientWidth;
customShow.style.transform = 'translateX(' + (-size * counter) + 'px)';



nextBtn.addEventListener('click', () => {
    customShow.style.transition = "transform 0.4s ease-in-out";
    counter++;
    // console.log(counter);
    customShow.style.transform = 'translateX(' + (-size * counter) + 'px)';
});


prevBtn.addEventListener('click', () => {
    customShow.style.transition = "transform 0.4s ease-in-out";
    counter--;
    // console.log(counter);
    customShow.style.transform = 'translateX(' + (-size * counter) + 'px)';
});



customShow.addEventListener('transitionend', () => {
    //console.log('fired');

    console.log(counter);
    if (customImg[counter].id === 'lastClone') {
        customShow.style.transition = "none";
        counter = customImg.length - 2;
        console.log('bypass to ' + counter);

        customShow.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if (customImg[counter].id === 'firstClone') {
        customShow.style.transition = "none";
        counter = 1;

        console.log('bypass to 1');
        customShow.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

});

/*------------------------------- .quoteConatainer slides -------------------------*/