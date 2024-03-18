document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector('form[name="submit-to-google-sheet"]');
  const msg = document.getElementById("msg");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyxzJb0ly4-CgtUkLFiz9zbshcmdx5unlow2jtWexdTrdvSKYu6OnrYC5ims4Fb_sgI2Q/exec",
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        msg.textContent = "Message sent successfully";
      } else {
        msg.textContent = "Failed to send message";
      }
    } catch (error) {
      console.error("Error!", error.message);
      msg.textContent = "Failed to send message";
    }
    form.reset();
    setTimeout(() => {
      msg.textContent = "";
    }, 5000);
  });
});
