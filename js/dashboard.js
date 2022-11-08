/**
 * An array with information of all first-year ICT courses and exams.
 * @type {Array}
 */
const hboict = [
    {
        quartile: 1,
        number_of_exams: 4,
        courses: [
            {
                course_code: "CU75001",
                course_name: "PCO",
                ects: 2.5,
                exams: [
                    {
                        exam: 1,
                        exam_weight: 1,
                        exam_name: "Assessment website Individual process ssessment",
                        grade: 9.6
                    }
                ]
            },
            {
                course_code: "CU75002",
                course_name: "Computer Science Basics (CSB)",
                ects: 5,
                exams: [
                    {
                        exam: 1,
                        exam_weight: 1,
                        exam_name: "Written knowledge test",
                        grade: null
                    }
                ]
            },
            {
                course_code: "CU75003",
                course_name: "Programming Basics (PBA)",
                ects: 5,
                exams: [
                    {
                        exam: 1,
                        exam_weight: 1,
                        exam_name: "Case study exam",
                        grade: null
                    }
                ]
            },
            {
                course_code: "CU75054",
                course_name: "IT Personality Project Week 1 (PPW1)",
                ects: 1.25,
                exams: [
                    {
                        exam: 1,
                        exam_weight: 1,
                        exam_name: "Portfolio",
                        grade: null
                    }
                ]
            }
        ]
    },
    {
        quartile: 2,
        number_of_exams: 3,
        courses: [
            {
                course_code: "CU75004",
                course_name: "Object-Oriented programming (OOP)",
                ects: 10,
                exams: [
                    {
                        exam: 1,
                        exam_weight: 0.5,
                        exam_name: "Presentation",
                        grade: null
                    },
                    {
                        exam: 2,
                        exam_weight: 0.5,
                        exam_name: "Case study exam",
                        grade: null
                    }
                ]
            },
            {
                course_code: "CU75056",
                course_name: "IT Personality 1 (ITP1)",
                ects: "1.25",
                exams: [
                    {
                        exam: 1,
                        exam_weight: 1,
                        exam_name: "Portfolio",
                        grade: null
                    }
                ]
            }
        ]
    },
    {
        quartile: 3,
        number_of_exams: 5,
        courses: [
            {
                course_code: "CU75008",
                course_name: "Framework Development 1 (FDE1)",
                ects: 5,
                exams: [
                    {
                        exam: 1,
                        exam_weight: 1,
                        exam_name: "Case study exam",
                        grade: null
                    }
                ]
            },
            {
                course_code: "CU75009",
                course_name: "Framework Project 1 (FPR1)",
                ects: 7.5,
                exams: [
                    {
                        exam: 1,
                        exam_weight: 0.33,
                        exam_name: "Criterium based interview",
                        grade: null
                    },
                    {
                        exam: 2,
                        exam_weight: 0.33,
                        exam_name: "Assignment",
                        grade: null
                    },
                    {
                        exam: 3,
                        exam_weight: 0.34,
                        exam_name: "Case study exam",
                        grade: null
                    }
                ]
            },
            {
                course_code: "CU75057",
                course_name: "IT Personality 2 (ITP1)",
                ects: "1.25",
                exams: [
                    {
                        exam: 1,
                        exam_weight: 1,
                        exam_name: "Portfolio",
                        grade: null
                    }
                ]
            }
        ]
    },
    {
        quartile: 4,
        number_of_exams: 4,
        courses: [
            {
                course_code: "CU75057",
                course_name: "IT Personality International week (PIW)",
                ects: "1.25",
                exams: [
                    {
                        exam: 1,
                        exam_weight: 1,
                        exam_name: "Portfolio",
                        grade: null
                    }
                ]
            },
            {
                course_code: "CU75011",
                course_name: "Framework Project 2 (FPR2)",
                ects: 10,
                exams: [
                    {
                        exam: 1,
                        exam_weight: 0.25,
                        exam_name: "Final delivery",
                        grade: null
                    },
                    {
                        exam: 2,
                        exam_weight: 0.25,
                        exam_name: "Report of acceptance tests and optional assessments",
                        grade: null
                    },
                    {
                        exam: 3,
                        exam_weight: 0.5,
                        exam_name: "IT Development Portfolio",
                        grade: null
                    }
                ]
            }
        ]
    },
    {
        quartile: 0,
        number_of_exams: 2,
        courses: [
            {
                course_code: "CU75068",
                course_name: "Personal Professional Development: Exploration (PPD-E) (INT Class)",
                ects: 12.5,
                exams: [
                    {
                        exam: 1,
                        exam_weight: 0.04,
                        exam_name: "English test",
                        grade: null
                    },
                    {
                        exam: 2,
                        exam_weight: 0.96,
                        exam_name: "Criterium focused interview",
                        grade: null
                    }
                ]
            },
        ]
    }
];

