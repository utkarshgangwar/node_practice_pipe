function getUserInfo() {
    setTimeout(() => {
        console.log('User Info returned here');
    }, 5000)
}

function getUserContact() {
    console.log('User contact returned here');
}

// getUserInfo();
// getUserContact();

/*
try{
    console.log('Get user info');
}
catch(e){
    console.log('error getting the Get user info');
}
finally{
    console.log('Return user');
}

getUserContact();

*/

// #3 Using Promises

const user = new Promise((resolve, reject) => {
    // write logic here
    console.log('Getting User Info');

    // either resolve or reject
    resolve('Return user info');

    // reject('Failed to return user');

}).then((data) => {
    getUserContact();
}).catch((e) => {
    console.log(e);
})