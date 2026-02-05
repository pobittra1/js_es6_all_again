//this ---> it's define upper data when it's work with object or class. but when comes arrow func it's define nothing.

class Occupation {
    #avgIncome;
    constructor(occName, whatDoThey, avgIncome) {
        //here incIncome for not set the property, it's for pass the value between increaseIncome and calculate it then added with avgIncome.
        this.occName = occName;
        this.whatDoThey = whatDoThey;
        this.#avgIncome = avgIncome;
    }
    ///getting the increase income when it increase.
    getIncome() {
        return this.#avgIncome;
    }

    //increase method
    increaseIncome(incIncome) {
        return this.#avgIncome += incIncome;
    }
}


class Farmer extends Occupation {
    constructor(occName, whatDoThey, avgIncome, isFarmer) {
        super(occName, whatDoThey, avgIncome);
        this.isFarmer = isFarmer;

    }


    //use own method and condition
    isFarmerMethod() {
        if (true) {
            console.log(`actually He/She is a farmer ? = ${this.isFarmer}`);
        }
        else {
            console.log("He/She is not a farmer.");
        }
    }
}

const farmer = new Farmer("Farmer", "They are do farming for us", 7000, true);
console.log(farmer);// get farmer object
farmer.isFarmerMethod(); //get farmer own method
farmer.increaseIncome(5000); //send the increase income value by increaseIncome method and generate it into a new income.
console.log(`The income of this farmer after increase = ${farmer.getIncome()}`);// console then new income after icrease.