/**
 * Function which creates table with data retrieved from hbcoict object.
 * @param tableElement should refer to <table> element placed in HTML code.
 */
function createDashboard(tableElement) {
    const theadElement = document.createElement("thead");
    tableElement.appendChild(theadElement);
    tableElement.firstElementChild.innerHTML = `
    <tr>
        <th> Quartile </th>
        <th> Course code </th>
        <th> Course name </th>
        <th> ECTS </th>
        <th> Exam </th>
        <th> Weight </th>
        <th> Exam name </th>
        <th> Grade </th>
    </tr>
    `;
    let tbodyElement = document.createElement("tbody");
    tableElement.appendChild(tbodyElement);
    tbodyElement = tableElement.lastElementChild;
    hboict.forEach(function (quartile) {
        quartile.courses.forEach(function (course,courseIndex) {
            course.exams.forEach(function (exam,examIndex) {
                if(courseIndex == 0 && examIndex == 0){
                    tbodyElement.innerHTML +=  `<tr><td rowspan="${quartile.number_of_exams}">${quartile.quartile}</td><td rowspan="${course.exams.length}">${course.course_code}</td><td rowspan="${course.exams.length}">${course.course_name}</td><td rowspan="${course.exams.length}">${course.ects}</td><td>${exam.exam}</td><td>${exam.exam_weight}</td><td>${exam.exam_name}</td><td><input type="number" min="0" max="10" value="${exam.grade}"/></td></tr>`;
                }
                else{
                    if(examIndex == 0){
                        tbodyElement.innerHTML +=  `<tr><td rowspan="${course.exams.length}">${course.course_code}</td><td rowspan="${course.exams.length}"   >${course.course_name}</td><td rowspan="${course.exams.length}">${course.ects}</td><td>${exam.exam}</td><td>${exam.exam_weight}</td><td>${exam.exam_name}</td><td><input type="number" min="0" max="10" value="${exam.grade}"/></td></tr>`;
                    }
                    else{
                        tbodyElement.innerHTML +=  `<tr><td>${exam.exam}</td><td>${exam.exam_weight}</td><td>${exam.exam_name}</td><td><input type="number" min="0" max="10" value="${exam.grade}"/></td></tr>`;
                    }
                }
            });
        });
        });
}

/**
 * Sets appropriate cell colour depending on the exam grade.
 * @param gradeCells should represent an array with grade inputs.
 */
function setGradeCellsColour(gradeCells){
    gradeCells.forEach(function (gradeCell){
        if(gradeCell.value == null) gradeCell.style.backgroundColor = "white";
        else if(gradeCell.value < 5.5) gradeCell.style.backgroundColor = "red";
        else gradeCell.style.backgroundColor = "green";
    });
}

/**
 * Adds eventListeners to all input cells
 * @param gradeCells should represent an array with grade inputs.
 */
function setInTypeEventForCells(gradeCells){
    gradeCells.forEach(function (gradeCell){
        gradeCell.addEventListener("input", function (){
            if(gradeCell.value == null) gradeCell.style.backgroundColor = "white";
            else if(gradeCell.value < 5.5) gradeCell.style.backgroundColor = "red";
            else gradeCell.style.backgroundColor = "green";
            readAndWriteECPoints();
        });
})};

/**
 * Calculates the sum of EC points and implements these EC points into NSBC progress bar.
 */
function readAndWriteECPoints() {
    const ECPoints = Array.from(document.getElementsByTagName("input"));
    let ECPointsSum = 0;
    let iterator = 0;
    hboict.forEach(function (quartile) {
        quartile.courses.forEach(function (course) {
            course.exams.forEach(function (exam) {
                if(ECPoints[iterator].value >= 5.5) ECPointsSum += course.ects * exam.exam_weight;
                else;
                iterator++;
            })
        })
    })
    const ECPointsPercent = ECPointsSum/60*100;
    const myProgressBar = document.getElementById("my-progress-bar");
    myProgressBar.style.width = `${ECPointsPercent}%`;
    if(ECPointsPercent >= 100) myProgressBar.className = "progress-bar bg-success";
    else if(ECPointsPercent < 100 && ECPointsPercent >= 90) myProgressBar.className = "progress-bar bg-primary";
    else if(ECPointsPercent < 90 && ECPointsPercent >= 75) myProgressBar.className = "progress-bar bg-warning";
    else myProgressBar.className = "progress-bar bg-danger";
}

/**
 * Actions to do after page load
 */
window.addEventListener("load",function(){
    createDashboard(document.getElementById("dashboard"));
    setGradeCellsColour(Array.from(document.getElementsByTagName("input")));
    setInTypeEventForCells(Array.from(document.getElementsByTagName("input")));
    readAndWriteECPoints();
})