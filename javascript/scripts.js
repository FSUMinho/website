/* TEAM'S YEARS IN BUSINESS */

function getYears()
{
    var years = document.getElementById("years");
    var currentDate = new Date;
    var Currentyear = currentDate.getFullYear();
    var yearsInBusiness = Currentyear - 2020;
    years.innerHTML = yearsInBusiness;
}
getYears(); 