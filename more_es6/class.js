//class keyword for creating a structure of an object. in class, have property in a constructor and may type of methods here. methods mean func structure. constructor call directly when accessing the class. we can access the class using new keyword.
//class name start with a class keyword and first letter of name start with a capital letter.


class Members {
    //direct call func/method ----> constructor
    constructor(name, age) {
        //use this keyword for set property of Members class/object structure
        this.name = name;
        this.age = age;
        //direct calling console.
        console.log("calling the constructor directly when access the class");

        //direct calling methods
        function directCall() {
            console.log("i'm the direct calling method from a constructor");
        }
    }

    //own created methods
    //calling members
    callMembers() {
        console.log("Hey, members come here");
    }
}


//accessing the class and direct call cause of constructor.
const firstMember = new Members()

//access the own created method in a class---> callMembers()
firstMember.callMembers()

//pass the value of object property structure by the class. at first access it using new keyword and send the value of name and age in a parenthesis (). 
const secondMember = new Members("kiri", 19);
//kiri = name, 19 = age. thoose are printed/created object directly when access the class.
console.log(secondMember);


//last question------why i can't access a method when it store in a constructor of an class?