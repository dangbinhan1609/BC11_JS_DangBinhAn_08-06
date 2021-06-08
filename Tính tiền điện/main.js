//
const muc1 = 500;//50kW đầu
const muc2 = 650;//50kW kế - 51 _ 100kW
const muc3 = 850;// 100kW kế - 101_200kW
const muc4 = 1100;//150kW kế - 201_350kW
const muc5 = 1300;//350kW trở lên



document.getElementById("btnTienDien").onclick = function (event) {
    event.preventDefault();
    var ten = document.getElementById("txtTen").value;
    var soKw = document.getElementById("soKw").value;
    var tienDien = 0;
    Number(soKw);
    if (soKw < 0) {
        alert("Vui lòng nhập số điện");
    } else if (soKw <= 50) {
        tienDien = soKw * muc1;
    } else if (soKw <= 100) {
        tienDien = (50 * muc1) + ((soKw - 50) * muc2);
    } else if (soKw <= 200) {
        tienDien = (50 * muc1) + (50 * muc2) + ((soKw - 100) * muc3);
    } else if (soKw <= 350) {
        tienDien = (50 * muc1) + (50 * muc2) + (100 * muc3) + ((soKw - 150) * muc4);
    } else if (soKw > 351) {
        tienDien = (50 * muc1) + (50 * muc2) + (100 * muc3) + (150 * muc4) + ((soKw - 350) * muc5);
    }
    document.getElementById("divTienDien").innerHTML = "Tổng tiền điện tiêu thụ là: " + tienDien + "VNĐ";
}