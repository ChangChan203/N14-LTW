class Exam {
  constructor(id, name, subject, type, status, creationDate, duration, endDate) {
      this.id = id;
      this.name = name;
      this.subject = subject;
      this.type = type;
      this.status = status;
      this.creationDate = new Date(creationDate);
      this.duration = duration;
      this.endDate = new Date(endDate);
  }
}

class User {
  constructor(tk, email, mk) {
      this.tk = tk;
      this.email = email;
      this.mk = mk;
  }
}

const examsList = [
  new Exam("LT001", "Luyện tập", "Mạng máy tính", "Truy cập tự do", "Bắt đầu", "", 60, ""),
  new Exam("GK001", "Giữa kỳ", "Lập trình với Python", "Yêu cầu thời gian", "Bắt đầu", "2024-07-22", 90, "2024-07-29"),
  new Exam("CK001", "Cuối kỳ", "Mạng máy tính", "Truy cập tự do", "Bắt đầu", "", 80, ""),
  new Exam("LT002", "Luyện tập", "Cơ sở dữ liệu", "Truy cập tự do", "Bắt đầu", "", 30, ""),
  new Exam("LT003", "Luyện tập", "Lý thuyết thông tin", "Truy cập tự do", "Bắt đầu", "", 30, ""),
  new Exam("CK002", "Cuối kỳ", "Cơ sở dữ liệu", "Yêu cầu thời gian", "Đã hết hạn", "2024-07-22", 120, "2024-07-29"),
  new Exam("LT004", "Luyện tập", "Lập trình hướng đối tượng", "Truy cập tự do", "Bắt đầu", "", 20, ""),
  new Exam("GK002", "Giữa kỳ", "Lập trình hướng đối tượng", "Yêu cầu thời gian", "Đã hết hạn", "2024-07-22", 60, "2024-07-29"),
  new Exam("GK003", "Giữa kỳ", "Hệ điều hành", "Yêu cầu thời gian", "Bắt đầu", "2024-07-22", 90, "2024-07-29"),
  new Exam("GK004", "Giữa kỳ", "	Mạng máy tính", "Yêu cầu thời gian", "Bắt đầu", "2024-07-22", 60, "2024-07-29")
]

const UsersList = [
  new User("Cuong217", "Cuong@gmail.com", "123456789"),
  new User("Trang217", "Cuong@gmail.com", "123456789"),
  new User("Chang217", "Cuong@gmail.com", "123456789"),
  new User("Hieu217", "Cuong@gmail.com", "123456789")
]

function formatDate(date) {
  if (isNaN(date.getTime())) {
    return '-- / -- / ----';
  }
  let day = date.getDate();
  let month = date.getMonth() + 1; // getMonth() trả về giá trị từ 0 (tháng 1) đến 11 (tháng 12)
  let year = date.getFullYear();

  // Thêm số 0 vào trước nếu ngày hoặc tháng nhỏ hơn 10
  day = day < 10 ? '0' + day : day;
  month = month < 10 ? '0' + month : month;

  return day + '/' + month + '/' + year;
}

function clearTable() {
  var table = document.getElementById("examsTable");
  var rowCount = table.rows.length;

  for (var i = rowCount - 1; i > 0; i--) {
      table.deleteRow(i);
  }
}

function displayExams(list) {
  clearTable();
  var table = document.getElementById("examsTable");
  var tbody = table.getElementsByTagName("tbody")[0];
  list.forEach((exam) => {
    var row = tbody.insertRow();

    var number = row.insertCell(0);
    number.innerHTML = table.rows.length - 1;

    var id = row.insertCell(1);
    id.className = "cell-id";
    id.textContent = exam.id;
    // id.onclick = function () {
    //     window.location.href = "#link-exam";
    // };

    var name = row.insertCell(2);
    name.className = "cell-name";
    name.textContent = exam.name;
    // name.onclick = function () {
    //     window.location.href = "#link-exam";
    // };

    var subject = row.insertCell(3);
    subject.textContent = exam.subject;

    var type = row.insertCell(4);
    type.textContent = exam.type;

    var creationDate = row.insertCell(5);
    creationDate.textContent = formatDate(exam.creationDate);

    var duration = row.insertCell(6);
    duration.textContent = exam.duration + " phút";

    var endDate = row.insertCell(7);
    endDate.textContent = formatDate(exam.endDate);

      var Edit = row.insertCell(8);
      Edit.innerHTML = `<button id="" class="button_sua_xoa button_sua_dashboah">Sửa</button>
                        <button onclick="xoa_bai_thi_admin(this)" id="" class="button_sua_xoa">Xóa</button>
                        <button onclick="thong_ke(this)" style="position: relative"><i style="position: absolute;top: -25px;" class="fa-solid fa-square-poll-vertical fa-3x"></i></button>`
  });
}

