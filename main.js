//Bài1
function checkDoiTuong(u) {
  switch (u) {
    case 1:
      diemDT = 2.5;
      break;
    case 2:
      diemDT = 1.5;
      break;
    case 3:
      diemDT = 1;
      break;
    default:
      diemDT = 0;
      break;
  }
}
function checkKhuVuc(z) {
  switch (z) {
    case "A":
      diemKV = 2;
      break;
    case "B":
      diemKV = 1;
      break;
    case "C":
      diemKV = 0.5;
      break;
    default:
      diemKV = 0;
      break;
  }
}
document.getElementById("btnBai1").onclick = function () {
  //Đầu vào
  var diem_1 = document.getElementById("diem1").value * 1;
  var diem_2 = document.getElementById("diem2").value * 1;
  var diem_3 = document.getElementById("diem3").value * 1;
  var khuVuc = document.getElementById("khuVuc").value;
  var doiTuong = document.getElementById("doiTuong").value * 1;
  var diemChuan = document.getElementById("diemChuan").value * 1;
  var ketQua;
  checkKhuVuc(khuVuc);
  checkDoiTuong(doiTuong);
  //Xử lý
  //Tính điểm
  var tongKet = diem_1 + diem_2 + diem_3 + diemDT + diemKV;
  if (tongKet >= diemChuan && diem_1 > 0 && diem_2 > 0 && diem_3 > 0) {
    ketQua = "Thí sinh đã đậu | Tổng điểm: " + tongKet;
  } else {
    ketQua = "Thí sinh đã rớt | Tổng điểm: " + tongKet;
  }
  //Đầu ra
  document.getElementById("footerBai1").innerHTML = ketQua;
};

//Bài 2
const kw_1 = 500;
const kw_2 = 650;
const kw_3 = 850;
const kw_4 = 1100;
const kw_5 = 1300;
var tongTien = 0;
function tinhTienDien(soKw, kw_1, kw_2, kw_3, kw_4, kw_5) {
  if (soKw <= 50) {
    tongTien = soKw * kw_1;
  } else if (soKw <= 100) {
    tongTien = 50 * kw_1 + (soKw - 50) * kw_2;
  } else if (soKw <= 200) {
    tongTien = 50 * (kw_1 + kw_2) + (soKw - 100) * kw_3;
  } else if (soKw <= 350) {
    tongTien = 50 * (kw_1 + kw_2) + 100 * kw_3 + (soKw - 200) * kw_4;
  } else {
    tongTien =
      50 * (kw_1 + kw_2) + 100 * kw_3 + 150 * kw_4 + (soKw - 350) * kw_5;
  }
}
var tienVND = new Intl.NumberFormat("vn-VN");
document.getElementById("btnBai2").onclick = function () {
  var soKw = document.getElementById("soKwDien").value;
  tinhTienDien(soKw, kw_1, kw_2, kw_3, kw_4, kw_5);
  ketQua = "Tổng tiền điện là: " + tienVND.format(tongTien) + " VND";
  document.getElementById("footerBai2").innerHTML = ketQua;
};
