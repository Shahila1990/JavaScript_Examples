var user = {
    firstName : "Shahila",
    lastName : "Rafeek",
    role : "Admin",
    loginCount : 32,
    facebookSignedIn : true,
    courseList : [],
    buyCourse : function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount : function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },

    info : function () {
        console.table([{
            firstName : this.firstName,
            lastName: this.lastName,
            role : this.role,
            loginCount : this.loginCount,
            facebookSignedIn : this.facebookSignedIn,
            courseList : this.courseList.length
            
         }]);
    },

};

var courseList = true;
console.log(user.firstName);
user.buyCourse("Java");
// console.log(user.getCourseCount());
user.buyCourse("C");
console.log(user.getCourseCount());
user.info();