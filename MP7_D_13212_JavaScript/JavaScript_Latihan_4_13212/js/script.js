function fn_ValForm(){
    var sMsg = "";
    var info = "";
    var pilihan = "";
    var emailcheck = /^[a-z0-9][a-z0-9_\.-]*[a-z0-9]@[a-z0-9][a-z0-9_\.-]*[a-z0-9]\.[a-z0-9]{2,4}$/;

    if(document.getElementById("nama").value == ""){
        sMsg += "\n Anda belum mengisikan nama ";
    }
    if(document.getElementById("email").value == ""){
        sMsg += "\n Anda belum mengisikan email ";
    }
    else if(!(emailcheck.test(document.getElementById("email").value))) { 
        sMsg += "\n Email invalid "; 
    }
    if(document.getElementById("umur").value == "" || document.getElementById("umur").value <= 0){
        sMsg += "\n Anda belum mengisikan umur ";
    }
    if(document.getElementById("kategori").value == ""){
        sMsg += "\n Anda belum memilih kategori lomba";
    }
    if(sMsg != ""){
        alert("Peringatan:\n" + sMsg);
        return false;
    }
    else{
        if(document.getElementById("umur").value <= 25){
            info = "Peserta Mahasiswa";
        }
        else{
            info = "Peserta Umum";
        }

        if(document.getElementById("kategori").value == "W"){
            pilihan = "Workshop";
        }
        else if(document.getElementById("kategori").value == "S"){
            pilihan = "Seminar";
        }
        else{
            pilihan = "Lomba Coding";
        }
        alert("Terma kasih " + document.getElementById("nama").value + " ! Anda terdaftar di acara " + pilihan + " " + info);
    }
}