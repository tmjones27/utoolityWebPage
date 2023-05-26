$(document).ready(function () {

	$("#msg_form").submit(
		function (event) {
			var isValid = true;

			// NAME
			var name = $("#name").val().trim();
			if (name == "") {
				window.alert("Missing name in input field.");
				isValid = false;
				
			} else {
				$("#name").next().text("");
			}
			$("#name").val(name);

			//EMAIL
			var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
			var email = $("#email").val().trim();
			if (email == "") {
				window.alert("Missing email in input field.");
				isValid = false;
			}
			else if (!emailPattern.test(email)) {
				window.alert("Must be a valid email address.");
				isValid = false;
			}
			else {
				$("#email").next().text("");
			}
			$("#email").val(email);

			// MESSAGE
			var msg_box = $("#msg_box").val();
			if (msg_box == "") {
				window.alert("Message box is blank.");
				isValid = false;
			} else {
				$("#msg_box").next().text("");
			}
			$("#msg_box").val(msg_box);

			if (isValid == false) {
				event.preventDefault();
			}
		}
	);

	var reset = function () {

		$("name").value = "";
		$("email").value = "";
		$("msg_box").value = "";
	};

}); // end ready
