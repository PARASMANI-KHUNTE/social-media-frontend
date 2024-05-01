function togglePostSectionVisibility() {
    var postSection = document.getElementById('postSection');
    if (postSection.style.display === "none") {
        postSection.style.display = "block";
    } else {
        postSection.style.display = "none";
    }
}