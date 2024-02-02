var age_graph = document.getElementById("age_graph").getContext("2d");
var education_graph = document
  .getElementById("education_graph")
  .getContext("2d");
var role_graph = document.getElementById("role_graph").getContext("2d");
var employer_graph = document.getElementById("employer_graph").getContext("2d");
var gpa_graph = document.getElementById("gpa_graph").getContext("2d");

var ageGraph = new Chart(age_graph, {
  type: "bar",
  data: {
    labels: ["20-30", "30-40", "40-50", "Other"],
    datasets: [
      {
        label: "Interviews before Legislation",
        data: [10, 17, 4, 3],
        backgroundColor: "pink",
        borderColor: "pink",
        borderWidth: 1,
      },
      {
        label: "Interviews after Legislation",
        data: [12, 19, 3, 5],
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
    labels: ["Graduate", "Post Graduate", "Other"],
    datasets: [
      {
        label: "Interviews before Legislation",
        data: [10, 15, 7],
        backgroundColor: "lightgreen",
        borderColor: "lightgreen",
        borderWidth: 1,
      },
      {
        label: "Interviews after Legislation",
        data: [12, 19, 3],
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

var roleGraph = new Chart(role_graph, {
  type: "bar",
  data: {
    labels: [
      "IT Hardware Engineer",
      "IT Mobile Engineer",
      "IT Software Engineer",
    ],
    datasets: [
      {
        label: "Interviews before Legislation",
        data: [10, 12, 3],
        backgroundColor: "lightblue",
        borderColor: "lightblue",
        borderWidth: 1,
      },
      {
        label: "Interviews after Legislation",
        data: [12, 19, 3],
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

var employerGraph = new Chart(employer_graph, {
  type: "bar",
  data: {
    labels: ["51-200", "201-1000", "1001-10000", "> 10000"],
    datasets: [
      {
        label: "Interviews before Legislation",
        data: [12, 19, 3, 5],
        backgroundColor: "pink",
        borderColor: "pink",
        borderWidth: 1,
      },
      {
        label: "Interviews after Legislation",
        data: [2, 15, 5, 7],
        backgroundColor: "purple",
        borderColor: "purple",
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
    labels: ["3.5 - 4.0", "3.0 - 3.5", "2.5 - 3.0", "< 2.5"],
    datasets: [
      {
        label: "Interviews before Legislation",
        data: [9, 12, 3, 4],
        backgroundColor: "tan",
        borderColor: "tan",
        borderWidth: 1,
      },
      {
        label: "Interviews after Legislation",
        data: [12, 19, 3, 5],
        backgroundColor: "brown",
        borderColor: "brown",
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
