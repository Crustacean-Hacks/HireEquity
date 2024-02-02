var age_graph = document.getElementById("age_graph").getContext("2d");
var education_graph = document
  .getElementById("education_graph")
  .getContext("2d");
var employer_graph = document.getElementById("employer_graph").getContext("2d");
var gpa_graph = document.getElementById("gpa_graph").getContext("2d");

var ageGraph = new Chart(age_graph, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "crimson",
        borderColor: "crimson",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      x: {
        ticks: {
          color: "white",
        },
      },
      y: {
        ticks: {
          color: "white",
        },
      },
    },
  },
});

var educationGraph = new Chart(education_graph, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "green",
        borderColor: "green",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      x: {
        ticks: {
          color: "white",
        },
      },
      y: {
        ticks: {
          color: "white",
        },
      },
    },
  },
});

var employerGraph = new Chart(employer_graph, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "blue",
        borderColor: "blue",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      x: {
        ticks: {
          color: "white",
        },
      },
      y: {
        ticks: {
          color: "white",
        },
      },
    },
  },
});

var gpaGraph = new Chart(gpa_graph, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "yellow",
        borderColor: "yellow",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      x: {
        ticks: {
          color: "white",
        },
      },
      y: {
        ticks: {
          color: "white",
        },
      },
    },
  },
});
