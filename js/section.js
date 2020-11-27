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

/*-------------------------------  .socialPage -------------------------*/

function showSocialIframe(ele, ind) {
    //console.log("show a page pluggin");
    const socialBtn = document.querySelectorAll(".social-btn");
    const pagePluggin = document.querySelectorAll('.page-pluggin');
    //console.log(pagePluggin.length);

    for (var i = 0; i < socialBtn.length; i++) {
        socialBtn[i].style.backgroundColor = "";
        socialBtn[i].style.color = '#444444';
        console.log(i);
    }

    for (var j = 0; j < pagePluggin.length; j++) {
        pagePluggin[j].style.display = 'none';
    }

    ele.style.backgroundColor = '#4267b2';
    ele.style.color = '#ffffff';

    pagePluggin[ind].style.display = 'block';
}
document.querySelectorAll(".social-btn")[0].click();