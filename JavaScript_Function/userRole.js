var getUserRole = function (name, role){

    switch (role) {
        case "admin":
            return `${name} is a admin with all access`
            // break;
        case "sub-admin":
            return `${name} is a sub-admin with access to create and delete course`
            // break;
        case "testprep":
            return `${name} is a testprep with access to create and delete tests`
            // break;
        case "user":
            return `${name} is a user consume all content`
            // break;
        default:
            return `${name} is a trial user`
            // break;
    }
}

var getRole = getUserRole("Shahila", "sub-admin")
console.log(getRole);