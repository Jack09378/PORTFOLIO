document.getElementById("downloadBtn").addEventListener("click", function () {

    const link = document.createElement("a");

    link.href = "cv.pdf";
    link.download = "Arun_Kumar_CV.pdf";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
    console.log("link")
});

