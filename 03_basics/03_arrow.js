
//conventional method-------
const user = {
    username: "mnk",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to github`);
        console.log(this);
    }

}

// user.welcomeMessage()

function chai(){
    let username = "mnk"
    console.log(this.username);
}

// chai() //output: undefined

const chai2 =  () => {
    let username = "mnk"
    console.log(this.username);
}

// chai2() //output: undefined

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// console.log(addTwo(3, 4))