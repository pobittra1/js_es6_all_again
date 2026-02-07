// the inner func can access outer func var and can manipulate it. after the outer func has returned.

function counter() {
    let count = 5; //it's private variable.
    return function (userName) {
        count = count + 1; //inner func can change outer func var.
        console.log(`inside the inner func count of ${userName} is ${count}`);
    }

}

const kiriCounter = counter(); //counter func return a annonymous func here. that's why kiriCounter variable is a func. after the count they can remain it.
kiriCounter("kiri");
kiriCounter("kiri");
kiriCounter("kiri");
kiriCounter("kiri");
const iriCounter = counter();
iriCounter("iri");
iriCounter("iri");
iriCounter("iri");
iriCounter("iri");
kiriCounter("kiri");
kiriCounter("kiri");
iriCounter("iri");
iriCounter("iri");
