// IIFE

// Private / public

const user = (function () {
    let name = "anonymous";
    return {
        getName: _ => name,
        setName: newName => name = newName
    };
})();
console.log(user.getName()) // anonymous
user.setName("Amy");
console.log(user.getName()); // Amy

// private /public class

const MyClass = (function () {
    function privateFunc() {
        alert('only code in this IIFE can access this private function');
        alert('from private, this = ' + JSON.stringify(this, null, '    '));
    }

    return class MyClass {
        constructor(props) {
            Object.assign(this, props);
        }

        publicFunc() {
            alert('public method');
            privateFunc.call(this);
        }
    };
})();

// Alias to global object

(function ($) {
    // You’re safe to use jQuery here
})(jQuery);
// By wrapping your code inside an IIFE that takes jQuery as an argument,
// we will make sure that the $ symbol now refers to jQuery, not other libraries.

// Secure the scope

(function () {
    var greeting = "Good morning! How are you today?";
    console.log(greeting); // Good morning! How are you today?
})();

console.log(greeting); // error: Uncaught ReferenceError: greeting is not defined

// Loop index

// An old interview question
for (var i = 0; i < 3; i++) {
    setTimeout(_ => console.log(`We’re at ${i}`), 100);
}

// Output??
// We’re at 0
// We’re at 1
// We’re at 2

// old iife solution
for (var i = 0; i < 3; i++) {
    (function(index) {
        setTimeout(_ => console.log(`We’re at ${index}`), 100);
    })(i);
}

// new let solution

for (let i = 0; i < 3; i++) {
    setTimeout(_ => console.log(`We’re at ${i}`), 100);
}

