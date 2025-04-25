<script>
  document.getElementById("invoiceForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Stop default form action

    const form = e.target;
    const formData = new FormData(form);

    const formParams = new URLSearchParams();
    for (const pair of formData.entries()) {
      formParams.append(pair[0], pair[1]);
    }

    console.log("Submitting form data to script...");

    fetch("https://script.google.com/macros/s/AKfycbx5V3FkO9W-37F2s1F7pWrmnDfbeBuL6gg-kxJSpl2a2uTTMMUgyNWYPiLkeB9AhpMt0A/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formParams.toString()
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Server returned " + response.status);
      }
      return response.text();
    })
    .then(data => {
      console.log("Success response:", data);
      alert("Data saved successfully!");
      location.reload(); // Only reload after success
    })
    .catch(error => {
      console.error("Error submitting form:", error);
      alert("There was a problem saving your data. See the console for details.");
    });
  });
</script>
