<?
    header('Access-Control-Allow-Origin: *');
    require_once('../connection.php');
    $sql = "select * from mail";
    $result = pg_query($sql);
    echo json_encode(pg_fetch_all($result));

?>