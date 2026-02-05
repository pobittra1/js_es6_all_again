//inheritance means doing copy of a class.
//we can access the inheritance class property value using super() method. and also call methods.

class TeacherIdentity {
    constructor(name, teachingPost, salary, canTeach) {
        //set the property name and value
        this.name = this.name;
        this.teachingPost = this.teachingPost;
        this.salary = this.salary;
        this.canTeach = this.canTeach;
    }
    //method for all teachers
    allTeacherCarHave() {
        console.log(true);
    }
}


//extends i mean access the teacherIdentity class in boysSir class and use it
class boysSir extends TeacherIdentity {
    constructor(name, teachingPost, salary, wearShirt) {
        //super method for access the property from extended teacherIdentity class.
        super(name, teachingPost, salary);
        //boysSir own property
        this.wearShirt = wearShirt
    }


    //boysSir Own method
    isBoys() {
        console.log("yes i am boy");
    }
}

class ladiesMem extends TeacherIdentity {
    constructor(name, teachingPost, salary, wearSaree) {
        //super method for access the property from extended teacherIdentity class.
        super(name, teachingPost, salary);
        //ladiesMem own property
        this.wearSaree = wearSaree
    }

    //ladiesMem own method
    isLadies() {
        console.log("yes i am female");
    }
}


const jagdishSir = new TeacherIdentity("jagdish roy", "sohokari teacher", 30000, "yes wear shirt")
console.log(jagdishSir);
jagdishSir.isBoys();


const smiritiMem = new TeacherIdentity("smiriti chowdhury", "principal", 35000, true)
console.log(smiritiMem);
smiritiMem.isLadies();


