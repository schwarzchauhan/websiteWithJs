/*j();

function j() {
    alert('dk');
} */

/*---------------------------------- .customContainer slideshow ---------------------------------*/
const customShow = document.querySelector('.customShow');
const customImg = document.querySelectorAll('.customShow img');

const prevBtn = document.querySelector('.customContainer #prev');
const nextBtn = document.querySelector('.customContainer #next');

let counter = 1;
const size = customImg[0].clientWidth;
customShow.style.transform = 'translateX(' + (-size * counter) + 'px)';
console.log(size);

nextBtn.addEventListener('click', () => {
    customShow.style.transition = "transform 0.4s ease-in-out";
    counter++;
    customShow.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    customShow.style.transition = "transform 0.4s ease-in-out";
    counter--;
    customShow.style.transform = 'translateX(' + (-size * counter) + 'px)';
});



customShow.addEventListener('transitionend', () => {

    if (customImg[counter].id === 'lastClone') {
        customShow.style.transition = "none";
        counter = customImg.length - 2;
        customShow.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if (customImg[counter].id === 'firstClone') {
        customShow.style.transition = "none";
        counter = 1;
        customShow.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

});
/*---------------------------- .travel-container -----------------------*/
const travelSlide = document.querySelector('.travel-slide');
const travelImg = document.querySelectorAll('.travel-slide img');


let ctr = 1;
const sizePic = travelImg[0].clientWidth;
console.log(`size of all travel pics  : ${sizePic}`);

travelSlide.style.transform = 'translateX(' + (-sizePic * ctr) + 'px)';
//console.log('counter of travel : ' + ctr);

setInterval(function() {
    document.querySelector('.travel-container .nav-btn-r').click();
}, 3000);

function nextTravelPix() {
    travelSlide.style.transition = 'transform 0.4s ease-in-out';
    ctr++;
    travelSlide.style.transform = 'translateX(' + (-sizePic * ctr) + 'px)';
    //console.log('counter of travel : ' + ctr);
    //console.log(travelImg[ctr].clientWidth);
}

function prevTravelPix() {
    travelSlide.style.transition = 'transform 0.4s ease-in-out';
    ctr--;
    travelSlide.style.transform = 'translateX(' + (-sizePic * ctr) + 'px)';
    //console.log('counter of travel : ' + ctr);
}

travelSlide.addEventListener('transitionend', function() {
    if (ctr == travelImg.length - 1) {
        travelSlide.style.transition = 'none';
        ctr = 1;
        travelSlide.style.transform = 'translateX(' + (-sizePic * ctr) + 'px)';
        //console.log('bypass and come to  : ' + ctr);
    } else if (ctr == 0) {
        travelSlide.style.transition = 'none';
        ctr = travelImg.length - 2;
        travelSlide.style.transform = 'translateX(' + (-sizePic * ctr) + 'px)';
        //console.log('bypass and come to  : ' + ctr);
    }
    console.log(travelImg[ctr].clientWidth);
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
        //console.log(i);
    }

    for (var j = 0; j < pagePluggin.length; j++) {
        pagePluggin[j].style.display = 'none';
    }

    ele.style.backgroundColor = '#4267b2';
    ele.style.color = '#ffffff';

    pagePluggin[ind].style.display = 'block';
}
document.querySelectorAll(".social-btn")[0].click();