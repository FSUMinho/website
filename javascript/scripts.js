function getYears()
{
    var years = document.getElementById("years");
    var currentDate = new Date;
    var Currentyear = currentDate.getFullYear();
    var yearsInBusiness = Currentyear - 2020;
    years.innerHTML = yearsInBusiness;
}

function getNumCourses()
{
    var coursesElement = document.getElementById("courses");

    fetch("../lang/pt.json")
    .then(response => response.json())
    .then(data => {
        const courses = data.courses;
        var numCourses = Object.keys(courses).length;
        coursesElement.innerHTML = numCourses;
    });
}

getYears();
getNumCourses();