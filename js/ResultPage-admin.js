// Quay lại màn hình chính
var returnbutton = document.getElementById("returnButton");
returnbutton.onclick = function(){
    window.location.href = "../html/admin.html"; 
}

function searchStudent() {

    var searchText = document.getElementById("searchText").value;

    //Giả thiết 1 sinh viên
    var studentResults = [
        {
            name: "Phạm Thu Trang",
            msv: "B21DCCN719",
            exams: [
                {
                    name: "Lập trình Web",
                    mark: 9.0,
                    status: "Hoàn thành",
                    time: "29/02/2024",
                    details: {
                        answers: ["A", "B", "C", "D"],
                        correctAnswers: ["A", "C", "B", "D"],
                        explanations: ["//Giải thích", "//Giải thích", "//Giải thích", "//Giải thích"]
                    }
                },
                {
                    name: "Cơ sở dữ liệu",
                    mark: 8.5,
                    status: "Hoàn thành",
                    time: "29/02/2024",
                    details:{
                        answers: ["A", "B", "C", "D"],
                        correctAnswers: ["A", "C", "B", "D"],
                        explanations: ["//Giải thích", "//Giải thích", "//Giải thích", "//Giải thích"]
                    }
                }
            ]
        }
    ];

    // Hiển thị kết quả
    var studentResultsDiv = document.getElementById("studentResults");
    studentResultsDiv.innerHTML = "";

    studentResults.forEach(function(student) {
        if (student.name === searchText || student.msv === searchText){
            student.exams.forEach(function(exam) {
                var examHTML = '<div class = "student-result">';
                examHTML += '<h2>Bài thi: ' + exam.name + '</h2>';
                examHTML += '<p>Điểm số: ' + exam.mark + '</p>';
                examHTML += '<p>Trạng thái: ' + exam.status + '</p>';
                examHTML += '<p>Thời gian: ' + exam.time + '</p>';
                examHTML += '</div>';
                studentResultsDiv.innerHTML += examHTML;

                // Hiển thị chi tiết bài thi hoặc ẩn bài thi
                var detailButton = document.createElement("button");
                detailButton.id = "detailButton";
                detailButton.textContent = "Xem chi tiết bài thi";
                detailButton.onclick = function(){
                    showResultDetails(exam, studentResultsDiv);
                }                
                studentResultsDiv.appendChild(detailButton);

            });
        }
        else {
            studentResultsDiv.innerHTML += '<p>Không có dữ liệu sinh viên.</p>';
        }
    });
}

// Hiển thị chi tiết bài thi
function showResultDetails(exam, studentResultsDiv){
    var detailHTML = '<div class = "result-detail">';
    detailHTML += '<h3>Câu Trả Lời</h3>';
    detailHTML += '<ul>';
    for (var i = 0; i < exam.details.answers.length; i++) {
        detailHTML += '<li >Câu ' + (i + 1) + ': ' + exam.details.answers[i] + '</li>';
    }
    detailHTML += '</ul>';
    detailHTML += '<h3><em>Giải Thích</h3></em>';
    detailHTML += '<ul>';
    for (var j = 0; j < exam.details.explanations.length; j++) {
        detailHTML += '<li>Câu ' + (j + 1) + ': ' + exam.details.explanations[j] + '</li>';
    }
    detailHTML += '</ul>';
    detailHTML += '</div>'; 
    studentResultsDiv.innerHTML += detailHTML;
}

// Hiển thị báo cáo
function exportResults() {
    alert("No Export");
}