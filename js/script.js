document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const switchFormLinks = document.querySelectorAll('.switch-form');
  
    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");
  
    const fullNameInput = document.querySelector('#signupForm input[placeholder="Full Name"]');
    const signupEmailInput = document.querySelector('#signupForm input[placeholder="Email"]');
    const signupPasswordInput = document.querySelector('#signupForm input[placeholder="Password"]');
  
    const loginEmailInput = document.querySelector('#loginForm input[placeholder="Email"]');
    const loginPasswordInput = document.querySelector('#loginForm input[placeholder="Password"]');
  
    // Chuyển đổi giữa Login và SignUp form
    switchFormLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (link.textContent.trim() === 'Sign Up') {
          container.classList.remove('active-login');
          container.classList.add('active-signup');
        } else {
          container.classList.remove('active-signup');
          container.classList.add('active-login');
        }
      });
    });
    // Đăng ký: lưu thông tin và chuyển qua form Đăng nhập
    if (signupForm) {
      signupForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const fullName = fullNameInput.value.trim();
        const email = signupEmailInput.value.trim();
        const password = signupPasswordInput.value.trim();
        if (fullName && email && password) {
          // Lưu thông tin vào localStorage
          localStorage.setItem("userName", fullName);
          localStorage.setItem("userEmail", email);
          localStorage.setItem("userPassword", password);
          alert("Đăng ký thành công! Mời bạn đăng nhập.");
          // Chuyển về form đăng nhập
          container.classList.remove('active-signup');
          container.classList.add('active-login');
          // Xóa input sau khi đăng ký xong
          signupForm.reset();
        } else {
          alert("Vui lòng điền đầy đủ thông tin!");
        }
      });
    }
    // Đăng nhập: kiểm tra thông tin
    if (loginForm) {
      loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const email = loginEmailInput.value.trim();
        const password = loginPasswordInput.value.trim();
  
        const storedEmail = localStorage.getItem("userEmail");
        const storedPassword = localStorage.getItem("userPassword");
  
        if (email === storedEmail && password === storedPassword) {
          alert("Đăng nhập thành công!");
          window.location.href = "/Menu/index2.html";
        } else {
          alert("Email hoặc mật khẩu không đúng!");
        }
      });
    }
  });
  