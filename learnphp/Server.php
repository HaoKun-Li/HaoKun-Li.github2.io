<?php

/**
 * Created by PhpStorm.
 * User: Haokun Li
 * Date: 2018/4/9
 * Time: 21:21
 */
/*if(isset($_GET['name'])){
    echo "Hello: ".$_GET['name'];
}else{
    echo "ARGS Error";
}*/

if(isset($_POST['name'])){
    echo "Hello: ".$_POST['name'];
}else{
    echo "ARGS Error";
}


?>