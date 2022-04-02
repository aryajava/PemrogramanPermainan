// Arrow Page Navigation
let urutan = Number(document.getElementById("page").value);
if (urutan != undefined || urutan != null) {
  document.onkeyup = KeyCheck;
  function leftarrowpressed() {
    let kembali = urutan - 1;
    if(kembali < 2) location.href = "../";
    else location.href = "pertemuan"+kembali+".html";
  }
  function rightarrowpressed() {
    let selanjutnya = urutan + 1;
    if(selanjutnya > 13) location.href = "../";
    else location.href = "pertemuan" +selanjutnya +".html";
  }
  function KeyCheck(e) {
    var KeyID = window.event ? event.keyCode : e.keyCode;
    switch (KeyID) {
      // left arrow key
      case 37:
        leftarrowpressed();
        break;
      //  right arrow key
      case 39:
        rightarrowpressed();
        break;
    }
  }
}