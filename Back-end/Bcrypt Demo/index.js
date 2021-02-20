const bcrypt = require('bcrypt');

const login = async (pw, hashedPw) => {
    console.log(hashedPw);
    const result = await bcrypt.compare(pw, hashedPw);
    if (result) {
        console.log("You're logged in");
    } else {
        console.log("Sorry, incorrect password");
    }
}

// replace hashKey elow with the hash gotten from hash.js
login('hello', hashKey);