let Tasks = ["Hello","Yellow","Car"];

let addTask = ((task) => {
    Tasks.push(task)
    console.log(Tasks);   
    console.log(Tasks.length); 
})

let listAll = (()=>{
    Tasks.forEach((task)=>{
        console.log(task);
    })
})

let deleteTask = ((task)=> {
    let index = Tasks.indexOf(task)
    if(index <= Tasks.length){
        Tasks.splice(index,1);
    }
})



addTask("Clean");

listAll();

deleteTask("Clean");

listAll();
