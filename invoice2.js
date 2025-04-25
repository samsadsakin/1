<script>
  // Ensure script runs after the document is fully loaded
  document.addEventListener("DOMContentLoaded", function () {
    // Add an event listener for the form submission
    const form = document.getElementById("invoiceForm");

    form.addEventListener("submit", function (e) {
      e.preventDefault();  // Prevent the default form submission

      // Create a FormData object from the form
      const formData = new FormData(form);
      const params = new URLSearchParams();

      // Append form data into URLSearchParams
      for (const pair of formData.entries()) {
        params.append(pair[0], pair[1]);
      }

      console.log("Sending data to Google Apps Script:", params.toString());

      // Send the form data via fetch to Google Apps Script
      fetch("https://script.google.com/macros/s/AKfycbw7vYUUSEod6Mg3zeE7__iFfoLMub7BtE8wLapZFS0gEq29BuB1LuE5GZV4zFEORh3yoQ/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: params.toString()
      })
      .then(response => {
        if (!response.ok) throw new Error("Error: " + response.status);
        return response.text();
      })
      .then(data => {
        console.log("Form data sent successfully!");
        alert("Data submitted successfully!");
        location.reload(); // Reload only after success
      })
      .catch(error => {
        console.error("Error submitting form:", error);
        alert("There was a problem with the form submission.");
      });
    });
  });
</script>
