
const person = {
    name: "jui",
    Batch: 42
}
 
const getHomeTown = (hometown) => {
    if(hometown) {
        return hometown;
    }
    else {
        return "unknown";
    }
}

const persontemplete = (
    <div>
    <h1>{person.name}</h1>
    <p>{person.Batch}</p>
    <p>{getHomeTown(person.hometown)}</p>
    
    </div>
)
const myApp = document.querySelector("#myApp");
ReactDOM.render(persontemplete, myApp);