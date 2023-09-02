//--------------bài 1---------------

var Ket_qua = "";

function tinhDiem() {
  var diemChuan = document.getElementById("diemChuan").value * 1;
  var diem_1 = document.getElementById("diem_1").value * 1;
  var diem_2 = document.getElementById("diem_2").value * 1;
  var diem_3 = document.getElementById("diem_3").value * 1;
  var khuVuc = document.getElementById("slcKhuVuc").value;

  var doiTuong = document.getElementById("slcDoiTuong").value;

  switch (khuVuc) {
    case "A":
      khuVuc = 2;
      break;
    case "B":
      khuVuc = 1.5;
      break;
    case "C":
      khuVuc = 1;
      break;
    default:
      khuVuc = 0;
      break;
  }

  switch (doiTuong) {
    case "1":
      doiTuong = 2.5;
      break;
    case "2":
      doiTuong = 1.5;
      break;
    case "3":
      doiTuong = 1;
      break;
    default:
      doiTuong = 0;
      break;
  }

  var tong = diem_1 + diem_2 + diem_3 + khuVuc + doiTuong;

  if (diem_1 == 0 || diem_2 == 0 || diem_3 == 0) {
    Ket_qua = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
  } else if (tong >= diemChuan) {
    Ket_qua = "Bạn đã đậu. Tổng điểm: " + tong;
  } else if (tong < diemChuan) {
    Ket_qua = "Bạn đã rớt. Tổng điểm: " + tong;
  }
  document.getElementById("xuatDiem").style.display = "block";
  document.getElementById("noti").innerHTML = Ket_qua;
}

//------------ bai 2-----------------------

var tongTien = 0;
var content = "";

var tienKw_1 = 0;
var tienKw_2 = 0;
var tienKw_3 = 0;
vartienKw_4 = 0;
var tienKw_5 = 0;

function tienDienKw_1(soKw) {
  return soKw * 500;
}

function tienDienKw_2(soKw) {
  return (soKw - 50) * 650;
}

function tienDienKw_3(soKw) {
  return (soKw - 100) * 850;
}

function tienDienKw_4(soKw) {
  return (soKw - 200) * 1100;
}

function tienDienKw_5(soKw) {
  return (soKw - 350) * 1300;
}

function tinhTienDien(soKw) {
  if (0 <= soKw && soKw <= 50) {
    tienKw_1 = tienDienKw_1(soKw);

    tongTien = tienKw_1;
  } else if (50 < soKw && soKw <= 100) {
    tienKw_1 = tienDienKw_1(50);
    tienKw_2 = tienDienKw_2(soKw);

    tongTien = tienKw_1 + tienKw_2;
  } else if (100 < soKw && soKw <= 200) {
    tienKw_1 = tienDienKw_1(50);
    tienKw_2 = tienDienKw_2(100);
    tienKw_3 = tienDienKw_3(soKw);

    tongTien = tienKw_1 + tienKw_2 + tienKw_3;
  } else if (200 < soKw && soKw <= 350) {
    tienKw_1 = tienDienKw_1(50);
    tienKw_2 = tienDienKw_2(100);
    tienKw_3 = tienDienKw_3(200);
    tienKw_4 = tienDienKw_4(soKw);

    tongTien = tienKw_1 + tienKw_2 + tienKw_3 + tienKw_4;
  } else if (350 < soKw) {
    tienKw_1 = tienDienKw_1(50);
    tienKw_2 = tienDienKw_2(100);
    tienKw_3 = tienDienKw_3(200);
    tienKw_4 = tienDienKw_4(350);
    tienKw_5 = tienDienKw_5(soKw);

    tongTien = tienKw_1 + tienKw_2 + tienKw_3 + tienKw_4 + tienKw_5;
  } else {
    alert("Số kw không hợp lệ! Vui lòng nhập lại");
  }
}

function tienDien() {
  var tenKhach = document.getElementById("tenKhach").value;
  var soKw = document.getElementById("soKw").value;

  tinhTienDien(soKw);
  content = "<p>Họ tên: " + tenKhach + "; Tiền điện: " + tongTien + "</p>";

  document.getElementById("thanhTien").style.display = "block";
  document.getElementById("xuat").innerHTML = content;
}

//--------------bài 3-----------------------

var tongThue = 0;
var thuNhapChiuThue = 0;
var nhacThue = "";