function xoa_bai_thi_admin(element){

  var number = parseInt(element.parentNode.parentNode.innerText.split("\t")[0])
  document.getElementById("examsTable").deleteRow(number)
  chinh_lai_Stt_bai_thi(number)
}

function chinh_lai_Stt_bai_thi(number){
  var table = document.getElementById("examsTable");
  for(var i = number;i<table.rows.length ;i++){
    console.log(i)
    table.rows[i].cells[0].innerText = `${i}`;
  }
}

function removeAccents(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D');
}

function searchExams() {
  var input = removeAccents(document.getElementById("search-box").value.toLowerCase());
  var result = [];
  examsList.forEach((exam) => {
      if (removeAccents(exam.name.toLowerCase()).indexOf(input) > -1) {
          result.push(exam);

      } else if (removeAccents(exam.type.toLowerCase()).indexOf(input) > -1) {
          result.push(exam);
      }
  });
  displayExams(result);
}

document.addEventListener("DOMContentLoaded", function () {
  displayExams(examsList);
});

document.getElementById('search-box').addEventListener('keypress', function (event) {
  if (event.key === "Enter") {
    if(document.getElementById("Admin_ds_bai_thi").style.display == "none"){
      searchUsers();
    }else{
      searchExams();
    }
  }
});

document.getElementById('search-icon').addEventListener('click', function () {
  console.log(document.getElementById("Admin_ds_bai_thi").style.display)
  if(document.getElementById("Admin_ds_bai_thi").style.display == "none"){
      searchUsers();
  }else{
      searchExams();
  }
});

function toggleFilterMenu(element) {
  const menu = document.getElementById(element.id + "-menu");
  menu.classList.toggle("active");
}

function filter(element) {
  toggleFilterMenu(element);
  var elementId = element.id + "-menu";
  var checkboxes = document.querySelectorAll(`#${elementId} .checkbox-option input[type="checkbox"]`);
  var selectedOptions = [];

  checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
          checkbox.checked = false;
          selectedOptions.push(checkbox.name);
      }
  });

  var result = [];

  if (element.id === "filter-name") {
      for (var i = 0; i < examsList.length; i++) {
          var exam = examsList[i];
          for (var j = 0; j < selectedOptions.length; j++) {
              option = selectedOptions[j];
              if (option === exam.name) {
                  result.push(exam);
                  break;
              }
          }
      }
  } else {
      for (var i = 0; i < examsList.length; i++) {
          var exam = examsList[i];
          for (var j = 0; j < selectedOptions.length; j++) {
              option = selectedOptions[j];
              if (option === exam.type) {
                  result.push(exam);
                  break;
              }
          }
      }
  }
  displayExams(result);
}


//admin
var button_ds_kythi = document.getElementById("button_ds_kythi")
var Admin_ds_bai_thi = document.getElementById("Admin_ds_bai_thi")
var Admin_ds_ng_dung = document.getElementById("Admin_ds_ng_dung")

button_ds_kythi.addEventListener("click",function(){
  button_ds_kythi.style.backgroundColor = "rgba(207, 213, 235, 0.486)";
  button_ds_ngdung.style.backgroundColor = "white";
  Admin_ds_bai_thi.style.display = "block"
  Admin_ds_ng_dung.style.display = "none"
})

var button_ds_ngdung = document.getElementById("button_ds_ngdung")
button_ds_ngdung.addEventListener("click",function(){
  button_ds_ngdung.style.backgroundColor = "rgba(207, 213, 235, 0.486)";
  button_ds_kythi.style.backgroundColor = "white";
  Admin_ds_bai_thi.style.display = "none"
  Admin_ds_ng_dung.style.display = "block"
})

document.getElementById("button_them_bai_thi_dashboah").addEventListener("click",function(){
  window.location.href = "../html/edit_exam.html"
})

