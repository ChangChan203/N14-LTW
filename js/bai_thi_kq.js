// bài thi
function highlightRow (element, color){
    var temporary;
    temporary=element;
    while (element.tagName.toUpperCase() != 'TR' && element != null)
        element = document.all ? element.parentElement : element.parentNode;
    if (element){ 
        if (temporary.checked)
            element.bgColor = color;
        else
            element.bgColor = '#ffffff'; 
    }
}

let count = 60*5;
let time_lam_bai = count;
const timer = setInterval(function() {
    count--;
    var nguyen = Math.floor(count / 60) 
    document.getElementById("timer").innerHTML = `${nguyen} : ${count%60}`;
    if (count === 0) {
        timeout();
    }
}, 1000);

function timeout(){
    document.getElementById("in").innerHTML="Nộp bài thành công!";
    clearInterval(timer);
    document.getElementById("timer").innerHTML="";
}
//ket qua
    var diem = 0;

    var button_nop_bai = document.getElementById("button_nop_bai")
    var dap_an_1 = document.getElementsByClassName("dapan_1")
    var dap_an_chon = document.getElementsByClassName("dapan_chon") 
    var diem_bai_thi = document.getElementById("diem_bai_thi")
    var Hieu_bai_thi_html = document.getElementById("Hieu_bai_thi_html")
    var Trang_ket_qua_html = document.getElementById("Trang_ket_qua_html")

    var thoi_gian_lam_bai = document.getElementById("thoi_gian_lam_bai")
    var tong_so_cau = document.getElementById("tong_so_cau")
    var so_cau_dung = document.getElementById("so_cau_dung")
    var so_cau_sai = document.getElementById("so_cau_sai")
    var the_link_ket_qua = document.getElementById("the_link_ket_qua")
    var mang_tra_loi = []

    var so_cau_dung_1 = 0;

    button_nop_bai.addEventListener("click",function(){
        for(var i = 0;i < dap_an_chon.length ;i++){
            if(dap_an_chon[i].checked){
                if(dap_an_chon[i].classList.contains("dapan_1")){
                    diem += 2;
                    so_cau_dung_1 +=1;
                }
            }
        }

        the_link_ket_qua.href = "../css/ket_qua.css"

        diem_bai_thi.innerText =`${diem}`
        thoi_gian_lam_bai.innerText = `${Math.floor((time_lam_bai- count) /60)}p : ${(time_lam_bai - count)%60}s`
        tong_so_cau.innerText = `${dap_an_1.length}`
        so_cau_dung.innerText = `${so_cau_dung_1}`
        so_cau_sai.innerText = `${dap_an_1.length - so_cau_dung_1}`
        Hieu_bai_thi_html.style.display = "none"
        Trang_ket_qua_html.style.display = "block"
    })
//
var checkbutton = document.getElementById("checkbutton")
var button_xem_chi_tiet = document.getElementById("button_xem_chi_tiet")

checkbutton.addEventListener("click",function(){
    for(var i = 0;i < dap_an_1.length ;i++){
        dap_an_1[i].type = "checkbox"
        dap_an_1[i].checked = true
    }
    // for(var i = 0;i < dap_an_chon.length ;i++){
    //     dap_an_chon[i].checked = true
    // }

    the_link_ket_qua.href = ""
    Hieu_bai_thi_html.style.display = "block"
    Trang_ket_qua_html.style.display = "none"
    button_nop_bai.style.display = "none"
    button_xem_chi_tiet.style.display = "block"
})

button_xem_chi_tiet.addEventListener("click",function(){
    window.location.href = "../html/trang_chinh.html"
})

var returnbutton = document.getElementById("returnbutton")
returnbutton.addEventListener("click",function(){
    window.location.href = "../html/trang_chinh.html"
})
   
    