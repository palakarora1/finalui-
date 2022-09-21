<?php
include_once ("core.php");
$connect=mysqli_connect("localhost","root","","frbas");   
$sql="SELECT * from attendance"; 
$result=mysqli_query($connect,$sql);
$json_array=array();
if($result){
    header("Content-Type: JS0N");
    $i=0;
    while($row = mysqli_fetch_assoc($result)){
        $json_array[$i]['name']=$row["name"];
        $json_array[$i]['date']=$row['date'];
        $json_array[$i]['time']=$row['time'];
        $json_array[$i]['status']=$row['status'];
        $i++;
}}
echo json_encode($json_array, JSON_PRETTY_PRINT);

?>
