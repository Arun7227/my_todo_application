const addTask=document.querySelector('#button_add_task');
$(addTask).on('click',function(){
    const todoText=document.querySelector('#todo_text');
    const todoTextValue=todoText.value.trim();
    if(todoTextValue==''){
        alert('This field does\'t empty')
    }
    else if(todoTextValue.length>=40){
        alert("this field doesn\' exceed more than 40 characters")
    }
 
    else{
        const list=document.getElementById('todo_list');
      
        const list_item=document.createElement('li');
        list_item.classList.add('list_item');

        const span=document.createElement('span');
        span.classList.add('todo_list_text')

        const checkBox=document.createElement('input');
        checkBox.setAttribute("type","checkbox");
        checkBox.setAttribute("name","todo_check");
        checkBox.setAttribute("value","todo_check");
        checkBox.setAttribute("id","check");

        const checkLabel=document.createElement('label');
        checkLabel.setAttribute('for','check');
        checkLabel.setAttribute('id','label');
        
        const closeButton=document.createElement('button');
        closeButton.setAttribute('id','button_close_task');
        closeButton.classList.add('btn');
        closeButton.classList.add('btn-danger');
        closeButton.innerHTML='&times;'
      
        //appending child to parent 
        const text=document.createTextNode(todoTextValue);
        checkLabel.appendChild(text);
       
        span.appendChild(checkBox);
        span.appendChild(checkLabel);
        

        list_item.appendChild(span);

        list_item.appendChild(closeButton);

        list.appendChild(list_item);

    $(closeButton).on('click',function(){
        list.removeChild(list_item);
    });

    }
});