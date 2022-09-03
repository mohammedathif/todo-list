   let inputElement = document.querySelector('input');
   let formElement = document.querySelector('form');
   let listElement = document.querySelector('ul');
   let totalTaskElement = document.querySelector("#total-task");

   let tasklist =[
    'buy groceries',
    'car sercice'
   ]
   function populatelist(){
    tasklist.forEach(function(item){
        let newItem = document.createElement('li');


        //Add new span for text 
        let span = document.createElement('span');
        span.innerHTML = item;
        newItem.appendChild(span);


        //Add delete button

        let anchorElement = document.createElement('a');
        anchorElement.classList.add('delete');
        anchorElement.innerHTML = '<i class="fas fa-trach-alt"></i>';
        newItem.appendChild(anchorElement);

        //add LI to UL
        listElement.appendChild(newItem);





    })
   }

   populatelist();