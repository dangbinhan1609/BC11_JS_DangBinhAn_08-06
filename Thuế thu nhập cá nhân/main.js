//Thuế suất
const muc1 = 0.05;//1-60Tr
const muc2 = 0.1;//61-120Tr
const muc3 = 0.15;//121-216Tr
const muc4 = 0.2;//217-384Tr
const muc5 = 0.25;//385-624Tr
const muc6 = 0.3;//625-960Tr
const muc7 = 0.35;//>960Tr
var TTN = 0;

document.getElementById("btnTienThue").onclick = function (event) {
    event.preventDefault();
    var hoTen = document.getElementById("txtHoTen").value;
    var thuNhap = document.getElementById("txtThuNhap").value;
    var soNguoi = document.getElementById("txtNguoi").value;
    var KQ = 0;
    KQ = thuNhap - 4 - (soNguoi * 1.6);
    //Biến KQ là thu nhập chịu thuế

    if (KQ < 0) {
        alert("Nhập Tổng Thu Nhập!");
    } else if (KQ <= 60) {
        TTN = KQ * muc1;
    } else if (KQ <= 120) {
        TTN = (60 * muc1) + (KQ - 60) * muc2;
    } else if (KQ <= 216) {
        TTN = (60 * muc1) + (60 * muc2) + ((KQ - 120) * muc3);
    } else if (KQ <= 384) {
        TTN = (60 * muc1) + (60 * muc2) + (120 * muc3) + ((KQ - 240) * muc4);
    } else if (KQ <= 624) {
        TTN = (60 * muc1) + (60 * muc2) + (120 * muc3) + (240 * muc4) + ((KQ - 480) * muc5);
    } else if (KQ <= 960) {
        TTN = (60 * muc1) + (60 * muc2) + (120 * muc3) + (240 * muc4) + (480 * muc5) + ((KQ - 960) * muc6);

    } else if (KQ > 960) {
        TTN = (60 * muc1) + (60 * muc2) + (120 * muc3) + (240 * muc4) + (480 * muc5) + (960 * muc6) + ((KQ - 1920) * muc7);
    }
    document.getElementById("divTienThue").innerHTML = "Tổng thu nhập chịu thuế là: " + TTN + "Triệu Đồng";
}


