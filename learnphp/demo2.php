<?php

/**
 * Created by PhpStorm.
 * User: Haokun Li
 * Date: 2018/3/25
 * Time: 19:10
 */
    $path = 'Demo1.php';
    //echo filesize(realpath($path));
    //echo round(disk_total_space('C:')/1024/1024/1024,2).'GB';
    date_default_timezone_set('Asia/Shanghai');
    echo date('Y-m-d H:i:s',fileatime($path));
?>