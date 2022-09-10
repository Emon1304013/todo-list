
            document.getElementById('task-input').addEventListener('keyup',function(event){
                let input = event.target.value;
                // console.log(input);
                const addTaskButton = document.getElementById('add-task-button');
                if(input != ''){

                    document.getElementById('add-task-button').removeAttribute('disabled');
                    addTaskButton.classList.remove('opacity-50');
                }

                else{
                    document.getElementById('add-task-button').setAttribute('disabled',true);
                }
            })

            // const checkTextArea = () =>{
            //     const taskInputField = document.getElementById('task-input');
            //     const taskInputValue = taskInputField.value;
            //     console.log('result',taskInputValue)
            //     const addTaskButton = document.getElementById('add-task-button');
            //     if(taskInputField == ''){
            //         document.getElementById('add-task-button').setAttribute('disabled',true);
            //     }
            //     else{
            //         document.getElementById('add-task-button').removeAttribute('disabled');
            //         addTaskButton.classList.remove('opacity-50');
            //     }
            // }

            document.getElementById('add-task-button').addEventListener('click',function(){

                const textArea = document.getElementById('task-input');
                const textInput = textArea.value;
                const taskLitstContainer = document.getElementById('task-list');
                const listLength = taskLitstContainer.childNodes.length;
                // console.log(listLength);
                saveTaskToLocalStorage(listLength,textInput);
                
                displayTasks(textInput);
                textInput.value = '';

                textArea.value = '';
            })

            const displayTasks = (taskDetails) =>{

                // let task = {};

                const li = document.createElement('li');
                li.innerText = `${taskDetails}`;
                const taskLitstContainer = document.getElementById('task-list');
                taskLitstContainer.appendChild(li);
                const button = document.getElementById('add-task-button');
                button.setAttribute('disabled',true);
                button.classList.add('opacity-50');
            }



            const displayLocalStorageTasks = () =>{
                const task = getSavedTaskFromLocalStorage();
                // console.log(task);
                for(const taskNo in task){
                    const taskDetails = task[taskNo];
                    displayTasks(taskDetails);
                }
            }

            document.getElementById('task-list').addEventListener('click',function(event){
                event.target.style.textDecoration = "line-through";
            })

            const getSavedTaskFromLocalStorage = () => {
                let savedList = localStorage.getItem('task');
                let task = {};
                if(savedList) {
                    task = JSON.parse(savedList);
                }
                return task;
            }
            
            const saveTaskToLocalStorage = (taskNo,taskDetails) =>{
                const task = getSavedTaskFromLocalStorage();

                task[taskNo] = taskDetails;
                const taskStringified = JSON.stringify(task);
                localStorage.setItem('task', taskStringified);
            }

            displayLocalStorageTasks();
            // checkTextArea();