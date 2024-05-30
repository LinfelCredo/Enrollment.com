function submitForm() {
    var formData = new FormData(document.getElementById("myForm"));
    // You can add additional data here if needed
    // formData.append('additionalField', 'additionalValue');

    fetch('cophp', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        console.log(data); // Log the server response
        // Handle success response, e.g., show a success message to the user
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle error, e.g., show an error message to the user
    });
}
