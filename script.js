//your JS code here. If required.
document.getElementById('fname').addEventListener('blur', function() {
    let inputField = document.getElementById('fname');
    inputField.value = inputField.value.toUpperCase();
});