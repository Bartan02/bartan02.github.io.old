/**
 * Stores the array with information how much ECTS points exam with particular index has.
 * @type {any[]}
 */
let creditsArray = new Array();

/**
 * Stores the array with information if the exam with particular index is passed.
 * @type {String[]}
 */
let passedArray = new Array();

/**
 * Function which reads and filters the dashboard in regard to passed exams.
 */
function readData(){
    const dashboardTable = document.getElementsByTagName("input");
}

/**
 * Function which updates NBSA boundary from numbers from creditsArray array.
 */
function updateNBSABoundary() {
    let sum = creditsArray.reduce(function(initialSum, value){
        return initialSum += value;
    });
    document.getElementById("my-progress-bar").style.width = `${sum/60*100}%`;
}

/**
 * Execute part of code after the load of page
 */
window.addEventListener('load',function (){
    readData();
    updateNBSABoundary();
});