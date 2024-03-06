listnum=[5,2,3,4,5,6,7,8,9,10,11];
var yValues=listnum.slice();


function upd(){
  let diem = document.getElementById("lcdiem").value;
  let gt = parseInt(document.getElementById("gtdiem").value);
  let usl=document.getElementById("udsl").value;
  let utl=document.getElementById("udtl").value;
  document.getElementById("udsl").value = '';
  document.getElementById("udtl").value = '';
  document.getElementById("gtdiem").value = '';
  document.getElementById("lcdiem").value = -1;
  if (diem !== '-1' && !isNaN(gt)) {
    listnum[parseInt(diem)] = gt;
  }
  var yValues = [listnum[0],listnum[1],listnum[2],listnum[3],listnum[4],listnum[5],listnum[6],listnum[7],listnum[8],listnum[9],listnum[10]];
  if(usl!=''){
    document.getElementById("gtsl").innerHTML=`${usl} sinh viên`;
  }
  if(utl!=''){
    document.getElementById("gttl").innerHTML=`${utl} %`;
  }
  var yValues=listnum.slice();
  updateChart(yValues);
}

var xValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9","10"];
        var barColors = ["#55efc4", "#74b9ff", "#6c5ce7", "#fdcb6e", "#d63031", "#fd79a8", "#eccc68", "#8e44ad", "#ff4757", "#5352ed", "#7bed9f"];
        
        new Chart("myChart", {
          type: "bar",
          data: {
            labels: xValues,
            datasets: [{
              backgroundColor: barColors,
              data: yValues
            }]
          },
          options: {
            legend: {display: false},
            title: {
              display: true,
              text: "Thống kê điểm số"
            }
          }
        });




function updateChart(yValues) {
  var xValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9","10"];
        var barColors = ["#55efc4", "#74b9ff", "#6c5ce7", "#fdcb6e", "#d63031", "#fd79a8", "#eccc68", "#8e44ad", "#ff4757", "#5352ed", "#7bed9f"];
        
        new Chart("myChart", {
          type: "bar",
          data: {
            labels: xValues,
            datasets: [{
              backgroundColor: barColors,
              data: yValues
            }]
          },
          options: {
            legend: {display: false},
            title: {
              display: true,
              text: "Thống kê điểm số"
            }
          }
        });
}

window.jsPDF = window.jspdf.jsPDF;
function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      table = document.getElementById("myTable");
      tr = table.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
          td1 = tr[i].getElementsByTagName("td")[1];
          if (td1) {
              txtValue = td1.textContent || td1.innerText || td2.textContent || td2.innerText;
              if (txtValue.toUpperCase().indexOf(filter) > -1) {
                  tr[i].style.display = "";
              } else {
              tr[i].style.display = "none";
              }
          }
    }
}


