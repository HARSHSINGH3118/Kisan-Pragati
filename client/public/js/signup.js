function signUp() {
  var role = document.getElementById("role").value;
  if (role === "farmer") {
    window.location.href = "farmer.html";
  } else if (role === "supplier") {
    window.location.href = "supplier.html";
  } else if (role === "customer") {
    window.location.href = "customer.html";
  } else {
    alert("Please select a valid role.");
  }
}
