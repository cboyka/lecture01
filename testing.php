<?php

if(!empty($_GET['log']))
{
	$logfile = fopen('logs.txt','a');
	fwrite($logfile, $_GET['log']);
	fclose($logfile);
}

?>