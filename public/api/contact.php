<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true)['data'];

if (empty($_POST['name']) && empty($_POST['email'])) {
	echo json_encode(array(
		"error" => true
	));
	die();
}

if ($_POST)
	{

	http_response_code(200);
	$subject = "Ching Asian Bistro Website Contact";
	$to = "annliu@comcast.net";
	$from = $_POST['email'];

	$name = Trim(stripslashes($_POST['name'])); 
	$email = Trim(stripslashes($_POST['email'])); 
	$phone = Trim(stripslashes($_POST['phone']));
	$reason = Trim(stripslashes($_POST['reason']));
	$comments = Trim(stripslashes($_POST['comments'])); 

	$msg = "";
	$msg .= "Name: ";
	$msg .= $name;
	$msg .= "\n";
	$msg .= "Email: ";
	$msg .= $email;
	$msg .= "\n";
	$msg .= "Phone: ";
	$msg .= $phone;
	$msg .= "\n";
	$msg .= "Reason: ";
	$msg .= $reason;
	$msg .= "\n";
	$msg .= "Comments: ";
	$msg .= $comments;
	$msg .= "\n";

	// Headers

	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ">";
	mail($to, $subject, $msg, $headers);

	echo json_encode(array(
		"sent" => true
	));
	}
  else
	{

	echo json_encode(["sent" => false, "message" => "Something went wrong"]);
	}

?>