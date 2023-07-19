<?php
session_start();
$host = 'ec2-3-222-74-92.compute-1.amazonaws.com';
$port = '5432';
$user = 'jijzokbjnewuhp'; 
$password = 'a84f96a69ab61b42dc1b8301b914a16cee6d3e890dbf963775c3dc169a7484db';
$db   = 'd4g9k0fkl1mt8m';

$connection = pg_connect("host=$host port =$port dbname=$db user=$user password=$password");
// if($connection){
// echo 'Koneksi Berhasil';
// }
// else{
// echo 'Koneksi Gagal';
// }
?>