function thong_ke(element){
  var click_row = element.parentNode.parentNode;
  var table = document.getElementById("examsTable");
  // console.log(click_row.nextElementSibling)
  // console.log(click_row.nextElementSibling.innerText.split("\t")[0])

  if(element.classList.contains("thong_ke")){
    element.classList.toggle("thong_ke")
    for(var i = 0 ;i<table.rows.length ;i++){
      if(table.rows[i] == click_row){
        table.deleteRow(i+1)
        break
      }
    }
  }else{
    var kim = parseInt(click_row.innerText.split("\t")[0])
    console.log(kim)
    element.classList.toggle("thong_ke")
    var new_row = document.createElement("tr")
    var new_cell = document.createElement("td")
    new_cell.colSpan = "8"
    new_cell.innerHTML = `<div>
                              <p style="padding: 6px;" id="so_luot_lam_bai_ds_bai_thi_admin">Số lượt làm bài :</p>
                              <p style="padding: 6px;" id="ty_le_hoan_thanh_ds_bai_thi_admin">Tỷ lệ hoàn thành :</p>
                              <p style="padding: 6px;" id="diem_trung_binh_ds_bai_thi_admin">Điểm trung bình :</p>
                        </div>`
    new_row.appendChild(new_cell)
    click_row.insertAdjacentElement("afterend", new_row)
  }
}

// Ds nguoi dung
function clearTable_User() {
  var table = document.getElementById("usersTable");
  var rowCount = table.rows.length;

  for (var i = rowCount - 1; i > 0; i--) {
      table.deleteRow(i);
  }
}

function displayUsers(list) {
  clearTable_User();
  var table = document.getElementById("usersTable");
  var tbody = table.getElementsByTagName("tbody")[0];
  list.forEach((user) => {
      var row = tbody.insertRow();

      var number = row.insertCell(0);
      number.innerHTML = table.rows.length - 1;

      var ten_tk = row.insertCell(1);
      ten_tk.textContent = user.tk;

      var email = row.insertCell(2);
      email.textContent = user.email;

      var mk = row.insertCell(3);
      mk.textContent = user.mk;

      var Edit = row.insertCell(4);
      Edit.innerHTML = `<button id="" onclick="sua_User_Admin(this)" class="button_sua_admin_ds_ngdung button_sua_xoa">Sửa</button>
                        <button id="" onclick="xoa_User_Admin(this)" class="button_xoa_admin_ds_ngdung button_sua_xoa">Xóa</button>`
  });
}

function searchUsers(){
  var input = removeAccents(document.getElementById("search-box").value.toLowerCase());
  var result_users = [];
  UsersList.forEach((user) => {
      if (removeAccents(user.tk.toLowerCase()).indexOf(input) > -1) {
          result_users.push(user);
      }
  });
  displayUsers(result_users);
}

document.addEventListener("DOMContentLoaded", function () {
  displayUsers(UsersList);
});

function xoa_User_Admin(element){
  document.getElementById("usersTable").deleteRow(parseInt(element.parentNode.parentNode.innerText.split("\t")[0]))
  chinh_lai_Stt(parseInt(element.parentNode.parentNode.innerText.split("\t")[0]))
}

function them_User_Admin(element){

  var table = document.getElementById("usersTable");
  var tbody = table.getElementsByTagName("tbody")[0];

  var tr = element.parentNode.parentNode
  
  var new_row = document.createElement("tr")
  var new_cell = document.createElement("td")
  new_cell.colSpan = "8"
  new_cell.innerHTML = `<div style = "margin : auto ; width: 300px;">
                            <div style=" text-align: left; background-color: white; border: 1px solid darkgray;border-radius: 10px 10px 10px 10px;box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);">
                                <p style="margin :20px 0 2px 20px ;">Tên người dùng:</p>
                                <input style = "padding: 5px 5px 5px 5px;width:250px ;margin :2px 0 2px 20px ;border: 1px solid darkgray;border-radius: 6px 6px 6px 6px;" type="text" name="" placeholder=" Nhiều hơn 8 ký tự "  id="Tk_dang_ky">
                                <p style="margin :2px 0 2px 20px ;">Email</p>
                                <input style = "padding: 5px 5px 5px 5px;width:250px ;margin :2px 0 2px 20px ;border: 1px solid darkgray;border-radius: 6px 6px 6px 6px;" type="text" name="" placeholder="Email" id="Email_dang_ky">
                                <p style="margin :2px 0 2px 20px ;">Mật khẩu</p>
                                <input style = "padding: 5px 5px 5px 5px;width:250px ;margin :2px 0 2px 20px ;border: 1px solid darkgray;border-radius: 6px 6px 6px 6px;" type="password" name="" placeholder="Nhiều hơn 8 ký tự" id="Mk_dang_ky">
                                <p style="margin :2px 0 2px 20px ;">Xác nhận mật khẩu</p>
                                <input style = "padding: 5px 5px 5px 5px;width:250px ;margin :2px 0 2px 20px ;border: 1px solid darkgray;border-radius: 6px 6px 6px 6px;" type="password" name="" placeholder="Nhiều hơn 8 ký tự" id="Mk_dang_ky_xac_nhan">
                                <br>
                                <button class="button_sua_xoa" style = " padding: 7px 10px 7px 10px;margin :10px 0 20px 50px ;cursor: pointer;"> Thêm người dùng </button> 
                                <button onclick="dong_them_user(this)" class="button_sua_xoa" style = " padding: 7px 10px 7px 10px;margin :10px 0 20px 16px ;cursor: pointer;"> Hủy </button> 
                              </div>
                        </div>`
  new_row.appendChild(new_cell)
  tbody.appendChild(new_row)
  document.getElementById("div_button_them_user_dashboah").style.display = "none"
}

