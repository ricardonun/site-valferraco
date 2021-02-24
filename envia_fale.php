<?php header("Content-type: text/html; charset=utf-8"); 

$quebra_linha = "\n";
$emailsender = "comercial@valferraco.com.br";
$nomeremetente = $_POST['nome'];
$emaildestinatario = "comercial@valferraco.com.br";
$telefone = $_POST['fone'];
$email = $_POST['email'];

//$comcopia = "
$assunto = "Contato via site";
$mensagem = $_POST['mensagem'];

$mensagemHTML = '
<p>Mensagem enviada pelo site</p>
<p>Nome= '.$nomeremetente.'</p>
<p>Telefone= '.$telefone.'</p>
<p>Email= '.$email.'</p>
<p>'.$mensagem.'</p>
<hr>';

$header = "MIME-Version: 1.1".$quebra_linha;
$headers .= "Content-type: text/html; charset=iso-8859-1".$quebra_linha;
$header .= "From: ".$emailsender.$quebra_linha;
$header .= "Return-Path: ".$emailsender.$quebra_linha;
$header .= "Replay-To: ".$emailsender.$quebra_linha;
 
 
mail($emaildestinatario, $assunto, $mensagemHTML, $headers, "-r". $emailsender);

echo "<script>
alert('Mensagem enviada com sucesso.')
window.location = 'index.html';
</script>";

/*header("location:index.php")*/

?>