const sliderIconPreviousAll = document.querySelectorAll('.direction-arrow-icon-previous');
const sliderIconNextAll = document.querySelectorAll('.direction-arrow-icon-next');


console.log("slider loaded");

sliderIconNextAll.forEach(sliderIconNext => {
    

sliderIconNext.addEventListener('click', function( event ){


    
    console.log("next icon clicked");


    const superwrapper = event.currentTarget.closest('.slider-super-wrapper');

    
    console.log(superwrapper);


    const parentWrapper =  superwrapper.querySelector('.slider-parent-wrapper');

        console.log(parentWrapper);


       
    const scrollLeft = parentWrapper.scrollLeft;

    parentWrapper.scrollTo(
        {
            left:scrollLeft+360,
            behaviour:'smooth',

        }
    );





});

});


sliderIconPreviousAll.forEach(sliderIconPrevious => {


sliderIconPrevious.addEventListener('click', function( event ){


    const superwrapper = event.currentTarget.closest('.slider-super-wrapper');

    
    const parentWrapper =  superwrapper.querySelector('.slider-parent-wrapper');


    const scrollWidth =  parentWrapper.scrollWidth;

    const clientWidth = parentWrapper.clientWidth;

    const maxScrollPoint = scrollWidth - clientWidth;

    const scrollLeft = parentWrapper.scrollLeft;

    parentWrapper.scrollTo(
        {
            left:(scrollLeft-360),
            behaviour:'smooth',

        }
    );







       





});

});
