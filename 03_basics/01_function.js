function addTwo (num1, num2) {
    console.log(num1 + num2);    
}
// addTwo(3, 4)

const add = function (num1, num2){
    console.log(num1 + num2);    
}
// add(4, 5)

function loginUserMessage(username){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `Hi ${username}!, Welcome`
}

// console.log(loginUserMessage());

// function loginUserMessage(username = "John"){
//     if(!username){
//         console.log("PLease enter a username");
//         return
//     }
//     return `Hi ${username}!, Welcome`
// }

// console.log(loginUserMessage());

function calculate (...num1){
    return num1;
}

// console.log(calculate(2,3));

const userInfo = {
    username: "MNKhan",
    degree: "Graduate",
}
function printInfo(obj){
    console.log(`user info: ${obj.degree}`);
    
}
// printInfo(userInfo)

const loginUser = {
    username: "Mohammed",
    websiteVisit: "Github",

    printing: function () {
        console.log(`user's name: ${this.username}`);
        
    }
}
loginUser.printing()