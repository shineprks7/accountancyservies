(function()
{


     document.addEventListener('DOMContentLoaded', function(){


        console.log("content loaded");


        const companyservicesbtns = document.querySelectorAll('.company-services-list-item-wrapper');


         companyservicesbtns.forEach((servicebtn => 

    {

        servicebtn.addEventListener('click', function( event ){


           const thisbutton = event.currentTarget;



            const currentparent = thisbutton.closest('.company-page-core-services-list-grid-column');

           const superparent = thisbutton.closest('.company-page-core-services-list-grid');


           const siblings = superparent.querySelectorAll('.company-page-core-services-list-grid-column');

           const checkclass = currentparent.classList.contains('active');



           if(checkclass)
           {

           

           

            currentparent.classList.remove('active');

            document.body.style.overflow = "scroll";

          }
          else
           {

            siblings.forEach(sibling => {

             sibling.classList.remove('active');

           });

            document.body.style.overflow = "hidden";

             currentparent.classList.add('active');

            //  setTimeout( ()=> 
            //  {

            //   currentparent.scrollIntoView(
            //   {
            //     behavior:"smooth",
            //     block:"start"
            //   }
            //  );

            //  },1000);





             
 
           }







});


    }
))







     })

    })();

