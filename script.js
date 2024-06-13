const emailInput = document.getElementById("email");
const submitBtn = document.getElementById("submit");
const errorMsg = document.getElementById("error");
const infoContainer = document.querySelector(".info-container");

submitBtn.addEventListener("click", function () {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const email = emailInput.value;

  if (regex.test(email)) {
    // Hiển thị thông tin cá nhân
    infoContainer.classList.remove("hide");
    // Ẩn form nhập liệu
    document.querySelector(".nhap").classList.add("hide");
    // Xóa nội dung trong input
    emailInput.value = "";
    // Ẩn thông báo lỗi nếu có
    errorMsg.classList.add("hide");
  } else {
    // Hiển thị thông báo lỗi
    errorMsg.classList.remove("hide");
    // Ẩn thông tin cá nhân nếu đã hiển thị trước đó
    infoContainer.classList.add("hide");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const skillTitles = document.querySelectorAll(".btn");

  skillTitles.forEach((title) => {
    title.addEventListener("click", function () {
      const skillInfo = this.nextElementSibling;

      if (skillInfo.classList.contains("active")) {
        // Nếu đã mở, đóng lại
        skillInfo.classList.remove("active");
        this.textContent = "View More";
      } else {
        // Nếu chưa mở, mở ra
        skillInfo.classList.add("active");
        this.textContent = "View Less";
      }
    });
  });
});
