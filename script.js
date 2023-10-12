const tbody = document.getElementById("tbody");

//creating array to show exact month insted on numbers
const monthsArr = [
  "",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

//fetching data to show inside table body
async function fetchTableData() {
  const response = await fetch("data.json");
  const data = await response.json();

  // extracting the array from data object
  const arr = data.d.results;

  // template literal to create tr in tbody
  let tableBody = "";
  //applyForEach to get each object Keys and values to manipulate
  arr.forEach((ele) => {
    const date = new Date(ele.date_time);
    const formatedDate = date.toLocaleDateString(); //extracting date from date_time
    const addArr = ele.address.split(",");
    const city = addArr[addArr.length - 2]; // extracting the city from address value
    const pin = addArr[addArr.length - 1];
    const street = addArr[0]; // extracting the

    //extracting Month of birth from date of birth
    const birthArr = ele.date_of_birth.split("-");
    const month = parseInt(birthArr[1]);

    //extracting date from date_time key
    const dateArr = ele.date_time.split("T");
    const date1 = dateArr[0].trim();
    tableBody += `<tr>
                <td>${ele.first_name + " " + ele.last_name}</td>
                 <td>${monthsArr[month]}</td>
                 <td>${ele.salary + ele.bonus + ele.ta}</td>
                 <td>${formatedDate}</td>
                 <td>${city}</td>
                 <td>${pin}</td>
                 <td>${street}</td>
                 
            </tr>`;

    //appending inside the tbody
    tbody.innerHTML = tableBody;
  });
}

fetchTableData();
