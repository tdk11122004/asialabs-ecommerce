// Lắng nghe sự kiện thay đổi trên select box
document.getElementById('asia-package').addEventListener('change', showPackageInfo);

function showPackageInfo() {
    const pkg = document.getElementById('asia-package').value;
    const infoCard = document.getElementById('package-info');
    const name = document.getElementById('pkg-name');
    const desc = document.getElementById('pkg-desc');
    const price = document.getElementById('pkg-price');

    if (pkg === 'tong-quat') {
        name.innerText = 'Gói Khám Tổng Quát Cơ Bản';
        desc.innerText = 'Bao gồm 15 chỉ số chức năng gan, thận, mỡ máu. Lưu ý: Vui lòng nhịn ăn 8 tiếng trước khi lấy mẫu.';
        price.innerText = 'Chi phí dự kiến: 850,000 VNĐ';
        infoCard.style.display = 'block';
    } else if (pkg === 'ung-thu') {
        name.innerText = 'Gói Tầm Soát Ung Thư Nữ';
        desc.innerText = 'Tầm soát các dấu ấn ung thư vú, cổ tử cung, buồng trứng. Không yêu cầu nhịn ăn.';
        price.innerText = 'Chi phí dự kiến: 2,100,000 VNĐ';
        infoCard.style.display = 'block';
    } else if (pkg === 'tieu-duong') {
        name.innerText = 'Gói Kiểm Tra Tiểu Đường';
        desc.innerText = 'Đo đường huyết đói và HbA1c. Lưu ý: Bắt buộc nhịn ăn và lấy máu vào buổi sáng.';
        price.innerText = 'Chi phí dự kiến: 350,000 VNĐ';
        infoCard.style.display = 'block';
    } else {
        infoCard.style.display = 'none';
    }
}