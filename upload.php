<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Başlıksız Belge</title>
</head>
	<script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
<script type="text/javascript">
function googleTranslateElementInit() {
	new google.translate.TranslateElement({
			pageLanguage: 'en',
			includedLanguages: 'tr,ar,ru,tr,de,fr,en'
		},
		'google_translate_element'
	);
}
</script>
	<style>
			.containerr{
			width: 75%;
    		padding: 30px;
     		background-color:#4D4848;
     		border-radius: 7px;
    		box-shadow: 0px 10px 20px rgba(0,0,0,0.1);
			height: 100%;
			background-color:#DDDDDD;
			margin: auto;
		    }
			.back{
			background: url("resim/download.jpg") center center fixed; 
			background-size: cover;
			}
	</style>
<body class="back">
	<div class="containerr">
		<div id="google_translate_element"></div>
	<?php
	include("pdfparser-master/alt_autoload.php-dist");
	$dosyauzanti=$_FILES["dosya"]["type"];
	$dosyaboyut=$_FILES["dosya"]["size"];
	if($dosyaboyut<8388610){
	if($dosyauzanti=="application/pdf"){
		$formdangelendosya=$_FILES["dosya"]["tmp_name"]; 
		$eklenecekyol="upload/".$_FILES["dosya"]["name"]; 
	if (move_uploaded_file($formdangelendosya,$eklenecekyol)){
		$parser = new \Smalot\PdfParser\Parser();
		$pdf = $parser->parseFile("upload/".$_FILES["dosya"]["name"]);
		$text = $pdf->getText();
		$textlengt=strlen($text);
		$eski=array("-");
		$yeni=array("");
		for($i=0;$i<$textlengt;$i++){
		$replace=str_replace($eski,$yeni,$text);
		}
		echo $replace;
		} 
		else  { echo "Yükleme başarısız!"; }}
	else{
		echo("Lütfen PDF Dosyası yükleyiniz");
		header("refresh:3; url=index.html");}}
	else{echo("Dosya Boyutu Çok Büyük(max 8mb)");}
	//	header('Content-Type: application/pdf');
	//	echo file_get_contents("upload/".$_FILES["dosya"]["name"]);
	?>
	</div>
	
</body>
</html>