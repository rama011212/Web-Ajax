// const btnAdd = document.getElementById("add");
// btnAdd.onclick = function (evt) {
//   const data = {
//     nomor_surat: document.getElementById("nomor_surat").value,
//     tanggal: document.getElementById("tanggal").value,
//     judul: document.getElementById("judul").value,
//   };

//   const xhttp = new XMLHttpRequest();
//   xhttp.open(
//     "POST",
//     "http://localhost/Pemweb2_ajax/backend/tambah_proses.php",
//     true
//   );
//   xhttp.setRequestHeader("Content-type", "application/json; charset=UTF-8");
//   xhttp.send(JSON.stringify(data));
//   xhttp.onreadystatechange = function () {
//      var result = JSON.parse(this.responseText);
//      if (result.status == "success") {
//        window.location.href = "index.html";
//      } else {
//        alert("Eror");
//      }
//    };
//    xhttp.onerror = function () {
//      alert("Terjadi kesahalan");
//    };

  
// }



$(document).on("click", "#add", function () {
  var nomor_surat = new Object();
  nomor_surat.nomor_surat = $("#nomor_surat").val();
  nomor_surat.tanggal = $("#tanggal").val();
  nomor_surat.judul = $("#judul").val();
  $.post(
    "../backend/tambah_proses.php",
    JSON.stringify(nomor_surat),
    function (resp, status) {
      let result = resp;
      if (result.status == "success") {
        window.location.href = "index.html";
      } else {
        alert("data gagal tersimpan");
      }
    }
  );
});