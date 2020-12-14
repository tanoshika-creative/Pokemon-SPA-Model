<?php
$url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";
$dir_path = "YOUT_PATH";
$result = json_decode($response,true);
for ($i = 1; $i <= 493; $i++) {
	$response = file_get_contents("{$url}/shiny/{$i}.png");
	@file_put_contents("{$dir_path}/shiny/{$i}.png", $response);
	var_dump("{$url}/shiny/{$i}.png");
}