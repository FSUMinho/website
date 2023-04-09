// TEAM'S YEARS IN BUSINESS

function getYears()
{
    var years = document.getElementById("years");
    var currentDate = new Date;
    var Currentyear = currentDate.getFullYear();
    var yearsInBusiness = Currentyear - 2021;
    years.innerHTML = yearsInBusiness;
}
getYears(); 

// MEMBER COUNT

function countMembers()
{
    const className = "member";

    const fetchPromises = [];

    const countValues = [];

    const filePaths = ['html/team.html', 'html/management.html', 'html/esw.html', 'html/drivetrain.html', 'html/powertrain.html', 'html/body.html'];

    // Loop through the file URLs and create a fetch() Promise for each one
    filePaths.forEach(url => {
        fetchPromises.push(fetch(url)
          .then(response => response.text())
          .then(data => {
            // Parse the HTML string and get the count of elements with the specified class name
            const count = (new DOMParser().parseFromString(data, 'text/html')).querySelectorAll(`.${className}`).length;
      
            // Add the count value to the array
            countValues.push(count);
          })
          .catch(error => {
            console.error(`Error fetching file: ${error}`);
          })
        );
      });

    // Wait for all fetch() Promises to resolve
    Promise.all(fetchPromises)
    .then(() => {
        // Add up the total count across all files
        const totalCount = countValues.reduce((total, count) => total + count, 0);
        document.getElementById("totalMembers").innerHTML = totalCount;
    });
}
countMembers();