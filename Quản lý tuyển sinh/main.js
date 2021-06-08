//Khu Vực
const khuVucA = 2;
const khuVucB = 1;
const khuVucC = 0.5;
//Đối Tượng
const doiTuong1 = 2.5;
const doiTuong2 = 1.5;
const doiTuong3 = 1;

var UuTien1 = 0;
var UuTien2 = 0;
var UuTien3 = 0;
var tongKet = 0;

document.getElementById("btnTongKet").onclick = function (event) {
    event.preventDefault();

    var diemToan = document.getElementById("txtToan").value;
    var diemHoa = document.getElementById("txtHoa").value;
    var diemLy = document.getElementById("txtLy").value;
    var khuVuc = chonKhuVuc();
    var In = "";
    if (!khuVuc) {
        alert("Vui lòng chọn khu vực ưu tiên");
        return;
    }

    switch (khuVuc) {
        case "khuVucA":
            // TongKet(diemToan, diemHoa, diemLy, khuVucA, doiTuong1);
            tongKet = parseFloat(diemToan) + parseFloat(diemHoa) + parseFloat(diemLy) + (khuVucA + doiTuong1);

            break;

        case "khuVucB":
            // TongKet(diemToan, diemHoa, diemLy, khuVucB, doiTuong2);
            tongKet = parseFloat(diemToan) + parseFloat(diemHoa) + parseFloat(diemLy) + (khuVucB + doiTuong2);

            break;

        case "khuVucC":
            // TongKet(diemToan, diemHoa, diemLy, khuVucC, doiTuong3);
            tongKet = parseFloat(diemToan) + parseFloat(diemHoa) + parseFloat(diemLy) + (khuVucC + doiTuong3);

            break;

        case "khuVucX":
            // TongKet(diemToan, diemHoa, diemLy);
            tongKet = parseFloat(diemToan) + parseFloat(diemHoa) + parseFloat(diemLy);

            break;

        default:
            break;
    }

    document.getElementById("divTongKet").innerHTML = tongKet;
};
document.getElementById("btnXepLoai").onclick = function (event) {
    event.preventDefault();
    var diemChuan = document.getElementById("txtDiemChuan").value;
    var In = "";
    if (tongKet >= diemChuan) {
        In = "Học Sinh Đậu";
    } else {
        In = "Học Sinh Không Đậu";
    }
    document.getElementById("divXepLoai").innerHTML = In;
}

function chonKhuVuc() {
    var radioKhuVucA = document.getElementById("khuVucA");
    var radioKhuVucB = document.getElementById("khuVucB");
    var radioKhuVucC = document.getElementById("khuVucC");
    var radioKhuVucX = document.getElementById("khuVucX");
    if (radioKhuVucA.checked) {
        return "khuVucA";
    }
    if (radioKhuVucB.checked) {
        return "khuVucB";
    }
    if (radioKhuVucC.checked) {
        return "khuVucC";
    }
    if (radioKhuVucX.checked) {
        return "khuVucX";
    }
    return null;
}
