const crypto = require('crypto');

const getNewSalt = () => {
    const length = parseInt(10 + Math.random() * 40);
    return crypto.randomBytes(Math.ceil(length/2))
            .toString('hex') 
            .slice(0,length);
};

const encodePassword = (password) => {
    const salt = getNewSalt();
    let hash = crypto.createHmac('sha512', salt);
    hash.update(password);
    let value = hash.digest('hex');
    return {
        salt: salt,
        password: value
    };
};

const isValid = (passwordTextPlain, salt, passwordHashed) => {
    let hash = crypto.createHmac('sha512', salt);
    hash.update(passwordTextPlain);
    let value = hash.digest('hex');
    return value === passwordHashed;
};

module.exports = {
    getNewSalt,
    encodePassword,
    isValid
};