document.addEventListener('DOMContentLoaded', function() {
    let add = document.getElementById('add');
    let save = document.getElementById('saveNote')
    add.addEventListener('click', addNota);
    save.addEventListener('click', setCookie('note',5000,save.value));
})

function addNota() {
    let tablero = document.getElementById('tablero');
    const notaHTML = `<div class="input-group mb-3">
    <textarea type="text" id="nota" class="form-control" placeholder="Nota..."></textarea>
    <button class="btn btn-success" >Save</button>
    <button class="btn btn-danger" >Remove</button>
</div>`;
    tablero.innerHTML += notaHTML;
}


function setCookie(name,expiretime,value) {
    if (expiretime == "" || isNaN(expiretime)) {
        expiretime = null
    }
 
        let expireDate = new Date()
        expireDate.setTime(expireDate.getTime() + (expireDate* 24 *3600*1000))
    
     let cookie = name + "="+escape(value)+((expiretime == null) ? "" : expireDate.toGMTString())
     document.cookie = cookie
}

function getCookie(nameCookie) {
    if (document.cookie.length > 0) {
      var theCookie = " " + document.cookie;
      var begin = theCookie.indexOf(" " + nameCookie + "=");
      if (begin == -1) begin = theCookie.indexOf(";" + nameCookie + "=");
      if (begin != -1) {
        begin += nameCookie.length + 1;
        end = document.cookie.indexOf(";", begin);
        if (end == -1) end = document.cookie.length;
        return unescape(document.cookie.substring(begin, end));
      }
    }
    return null;
  }