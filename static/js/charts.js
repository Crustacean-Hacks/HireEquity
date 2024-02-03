var age_graph = document.getElementById("age_graph").getContext("2d");
var education_graph = document
  .getElementById("education_graph")
  .getContext("2d");
var employer_graph = document.getElementById("employer_graph").getContext("2d");
var gpa_graph = document.getElementById("gpa_graph").getContext("2d");
// Chart.defaults.plugins.datalabels.anchor = "end";
// Chart.defaults.plugins.datalabels.align = "end";

var ageGraph = new Chart(age_graph, {
  type: "bar",
  data: {
    labels: ["< 25", "25 - 35", "35 - 50", "> 50"],
    datasets: [
      {
        label: "Applicants before Legislation",
        data: [1263523, 244032, 2458, 8090],
        backgroundColor: "pink",
        borderColor: "pink",
        borderWidth: 1,
      },
      {
        label: "Interview call-backs",
        data: [5, 8, 2, 1],
        backgroundColor: "pink",
        borderColor: "pink",
        borderWidth: 1,
      },
      {
        label: "Applicants after Legislation",
        data: [739680, 165824, 3657, 1670],
        backgroundColor: "crimson",
        borderColor: "crimson",
        borderWidth: 1,
      },
      {
        label: "Interview call-back",
        data: [6, 8, 2, 2],
        backgroundColor: "crimson",
        borderColor: "crimson",
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      datalabels: {
        color: "gray",
        anchor: "end",
        align: "end",
        // Other datalabels options
      },
    },
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
  plugins: [ChartDataLabels],
});

var educationGraph = new Chart(education_graph, {
  type: "bar",
  data: {
    labels: ["Graduate", "Post Graduate", "Other"],
    datasets: [
      {
        label: "Applicants before Legislation",
        data: [718710, 189585, 2674],
        backgroundColor: "lightgreen",
        borderColor: "lightgreen",
        borderWidth: 1,
      },
      {
        label: "Interview call-backs",
        data: [25901, 4639, 31],
        backgroundColor: "lightgreen",
        borderColor: "lightgreen",
        borderWidth: 1,
      },
      {
        label: "Applicants after Legislation",
        data: [1263003, 250761, 5777],
        backgroundColor: "green",
        borderColor: "green",
        borderWidth: 1,
      },
      {
        label: "Interviews call-backs",
        data: [37393, 4841, 53],
        backgroundColor: "green",
        borderColor: "green",
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      datalabels: {
        color: "gray",
        anchor: "end",
        align: "end",
        // Other datalabels options
      },
    },
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
  plugins: [ChartDataLabels],
});

var employerGraph = new Chart(employer_graph, {
  type: "bar",
  data: {
    labels: ["51-200", "201-1000", "1001-10000", "> 10000"],
    datasets: [
      {
        label: "Applicants before Legislation",
        data: [10, 12, 3, 6],
        backgroundColor: "lightblue",
        borderColor: "lightblue",
        borderWidth: 1,
      },
      {
        label: "Interview call-backs",
        data: [5, 6, 1, 2],
        backgroundColor: "lightblue",
        borderColor: "lightblue",
        borderWidth: 1,
      },
      {
        label: "Applicants after Legislation",
        data: [12, 19, 3, 3],
        backgroundColor: "blue",
        borderColor: "blue",
        borderWidth: 1,
      },
      {
        label: "Interviews call-backs",
        data: [6, 10, 2, 1],
        backgroundColor: "blue",
        borderColor: "blue",
        borderWidth: 1,
      },
    ],
  },

  options: {
    plugins: {
      datalabels: {
        color: "gray",
        anchor: "end",
        align: "end",
        // Other datalabels options
      },
    },
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
  plugins: [ChartDataLabels],
});

var gpaGraph = new Chart(gpa_graph, {
  type: "bar",
  data: {
    labels: ["3.5 - 4.0", "3.0 - 3.5", "2.5 - 3.0", "< 2.5"],
    datasets: [
      {
        label: "Applicants before Legislation",
        data: [9, 12, 3, 4],
        backgroundColor: "tan",
        borderColor: "tan",
        borderWidth: 1,
      },
      {
        label: "Interview call-backs",
        data: [4, 6, 1, 2],
        backgroundColor: "tan",
        borderColor: "tan",
        borderWidth: 1,
      },
      {
        label: "Applicants after Legislation",
        data: [12, 19, 3, 5],
        backgroundColor: "brown",
        borderColor: "brown",
        borderWidth: 1,
      },
      {
        label: "Interview call-backs",
        data: [6, 8, 1, 4],
        backgroundColor: "brown",
        borderColor: "brown",
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      datalabels: {
        color: "gray",
        anchor: "end",
        align: "end",
        // Other datalabels options
      },
    },
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
  plugins: [ChartDataLabels],
});
