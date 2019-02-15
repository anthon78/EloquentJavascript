let size = parseInt(window.prompt("Enter size: "));

let evenline = "";
let oddline =  "";

// build lines without nesting loops

for (let i=0; i< size; i++){
    evenline += " #";
    oddline += "# ";
}

for (let i=0; i<size; i++) {
    (i % 2 == 0) ? console.log(evenline + "\n") : 
    console.log(oddline + "\n");
}