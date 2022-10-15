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
    const dashboardTable = document.getElementById("dashboard").childNodes[3].childNodes;
    let arrayIterator = 0;
    for (let dashboardRowIterator = 1; dashboardRowIterator < dashboardTable.length; dashboardRowIterator += 2){
        creditsArray.push(Number(dashboardTable[dashboardRowIterator].childNodes[7].textContent));
        passedArray.push(dashboardTable[dashboardRowIterator].childNodes[11].textContent);
        if(passedArray[arrayIterator] === `YES`);
        else{
            creditsArray.splice(arrayIterator,1);
            passedArray.splice(arrayIterator,1);
            arrayIterator--;
        }
        arrayIterator++;
    }
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