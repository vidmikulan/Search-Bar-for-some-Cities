window.onload = function () {
  var input = document.querySelector(".search-bar");
  var deleteButton = document.querySelector("#delete-button");
  var output = document.querySelector(".results-div");
  // var websiteArray = [
  //   { name: "Accordion", src: "../accordion.html" },
  //   { name: "Calculator", src: "../calculator.html" },
  //   { name: "CRUD", src: "../CRUD.html" },
  //   { name: "CallBackCalculator", src: "../CallBackCalculator.html" },
  //   { name: "codeGuesser", src: "../codeGuesser.html" },
  //   { name: "coinToss", src: "../coin toss.html" },
  //   { name: "colorMatchingGame", src: "../colorMatchingGame.html" },
  //   { name: "countdownTimer", src: "../countdownTimer.html" },
  //   { name: "customImage", src: "../customImage.html" },
  //   { name: "dealCards", src: "../dealCards.html" },
  //   { name: "DragAndDropElement", src: "../DragAndDropElement.html" },
  //   { name: "EmailSender", src: "../EmailSender.html" },
  //   { name: "FileReader", src: "../FileReader.html" },
  //   { name: "FormValidation", src: "../FormValidation.html" },
  //   { name: "imageCarousel", src: "../imageCarousel.html" },
  // ];

  const cities = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Philadelphia",
    "Phoenix",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
    "Austin",
    "Jacksonville",
    "Fort Worth",
    "Columbus",
    "San Francisco",
    "Charlotte",
    "Indianapolis",
    "Seattle",
    "Denver",
    "Washington",
    "Boston",
    "Nashville",
    "El Paso",
    "Detroit",
    "Memphis",
    "Portland",
    "Oklahoma City",
    "Las Vegas",
    "Louisville",
    "Baltimore",
    "Milwaukee",
    "Albuquerque",
    "Tucson",
    "Fresno",
    "Mesa",
    "Sacramento",
    "Atlanta",
    "Kansas City",
    "Colorado Springs",
    "Miami",
    "Raleigh",
    "Omaha",
    "Long Beach",
    "Virginia Beach",
    "Oakland",
    "Minneapolis",
    "Tulsa",
    "Wichita",
    "New Orleans",
    "Arlington",
    "Tampa",
    "Aurora",
    "Santa Ana",
    "St. Louis",
    "Pittsburgh",
    "Corpus Christi",
    "Riverside",
    "Cincinnati",
    "Lexington",
    "Anchorage",
    "Stockton",
    "Toledo",
    "Saint Paul",
    "Newark",
    "Greensboro",
    "Buffalo",
    "Plano",
    "Lincoln",
    "Henderson",
    "Fort Wayne",
    "Jersey City",
    "Saint Petersburg",
    "Chula Vista",
    "Norfolk",
    "Orlando",
    "Chandler",
    "Laredo",
    "Madison",
    "Winston-Salem",
    "Lubbock",
    "Baton Rouge",
    "Durham",
    "Garland",
    "Glendale",
    "Reno",
    "Hialeah",
    "Chesapeake",
    "Scottsdale",
    "North Las Vegas",
    "Irving",
    "Fremont",
    "Irvine",
    "Birmingham",
    "Rochester",
    "San Bernardino",
    "Spokane",
    "Gilbert",
    "Arlington",
    "Montgomery",
    "Boise",
    "Richmond",
    "Des Moines",
    "Modesto",
    "Fayetteville",
    "Shreveport",
    "Akron",
    "Tacoma",
    "Aurora",
    "Oxnard",
    "Fontana",
    "Yonkers",
    "Augusta",
    "Mobile",
    "Little Rock",
    "Moreno Valley",
    "Glendale",
    "Amarillo",
    "Huntington Beach",
    "Columbus",
    "Grand Rapids",
    "Salt Lake City",
    "Tallahassee",
    "Worcester",
    "Newport News",
    "Huntsville",
    "Knoxville",
    "Providence",
    "Santa Clarita",
    "Grand Prairie",
    "Brownsville",
    "Jackson",
    "Overland Park",
    "Garden Grove",
    "Santa Rosa",
  ];

  const websiteArray = cities.map((city) => {
    return {
      name: city,
      src: city,
    };
  });

  // Ce hoces da se na zacetku vsi pokazejo das vse pod else razen za button
  deleteButton.style.opacity = "0%";
  input.addEventListener("keyup", function (event) {
    let val = event.target.value;
    if (val === "") {
      deleteButton.style.opacity = "0%";
      deleteButton.style.transition = "0.5s";
      output.innerHTML = "";
    } else {
      deleteButton.style.opacity = "100%";
      deleteButton.style.transition = "0.5s";

      var html = "";
      for (let x = 0; x < websiteArray.length; x++) {
        var inputToUpper = input.value.toUpperCase();
        var inputLength = input.value.length;

        var arraySplice = websiteArray[x].name.split("");
        arraySplice = arraySplice.splice(0, inputLength);
        arraySplice = arraySplice.join("");
        arraySplice = arraySplice.toUpperCase();

        if (inputToUpper == arraySplice) {
          html +=
            "<div class='output-div'><i class='fa-solid fa-magnifying-glass'></i>" +
            websiteArray[x].name +
            "</br> <span id='src-span'>" +
            websiteArray[x].src +
            "</span></div>";
        }
        output.innerHTML = html;
      }
      var outputted = document.querySelectorAll(".output-div");
    }
  });

  deleteButton.addEventListener("click", function () {
    input.value = "";
    input.focus();
    output.innerHTML = "";
    deleteButton.style.opacity = "0%";
  });
};
