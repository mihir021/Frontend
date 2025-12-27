/**
 * var.js — Demonstrates variable scope, hoisting, and shadowing in JavaScript.
 *
 * Topics covered:
 * - Global vs function scope
 * - Difference between `let` (block scope) and `var` (function scope)
 * - Hoisting behavior (`var` is hoisted and initialized with `undefined`,
 *   while `let`/`const` are subject to the Temporal Dead Zone)
 * - Reassigning a `const` triggers a TypeError
 * - Variable shadowing inside functions
 */

// Example: global variable and a function-scoped `var`
let globalNumber = 10;

function showGlobalAndLocal() {
    // `localVar` is declared with `var` => function scope (not visible outside)
    var localVar = 20;

    // Prints the global `globalNumber` (10) and local `localVar` (20)
    console.log(globalNumber, localVar); // 10 20
}

showGlobalAndLocal();

// Writes the global variable `globalNumber` to the document
document.writeln(globalNumber); // 10

// Variants (kept commented for reference)
// -----------------------------------------------------------------------------

// Variant: logging before a `var` declaration inside the function
// This illustrates hoisting: `b` is hoisted and initialized to `undefined`.
//
// let a = 10
// function f1(){
//     console.log(a, b)
//     // prints: 10 undefined  (because `b` is hoisted as undefined)
//     var b = 20
// }
// f1()
// document.writeln(a)

// Variant: using `let` inside the function
// `let` has block scope and is not available before its declaration.
// Uncommenting and running the following will cause a ReferenceError when
// trying to access `a` outside of f1 if `a` is not defined globally.
//
// function f1(){
//     let a = 10
//     var b = 20
//     document.writeln(a, b)
// }
// f1()
// document.writeln(a) // Uncaught ReferenceError: a is not defined (if `a` not global)

// End of examples

// (removed redundant example)


const IMMUTABLE_VALUE = 10;
function tryReassignConst() {
    try {
        IMMUTABLE_VALUE = 1; // TypeError: Assignment to constant variable.
    } catch (err) {
        console.error('Reassigning a const throws:', err);
    }
}

// const s1 = 1
// const s1 = 2
// // syantex error 

// Example showing shadowing (local const with the same name)
const outerValue = 0;
function demonstrateShadowing() {
    const outerValue = 1; // shadows the outer `outerValue` inside the function
    document.writeln(outerValue); // writes: 1
}
// demonstrateShadowing();