function thueChung(tongThuNhap, soPhuThuoc) {
  var tienThueGoc = tongThuNhap - 4e6 - soPhuThuoc * 1.6e6;
  return tienThueGoc;
}

function thuePhaiDong(tongThuNhap, soPhuThuoc) {
  thuNhapChiuThue = thueChung(tongThuNhap, soPhuThuoc);

  if (0 <= thuNhapChiuThue && thuNhapChiuThue <= 60e6) {
    tongThue = thuNhapChiuThue * 0.05;
  } else if (60e6 < thuNhapChiuThue && thuNhapChiuThue <= 120e6) {
    tongThue = thuNhapChiuThue * 0.1;
  } else if (120e6 < thuNhapChiuThue && thuNhapChiuThue <= 210e6) {
    tongThue = thuNhapChiuThue * 0.15;
  } else if (210e6 < thuNhapChiuThue && thuNhapChiuThue <= 384e6) {
    tongThue = thuNhapChiuThue * 0.2;
  } else if (384e6 < thuNhapChiuThue && thuNhapChiuThue <= 624e6) {
    tongThue = thuNhapChiuThue * 0.25;
  } else if (624e6 < thuNhapChiuThue && thuNhapChiuThue <= 960e6) {
    tongThue = thuNhapChiuThue * 0.3;
  } else if (960e6 < thuNhapChiuThue) {
    tongThue = thuNhapChiuThue * 0.35;
  } else {
    alert("Số tiền thu nhập không hợp lệ");
  }
}

function tienThue() {
  var hoTen = document.getElementById("hoTen").value;
  var tongThuNhap = document.getElementById("tongThuNhap").value * 1;
  var soPhuThuoc = document.getElementById("soPhuThuoc").value * 1;

  nhacThue = thuePhaiDong(tongThuNhap, soPhuThuoc);

  "<p>Họ tên: " +
    hoTen +
    "; Tiền thuế thu nhập cá nhân: " +
    Intl.NumberFormat("de-DE").format(tongThue) +
    " VND</p>";

  document.getElementById("thanhToan").style.display = "block";
  document.getElementById("thongBao").innerHTML = nhacThue;
}

//--------------bai 4----------

//nhà dân
USER_HOADON = 4.5;
USER_DICHVU = 20.5;
USER_KENHCAOCAP = 7.5;

//DOANH NGHIEP
COMPANY_HOADON = 15;
COMPANY_DICHVU = 75;
COMPANY_KENHCAOCAP = 50;

noiDung = "";
tinhTien = 0;

function sum(hoaDon, dichVu, kenhCaoCap, soKenh) {
  var tienCanTra = hoaDon + dichVu + kenhCaoCap * soKenh;
  return tienCanTra;
}

function dichVuCompany(soKetNoi) {
  var result = 0;
  if (soKetNoi >= 10) {
    var soKetNoiThem = soKetNoi - 10;
    result = soKetNoiThem * 5;
  }
  return result;
}

function tinhChiTiet(soKenh, loaiKH, soKetNoi) {
  if ((loaiKH = "user")) {
    tinhTien = sum(USER_HOADON, USER_DICHVU, USER_KENHCAOCAP, soKenh);
  } else if ((loaiKH = "company")) {
    tinhTien =
      sum(COMPANY_HOADON, COMPANY_DICHVU, COMPANY_KENHCAOCAP, 10) +
      dichVuCompany(soKetNoi);
  } else {
    alert("Hãy chọn loại khách hàng");
  }
}

function tienCap() {
  var loaiKH = document.getElementById("loaiKH").value;
  var codeKH = document.getElementById("codeKH").value;
  var soKenh = document.getElementById("soKenh").value * 1;
  var soKetNoi = document.getElementById("soKetNoi").value * 1;

  tinhChiTiet(soKenh, loaiKH, soKetNoi);

  noiDung =
    "<p>Mã khách hàng: " +
    codeKH +
    "; Tiền cáp: $" +
    Intl.NumberFormat("de-DE").format(tinhTien) +
    "</p>";

  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("outPut").innerHTML = noiDung;
}

function handleShow() {
  var loaiKH = document.getElementById("loaiKH").value;
  var soKetNoi = document.getElementById("soKetNoi");
  switch (loaiKH) {
    case "user":
      soKetNoi.disabled = true;
      break;
    case "company":
      soKetNoi.disabled = false;
      break;
    default:
      alert("Hãy chọn loại khách hàng");
      break;
  }
}
