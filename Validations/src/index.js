const studentForm = document.forms.studentInformation;

function changeHandler(evt) {
    debugger;
    console.log(evt.target.value);
}

function inputHandler(evt) {
    debugger;
    console.log(evt.target.value);
}

studentForm.studentName.addEventListener('input', changeHandler);
studentForm.studentName.addEventListener('input', inputHandler);

const submitButton = document.querySelector("button[type=submit]");
submitButton.addEventListener('submit', function submitInfo() {
});


studentForm.addEventListener('submit', function submitInfo(evt) {
    evt.preventDefault();

    // validations
    studentForm.submit();
});