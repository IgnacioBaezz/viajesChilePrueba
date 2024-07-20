$(document).ready(function () {
    //JQuery implementation and Sweet alert for form button
    $('#buttonForm').on('click', function () {
        Swal.fire({
            title: "Enviado",
            text: "Estaremos en contacto pronto...",
            icon: "success",

        });
    });
});