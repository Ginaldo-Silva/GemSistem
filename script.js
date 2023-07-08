function togglePasswordVisibility() {

  var imgElement =  document.getElementById('passwordImage');
  var currentImage = imgElement.getAttribute('src');
  var newImage =  '';

  if(currentImage === 'img/EyeClossed.png')
  {
    newImage = 'img/EyeOpen.png';
  } else {
    newImage = 'img/EyeClossed.png';
  }

  imgElement.setAttribute('src', newImage);

  var passwordInput = document.getElementById("password");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}