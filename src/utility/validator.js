const mongoose = require("mongoose")

const isValid = function (value) {
    if (typeof value === "undefined" || value === null) return false;
    if (typeof value === "string" && value.trim().length === 0) return false;
    if (!value) return false
    return true;
};


//------------------------------- Fname regex --------------------------------------------//

const isValidFname = function (name) {
    return /^[a-zA-Z .]{2,30}$/.test(name);
};
//------------------------------- Lname regex --------------------------------------------//

const isValidLname = function (name) {
    return /^[a-zA-Z ]{2,30}$/.test(name);
};
//------------------------------- email regex --------------------------------------------//

const isVAlidEmail = function (email) {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email)
}
//------------------------------- password regex --------------------------------------------//


const isValidPassword = function (pass) {
    return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/.test(pass);
};

//------------------------------- phone regex --------------------------------------------//

const isValidPhone = function (phone) {
    return (/^[6789]\d{9}$/).test(phone)

}
//------------------------------- street regex --------------------------------------------//

const isValidStreet = function (value) {
    return /^[a-zA-Z0-9 -.,]{2,30}$/.test(value);
};
//------------------------------- pincode regex --------------------------------------------//

const isValidPincode = function (num) {
    return /^[1-9][0-9]{5}$/.test(num);
};


module.exports = {
    isValid,
    isValidFname,
    isValidLname,
    isValidStreet,
    isValidPassword,
    isVAlidEmail,
    isValidPhone,
    isValidPincode

}