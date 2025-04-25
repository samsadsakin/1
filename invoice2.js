<script>
  document.getElementById("invoiceForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const params = new URLSearchParams();
    for (const pair of formData.entries()) {
      params.append(pair[0], pair[1]);
    }

    fetch("https://script.google.com/macros/s/AKfycbw7vYUUSEod6Mg3zeE7__iFfoLMub7BtE8wLapZFS0gEq29BuB1LuE5GZV4zFEORh3yoQ/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString()
    })
    .then(response => response.text())
    .then(data => {
      console.log("Success:", data);
      alert("Data submitted!");
      location.reload(); // Only reload after a successful response
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Failed to submit. See console for error.");
    });
  });
</script>
