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

function formatDate(date) {
    if (isNaN(date.getTime())) {
        return '-- / -- / ----';
    } else {
        let day = date.getDate();
        let month = date.getMonth() + 1; // getMonth() trả về giá trị từ 0 (tháng 1) đến 11 (tháng 12)
        let year = date.getFullYear();

        // Thêm số 0 vào trước nếu ngày hoặc tháng nhỏ hơn 10
        day = day < 10 ? '0' + day : day;
        month = month < 10 ? '0' + month : month;

        return day + '/' + month + '/' + year;
    }
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

        var status = row.insertCell(8);
        if (exam.status === "Bắt đầu") {
            var btn = document.createElement("button");
            btn.textContent = exam.status;
            btn.className = "start-btn";
            btn.onclick = function () {
                window.location.href = "../html/bai_thi.html";
            }
            status.appendChild(btn);
        } else {
            status.textContent = exam.status;
        }
    });
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
        searchExams();
    }
});

document.getElementById('search-icon').addEventListener('click', function () {
    searchExams();
});

function toggleFilterMenu(element) {
    const menu = document.getElementById(element.id + "-menu");
    menu.classList.toggle("active");
}

// document.addEventListener("click", function(event) {
//     const menu = document.getElementById("filter-menu active");
//     const targetElement = event.target;

//     // Kiểm tra nếu click bên ngoài menu và menu đang hiển thị
//     if (!menu.contains(targetElement) && menu.classList.contains("active")) {
//       menu.classList.remove("active"); // Ẩn menu
//     }
// });

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

function logout() {
    window.location.href = "../html/login.html";
}
