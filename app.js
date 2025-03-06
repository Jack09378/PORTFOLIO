// document.getElementById("downloadBtn").addEventListener("click", function () {

//     const link = document.createElement("a");

//     link.href = "cv.pdf";
//     link.download = "Arun_Kumar_CV.pdf";

//     document.body.appendChild(link);

//     link.click();

//     document.body.removeChild(link);
//     console.log("link")
// });

document.addEventListener('DOMContentLoaded', () => {
    // Select the toggle icon and the container
    const toggleIcon = document.querySelector('.toggle-icon');
    const icons = document.querySelectorAll('.toggle-icon i');
    const container = document.body;

    // Add event listener to toggle dark mode
    toggleIcon.addEventListener('click', () => {
        // Toggle dark mode class on the container
        container.classList.toggle('dark-mode-active');

        // Toggle the icon between moon and sun
        icons.forEach(icon => {
            icon.classList.toggle('bx-sun');
            icon.classList.toggle('bx-moon');
        });
        
    });
});


//Download Button

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('download').addEventListener('click', function () {
        const fileUrl = 'file-example_PDF_1MB.pdf';
        const fileName = 'file-example_PDF_1MB.pdf';

        const anchor = document.createElement('a');
        anchor.href = fileUrl;
        anchor.download = fileName;
        document.body.appendChild(anchor);

        anchor.click();

        document.body.removeChild(anchor);
    });
});
