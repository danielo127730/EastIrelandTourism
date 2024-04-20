document.getElementById("downloadButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    if (document.getElementById("downloadCheckbox").checked) {
        // Create a dynamic anchor element
        var link = document.createElement('a');
        link.href = 'C:\\Users\\Blues\\OneDrive\\Desktop\\Coding\\Python\\SDEV2\\CA1\\EastIrelandTourism\\project\\app\\static\\assets\\Ireland-Planning.pdf';
        link.download = 'Comprehensive-Guide'; // Replace 'filename' with the desired filename for the downloaded file

        // Append the anchor element to the document body
        document.body.appendChild(link);

        // Trigger a click event on the anchor element
        link.click();

        // Remove the anchor element from the document body
        document.body.removeChild(link);
    }
    
    // Submit the form
    document.getElementById("downloadForm").submit();
});
