<?php
$url = "https://pokeapi.co/api/v2/pokemon-species/?limit=493";
$response = file_get_contents($url);
$result = json_decode($response,true);
$dir_path = "YOUR_PATH/src/assets/sprites/";

if (is_dir($dir_path)) {
	if(is_readable($dir_path)) {
		$ch_dir = dir($dir_path);
		while (false !== ($file_name = $ch_dir -> read())) {
			// exampple$file_name 001MS.png
			preg_match("/\d*/u", $file_name, $m);
			$no = (int)ltrim($m[0], 0);
			if (isset($result['results'][$no-1]['name'])) {
				$f = $dir_path . $file_name;
				$rename = $dir_path . $result['results'][$no-1]['name'] . '.png';
				rename($f, $rename);
			}
		}
		$ch_dir->close();
	} else {
		echo 'not readable';
	}
} else {
	echo 'no dir';
}