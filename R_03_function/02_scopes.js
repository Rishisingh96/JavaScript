//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 300
    // console.log("INNER: ", a);
    
}


 //console.log(a);
// console.log(a); error for inter
// console.log(b);
// console.log(c);

function one(){
    const username = "Rishi"

    function two(){
        const website = "youtube"
        // console.log(username);
        // console.log(website);
    }
    // console.log(website);  // we can not take  outside website  function sor error show

    // two()

}

//  one()
// two()  //error not define

if (true) {
    const username = "Rishi"
    // if (!username) {  can't
    if (username === "Rishi") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5))  // we can take outside

function addone(num){
    return num + 1
}



// addTwo(5)  // we can't take outside 
const addTwo = function(num){
    return num + 2
}
addTwo(5)
console.log(addTwo(5))