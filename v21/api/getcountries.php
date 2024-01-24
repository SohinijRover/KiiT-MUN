<?php
    header("Content-Type: application/json; charset=UTF-8");
    include '../db_config.php';

    if(!isset($_POST['committee'])) {
        echo '';
    }
    else{
         
    // $country1 = mysqli_real_escape_string($conn,$_POST['country1']);
    // $country2 = mysqli_real_escape_string($conn,$_POST['country2']);
    // $country3 = mysqli_real_escape_string($conn,$_POST['country3']);
    // $country4 = mysqli_real_escape_string($conn,$_POST['country4']);
    // $country5 = mysqli_real_escape_string($conn,$_POST['country5']);

    $data = array();
    $data['countrylist'] = array();

    $committee = mysqli_real_escape_string($conn, $_POST['committee']);

    $sql = "SELECT name FROM `lu_country` WHERE pk_country_id IN (
        SELECT fk_country_id FROM map_commitee_country WHERE fk_committee_id = (
            SELECT pk_committee_id FROM lu_committee WHERE name = '".$committee."'))"; 
        

    $result = mysqli_query($conn,$sql);


    if(mysqli_num_rows($result) > 0)  {
        while($row = mysqli_fetch_assoc($result)) {
            array_push($data['countrylist'], $row['name']);
        }
    }

    echo json_encode($data);

    // AND name NOT IN('".$country1."','".$country2."','".$country3."','".$country4."','".$country5."')"; 
    }

   
?>