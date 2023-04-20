
/**
 * Hiện và ẩn popup employee details
 * Author: LeDucTiep (19-04-2023)
 */
var employeeDetailToggle = () => {
    let element = document.getElementsByClassName("popup")[0].parentElement;
    if (element.style.display == 'block') {
        element.style.display = 'none';
    } else {
        element.style.display = 'block';
        // focus vào ô input đầu tiên
        document.querySelector(".popup input").focus();
    }
}

/**
 * Những trường input không đúng định dạnh sẽ chuyển thành màu đỏ
 * @returns true: Nếu có thẻ input không hợp lệ
 * Author: LeDucTiep (19-04-2023)
 */
var showInvalidInput = () => {
    // Lấy các thẻ input hợp lệ
    let inputTags = document.querySelectorAll('input:valid');
    // Xóa hiệu ứng viền đỏ cho các input hợp lệ
    for (const inputTag of inputTags) {
        inputTag.classList.remove("input__text-field--invalid");
    }
    // Lấy các thẻ input không hợp lệ
    inputTags = document.querySelectorAll('input:invalid');
    // Focus vào phần tử input đầu tiên không hợp lệ
    inputTags[0].focus();
    // Hiển thị viền màu đỏ cho các thẻ input đó
    for (const inputTag of inputTags) {
        inputTag.classList.add("input__text-field--invalid");
    }
    // Trả về true nếu vẫn còn input không hợp lệ
    return inputTags.length > 0;
}

// Hàm này thực hiện thi trang được tải xong
window.onload = () => {
    // Tìm đến các nút Sửa trong table
    let editButtons = document.querySelectorAll(".table button.link-button");
    // Duyệt qua các nút Sửa và gán onClick cho chúng
    for (let index = 0; index < editButtons.length; index++) {
        editButtons[index].addEventListener("click", employeeDetailToggle)
    }

    // Gán sự kiện hiển thị popup employee detail cho nút "Thêm mới nhân viên"
    document.querySelector("div.content__head > button.main-button").onclick = employeeDetailToggle;

    // Gán sự kiện thoát cho dấu X của popup employee details
    document.querySelector("div.popup__header > div.icon-container")
        .addEventListener("click", employeeDetailToggle);

    // Gán sự kiện thoát cho nút Hủy của popup employee details
    document.getElementById("cancel").addEventListener("click", employeeDetailToggle);

    // Thêm sự kiện hiển thị các ô input không hợp lệ cho nút Cất
    document.getElementById("save").addEventListener("click", () => {
        let hasInvalidInput = showInvalidInput();
        if (!hasInvalidInput) {
            employeeDetailToggle();
        }
    });

    // Thêm sự kiện hiển thị các ô input không hợp lệ cho nút "Cất và thêm"
    document.getElementById("save-and-add").addEventListener("click", showInvalidInput);
}
