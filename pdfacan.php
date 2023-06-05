<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Başlıksız Belge</title>
</head>

<body>
	<?php
	include("upload.php");
		header('Content-Type: application/pdf');
		echo file_get_contents("upload/");
	?>
</body>
</html>