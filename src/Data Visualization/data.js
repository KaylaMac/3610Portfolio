var c= document.getElementById("myCanvas");
var ctx= c.getContext("2d");

const barChart= new Chart(ctx,{
  type: "bar",
  data: {
    labels: ['District 01', 'District 02', 'District 03', 'District 04', 'District 05', 'District 06', 'District 07', 'District 08', 'District 09', 'District 10'],
     datasets: [{
       label: "Enrollment",
       data: [12367,60823,21962,14252,13170,25733,19717,31625,34518,56757
],
       backgroundColor: [
                'rgba(255, 110, 142, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(245, 226, 106, 0.4)',
                'rgba(75, 192, 192, 0.4)',
                'rgba(153, 102, 255, 0.4)',
                'rgba(255, 159, 64, 0.4)'
            ]
     }]
  },
   
  options:{
    plugins:{
      title:{
       display:true,
       text: "Kayla McIntosh"
     },
      subtitle:{
       display:true,
       text: "School Enrollment Statistics by District"
      }
    }
  }
});


var d= document.getElementById("canvasTwo");
var ctx2= d.getContext("2d");
const doughChart= new Chart(ctx2,{
  type: "doughnut",
  data: {
    labels: ['District 01', 'District 02', 'District 03', 'District 04', 'District 05', 'District 06', 'District 07', 'District 08', 'District 09', 'District 10'],
     datasets: [{
       label: "Enrollment",
       data: [12367,60823,21962,14252,13170,25733,19717,31625,34518,56757
],
       backgroundColor: [
                'rgba(255, 110, 142, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(245, 226, 106, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ]
     }]
  },
   
  options:{
    plugins:{
      title:{
       display:true,
       text: "Kayla McIntosh"
     },
      subtitle:{
        display:true,
        text: "School Enrollment Statistics by District"
      }
    }
  }
});
