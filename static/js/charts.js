var gender_graph = document.getElementById("gender_graph").getContext("2d");
var age_graph = document.getElementById("age_graph").getContext("2d");
var education_graph = document
  .getElementById("education_graph")
  .getContext("2d");
var employer_graph = document.getElementById("employer_graph").getContext("2d");
var gpa_graph = document.getElementById("gpa_graph").getContext("2d");
// Chart.defaults.plugins.datalabels.anchor = "end";
// Chart.defaults.plugins.datalabels.align = "end";

var genderGraph = new Chart(gender_graph, {
  type: "bar",
  data: {
    labels: ["Before Legislation", "After Legislation"],
    datasets: [
      {
        label: "Female Applicants",
        data: [910838, 1518113],
        backgroundColor: "red",
        borderColor: "red",
        borderWidth: 1,
      },
      {
        label: "Call-backs",
        data: [30571, 42267],
        backgroundColor: "red",
        borderColor: "red",
        borderWidth: 1,
      },
      {
        label: "Male Applicants",
        data: [1550967, 2330333],
        backgroundColor: "blue",
        borderColor: "blue",
        borderWidth: 1,
      },
      {
        label: "Call-backs",
        data: [51715, 70432],
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

var ageGraph = new Chart(age_graph, {
  type: "bar",
  data: {
    labels: ["< 25", "25 - 35", "35 - 50", "> 50"],
    datasets: [
      {
        label: "Applicants before Legislation",
        data: [739680, 165824, 3657, 1670],
        backgroundColor: "pink",
        borderColor: "pink",
        borderWidth: 1,
      },
      {
        label: "Interview call-backs",
        data: [26449, 3950, 127, 45],
        backgroundColor: "pink",
        borderColor: "pink",
        borderWidth: 1,
      },
      {
        label: "Applicants after Legislation",
        data: [1263523, 244032, 2458, 8090],
        backgroundColor: "crimson",
        borderColor: "crimson",
        borderWidth: 1,
      },
      {
        label: "Interview call-back",
        data: [37408, 4627, 49, 183],
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
        data: [718237, 189575, 2669],
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
        data: [1261495, 270740, 5744],
        backgroundColor: "green",
        borderColor: "green",
        borderWidth: 1,
      },
      {
        label: "Interviews call-backs",
        data: [37372, 4841, 53],
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
    labels: ["51 - 200", "201 - 1000", "1001 - 10000", "> 10000"],
    datasets: [
      {
        label: "Applicants before Legislation",
        data: [97674, 40177, 68502, 52823],
        backgroundColor: "lightblue",
        borderColor: "lightblue",
        borderWidth: 1,
      },
      {
        label: "Interview call-backs",
        data: [4790, 1640, 6851, 2719],
        backgroundColor: "lightblue",
        borderColor: "lightblue",
        borderWidth: 1,
      },
      {
        label: "Applicants after Legislation",
        data: [131808, 82528, 80358, 109176],
        backgroundColor: "blue",
        borderColor: "blue",
        borderWidth: 1,
      },
      {
        label: "Interviews call-backs",
        data: [3145, 2963, 4984, 5821],
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
    labels: ["< 5.0", "5.0 - 6.49", "6.5 - 7.9", "8.0 - 10.0"],

    datasets: [
      {
        label: "Applicants before Legislation",
        data: [3337, 175864, 141427, 1707],

        backgroundColor: "tan",
        borderColor: "tan",
        borderWidth: 1,
      },
      {
        label: "Interview call-backs",
        data: [20, 7246, 4811, 10],

        backgroundColor: "tan",
        borderColor: "tan",
        borderWidth: 1,
      },
      {
        label: "Applicants after Legislation",
        data: [2561, 259490, 172720, 7240],

        backgroundColor: "brown",
        borderColor: "brown",
        borderWidth: 1,
      },
      {
        label: "Interview call-backs",
        data: [22, 10827, 6122, 10],
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
