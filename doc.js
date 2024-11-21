$(document).ready(function() {
    // Book Appointment button click event
    $('.book-appointment').click(function() {
        var doctorName = $(this).data('doctor');
        var fee = $(this).data('fee');
        $('#doctorName').val(doctorName);
        $('#appointmentModal').modal('show');
    });

    // Handle form submission
    $('#appointmentForm').submit(function(event) {
        event.preventDefault();

        var patientName = $('#patientName').val();
        var patientContact = $('#patientContact').val();
        var appointmentDate = $('#appointmentDate').val();
        var doctorName = $('#doctorName').val();

        alert("Appointment confirmed for " + patientName + " with Dr. " + doctorName + " on " + appointmentDate);
        $('#appointmentModal').modal('hide');
        $('#appointmentForm')[0].reset();  // Reset the form
    });
});