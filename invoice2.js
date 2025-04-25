<script>
  $("#invoiceForm").submit(function (e) {
    e.preventDefault(); // Stop normal submission

    const form = document.getElementById("invoiceForm");
    const formData = new FormData(form);

    // Convert to URL-encoded format
    const formParams = new URLSearchParams();
    for (const pair of formData.entries()) {
      formParams.append(pair[0], pair[1]);
    }

    fetch("https://script.google.com/macros/s/AKfycbw7vYUUSEod6Mg3zeE7__iFfoLMub7BtE8wLapZFS0gEq29BuB1LuE5GZV4zFEORh3yoQ/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formParams.toString()
    })
    .then(() => {
      alert("Data saved successfully!");
      location.reload();
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Failed to save. See console.");
    });
  });
</script>

