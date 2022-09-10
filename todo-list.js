           

            document.getElementById('task-input').addEventListener('keyup',function(event){
                let input = event.target.value;
                console.log(input);
                const addTaskButton = document.getElementById('add-task-button');
                if(input != ''){

                    document.getElementById('add-task-button').removeAttribute('disabled');
                    addTaskButton.classList.remove('opacity-50');
                }

                else{
                    document.getElementById('add-task-button').setAttribute('disabled',true);
                }
            })

            document.getElementById('add-task-button').addEventListener('click',function(){
                const textArea = document.getElementById('task-input');

                const textInput = textArea.value;



                const taskLitstContainer = document.getElementById('task-list');
                
                const li = document.createElement('li');
                li.innerText = textInput;

                taskLitstContainer.appendChild(li);
                textInput.value = '';

                textArea.value = '';
                const button = document.getElementById('add-task-button');
                button.setAttribute('disabled',true);
                button.classList.add('opacity-50');

            })

            document.getElementById('task-list').addEventListener('click',function(event){
                event.target.style.textDecoration = "line-through";
            })
