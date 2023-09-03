
//preloader animation
const preloader=document.querySelector(".preloader");
const bodyLoaded=()=>{
    setTimeout(()=>{
        preloader.style.display ='none';
    },2000);
};

//scroll to top
const scrollToTop=document.querySelector(".scrollToTop");
window.addEventListener("scroll",()=>{
    window.pageYOffset>400?(scrollToTop.style.display='block'):(scrollToTop.style.display='none');
});

//scroll to top on click
scrollToTop.addEventListener('click',()=>{
    window.scrollTo({top:0});
});



//scroll reveal animation
const sr=ScrollReveal({
    origin:"top",
    distance:"80px",
    duration:2000,
    reset:true,
});

sr.reveal(
    `.starter,.about,.contagion,.symptoms,.solution,.map,.contact,footer,span`,{
        interval:200,
    }
);


