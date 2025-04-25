<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
  $("#invoiceForm").submit(function (e) {
    e.preventDefault(); // Prevent default form submit

    const form = document.getElementById("invoiceForm");
    const formData = new FormData(form);

    fetch("https://script.google.com/macros/s/AKfycbw7vYUUSEod6Mg3zeE7__iFfoLMub7BtE8wLapZFS0gEq29BuB1LuE5GZV4zFEORh3yoQ/exec", {
      method: "POST",
      body: formData
    })
    .then(() => {
      alert("Data saved successfully!");
      location.reload(); // Refresh the page
    })
    .catch(error => {
      console.error("Submission failed:", error);
      alert("Error saving data");
    });
  });
</script>

