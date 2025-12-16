//Numbers function - greater than equal
function gte(a,b){
    return a>=b ? true : false;
}

//String function - return a message
function showMessage(name){
return `Hello ${name}. Welcome to jest tutorial.`
}

//Array function - return a array
function shoppingList(){
    return [
        'peanut',
        'cake',
        'milk'
    ]
}

//Object function - return an object
function getUser(){
    return {
        id: 123,
        name: "Mohamad",
        age: 39
    }
}

//throw Error
function login(password){
    if (password !== '1234')
        throw new error ("password is not correct");
    return {jwt: "!@3sff6%F1"};
        
}

module.exports = {gte, showMessage, shoppingList, getUser, login};