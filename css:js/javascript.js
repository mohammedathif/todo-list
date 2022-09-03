   let inputElement = document.querySelector('input');
   let formElement = document.querySelector('form');
   let listElement = document.querySelector('ul');
   let totalTaskElement = document.querySelector("#total-task");

   let taskList =[
    'buy groceries',
    'car sercice'
   ];

   function deleteItem(e){
    let task = e.target.parentElemet.previousElementSibling.innerHTML;
    let index = taskList.indexOf(task);
    if(index !== -1){
        taskList.splice(index, 1);
    }
   populateList();

   }

   function populateList(){
    listElement.innerHTML = '';
    taskList.forEach(function(item){
        let newItem = document.createElement('li');


        //Add new span for text 
        let span = document.createElement('span');
        span.innerHTML = item;
        newItem.appendChild(span);


        //Add delete button

        let anchorElement = document.createElement('a');
        anchorElement.classList.add('delete');
        anchorElement.innerHTML = '<i class="fas fa-trash-alt"></i>';
        newItem.appendChild(anchorElement);
        

        anchorElement.addEventListener('click',(e)=> deleteItem(e));

        //add LI to UL
        listElement.appendChild(newItem);





    })
    totalTaskElement.innerHTML = taskList.length;
    inputElement.value = '';



   }

   populateList();

   function deosNotHaveWhiteSpace(s){
    let stingWithoutSpace= s.trim();
    return stingWithoutSpace.length >0;      

   }

   function addTask(){
    if(inputElement.value && deosNotHaveWhiteSpace(inputElement.value)){
        taskList.push(inputElement.value)
        populateList();

    }

   }

   formElement.addEventListener('submit',function(e){
    e.preventDefault();
    addTask();
   });