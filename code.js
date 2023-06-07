document.addEventListener('DOMContentLoaded', function() {
    let add = document.getElementById('add');

    add.addEventListener('click', addNota);
})

function addNota() {
    let tablero = document.getElementById('tablero');
    const notaHTML = `<div class="input-group mb-3">
    <textarea type="text" id="nota" class="form-control" placeholder="Nota..."></textarea>
        <span class="input-group-text" id="basic-addon1">@</span>
</div>`;
    tablero.innerHTML += notaHTML;
}
