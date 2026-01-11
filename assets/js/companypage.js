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

            
          }
          else
           {

            siblings.forEach(sibling => {

             sibling.classList.remove('active');

           });

             currentparent.classList.add('active');
 
           }







});


    }
))







     })

    })();