function sua_User_Admin(element){
  var click_row = element.parentNode.parentNode;
  if(element.classList.contains("sua_user")){
    element.classList.toggle("sua_user")
    dong_sua_user(document.getElementById("dong_sua_usser"))
  }else{
    element.classList.toggle("sua_user")
    var new_row = document.createElement("tr")
    var new_cell = document.createElement("td")
    new_cell.colSpan = "8"
    new_cell.innerHTML = `<div style = "margin : auto ; width: 300px;">
                              <div style=" text-align: left; background-color: white; border: 1px solid darkgray;border-radius: 10px 10px 10px 10px;box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);">
                                  <p style="margin :20px 0 2px 20px ;">Tên người dùng:</p>
                                  <input style = "padding: 5px 5px 5px 5px;width:250px ;margin :2px 0 2px 20px ;border: 1px solid darkgray;border-radius: 6px 6px 6px 6px;" type="text" name="" placeholder= ${click_row.innerText.split("\t")[1]}  id="Tk_dang_ky">
                                  <p style="margin :2px 0 2px 20px ;">Email</p>
                                  <input style = "padding: 5px 5px 5px 5px;width:250px ;margin :2px 0 2px 20px ;border: 1px solid darkgray;border-radius: 6px 6px 6px 6px;" type="text" name="" placeholder=${click_row.innerText.split("\t")[2]} id="Email_dang_ky">
                                  <p style="margin :2px 0 2px 20px ;">Mật khẩu</p>
                                  <input style = "padding: 5px 5px 5px 5px;width:250px ;margin :2px 0 2px 20px ;border: 1px solid darkgray;border-radius: 6px 6px 6px 6px;" type="password" name="" placeholder=${click_row.innerText.split("\t")[3]} id="Mk_dang_ky">
                                  <p style="margin :2px 0 2px 20px ;">Xác nhận mật khẩu</p>
                                  <input style = "padding: 5px 5px 5px 5px;width:250px ;margin :2px 0 2px 20px ;border: 1px solid darkgray;border-radius: 6px 6px 6px 6px;" type="password" name="" placeholder=${click_row.innerText.split("\t")[3]} id="Mk_dang_ky_xac_nhan">
                                  <br>
                                  <button class="button_sua_xoa" style = " padding: 7px 10px 7px 10px;margin :10px 0 20px 90px ;cursor: pointer;"> Sửa </button> 
                                  <button id= "dong_sua_usser" onclick="dong_sua_user(this)" class="button_sua_xoa" style = " padding: 7px 10px 7px 10px;margin :10px 0 20px 16px ;cursor: pointer;"> Hủy </button> 
                                </div>
                          </div>`
    new_row.appendChild(new_cell)
    click_row.insertAdjacentElement("afterend", new_row)
  }
}

function dong_them_user(element){
  var table = document.getElementById("usersTable");
  table.deleteRow(table.rows.length-1)
  document.getElementById("div_button_them_user_dashboah").style.display = "block"
}

function dong_sua_user(element){
  var table = document.getElementById("usersTable");
  for(var i =0 ;i<table.rows.length ;i++){
    if(table.rows[i] == element.parentNode.parentNode.parentNode.parentNode){
      table.deleteRow(i)
      break
    }
  }
}

function chinh_lai_Stt(number){
  var table = document.getElementById("usersTable");
  for(var i = number;i<table.rows.length ;i++){
    table.rows[i].cells[0].innerText = `${i}`;
  }
}

function logout() {
  window.location.href = "../html/login.html";
}
