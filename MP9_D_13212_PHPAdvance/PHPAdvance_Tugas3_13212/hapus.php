<?php
    require 'koneksi.php';
    $id = trim($_GET['id'] ?? '');

    if(!ctype_digit($id) || $id === ''){
        echo '<p style="color:red;">!! ID tidak valid. !!</p>';
    }
    else{
        $sql = 'DELETE FROM film WHERE id = ?';
        $prep = mysqli_prepare($conn, $sql);
        mysqli_stmt_bind_param($prep, 'i', $id);
        mysqli_stmt_execute($prep);
    }
    if(mysqli_affected_rows($conn) === 1){
        echo '<p>Data berhasil dihapus.</p>';
    } 
    else{
        echo '<p>Data tidak ditemukan.</p>';
    }
    echo '<a href="index.php">Kembali</a>';
?>