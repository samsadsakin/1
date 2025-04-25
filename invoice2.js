<script>
  document.getElementById("invoiceForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent default form submission

    const form = e.target;
    const formData = new FormData(form);

    // Convert form data to URL-encoded format
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
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.text(); // Can be ignored
    })
    .then(() => {
      // Success! Reload the page
      location.reload();
    })
    .catch(error => {
      console.error("Error submitting form:", error);
      alert("Failed to submit data. See console for details.");
    });
  });
</script>
