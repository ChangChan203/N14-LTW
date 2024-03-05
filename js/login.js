var Dang_ky = document.getElementById("Dang_ky")
var Dang_nhap = document.getElementById("Dang_nhap")

var div_1 = document.getElementById("div_1")
var div_2 = document.getElementById("div_2")


Dang_ky.addEventListener("click",function(){
  if(div_1.style.display == "none"){
    div_1.style.display = "block"
  }else{
    div_1.style.display = "none"
  }

  if(div_2.style.display == "block"){
    div_2.style.display = "none"
  }else{
    div_2.style.display = "block"
  }
})

Dang_nhap.addEventListener("click",function(){
  if(div_1.style.display == "block"){
    div_1.style.display = "none"
  }else{
    div_1.style.display = "block"
  }

  if(div_2.style.display == "none"){
    div_2.style.display = "block"
  }else{
    div_2.style.display = "none"
  }
})

class NguoiDung{
  constructor(Tk, Mk) {
    this.Tk = Tk;
    this.Mk = Mk;
  }
}

class Admin{
  constructor(Tk, Mk) {
    this.Tk = Tk;
    this.Mk = Mk;
  }
}

const admin1 = new Admin("Cuong243", 123456789);
const admin2 = new Admin("Cuong243", 123456789);
const admin3 = new Admin("Cuong243", 123456789);
const admin4 = new Admin("Cuong243", 123456789);
var mangAdmin = [admin1 ,admin2,admin3,admin4 ]

const nguoi1 = new NguoiDung("Cuong217", 123456789);
const nguoi2 = new NguoiDung("Cuong217", 123456789);
const nguoi3 = new NguoiDung("Cuong217", 123456789);
const nguoi4 = new NguoiDung("Cuong217", 123456789);
var mangNguoiDung = [nguoi1 , nguoi2 , nguoi3 ,nguoi4]

var Dang_nhap_1 = document.getElementById("Dang_nhap_1")
var Tk_dang_nhap = document.getElementById("Tk_dang_nhap")
var Mk_dang_nhap = document.getElementById("Mk_dang_nhap")
var Dang_ky_1 = document.getElementById("Dang_ky_1")
var thong_bao_login = document.getElementById("thong_bao_login")

Dang_nhap_1.addEventListener("click",function(){
  console.log(Tk_dang_nhap.value)
  var ok = 0;
  for(var i =0;i<mangNguoiDung.length ;i++){
    if(mangNguoiDung[i].Tk == Tk_dang_nhap.value){
      if(mangNguoiDung[i].Mk == Mk_dang_nhap.value){
        window.location.href = "../html/trang_chinh.html";
        ok=1 ;
        break ;
      }else{
        thong_bao_login.innerText = "Sai mk"
        ok = 1
        break ;
      }
    }
  }

  for(var i =0;i<mangAdmin.length ;i++){
    if(mangAdmin[i].Tk == Tk_dang_nhap.value){
      if(mangAdmin[i].Mk == Mk_dang_nhap.value){
        window.location.href = "../html/admin.html";
        ok = 1 ;
      }else{
        thong_bao_login.innerText = "Sai mk"
        ok = 1
        break ;
      }
    }
  }
  if(ok == 0){
    thong_bao_login.innerText = "Tên đăng nhập ko tồn tại"
  }
})

var Tk_dang_ky = document.getElementById("Tk_dang_ky")
var Email_dang_ky = document.getElementById("Email_dang_ky")
var Mk_dang_ky = document.getElementById("Mk_dang_ky")
var Mk_dang_ky_xac_nhan = document.getElementById("Mk_dang_ky_xac_nhan")
var thong_bao_signin = document.getElementById("thong_bao_signin")

Dang_ky_1.addEventListener("click",function(){
  var ok = 1;
  
  if(Tk_dang_ky.value.length < 8){
    thong_bao_signin.innerText = "Độ dài Tk không đủ 8 ký tự"
      ok = 0;
  }
  for(var i =0;i<mangNguoiDung.length ;i++){
    if(mangNguoiDung[i].Tk == Tk_dang_ky.value){
      thong_bao_signin.innerText = "Tk đã tồn tại"
      ok = 0;
      break ;
    }
  }

  if(Mk_dang_ky.value != Mk_dang_ky_xac_nhan.value){
    thong_bao_signin.innerText = "Mk k khớp"
    ok = 0;
  }
  
  if(Mk_dang_ky.value.length < 8){
    thong_bao_signin.innerText = "Độ dài MK không đủ 8 ký tự"
    ok = 0;
  }
  if(ok == 1){
    mangNguoiDung.push(new NguoiDung(Tk_dang_ky.value ,Mk_dang_ky.value ))
    window.location.href = "../html/trang_chinh.html";
  }

})