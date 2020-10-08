module.exports = (id_input, id_table, tableColumn) => {
    // Declare variables
    var input = {value: ''}
    var filter, table, tr, td, i, txtValue;
    input = document.getElementById(id_input);
    filter = input.value.toUpperCase();
    table = document.getElementById(id_table);
    tr = table.getElementsByTagName("tr");
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[tableColumn];
        //   console.log(i, td)
        if (td) {
            txtValue = td.textContent || td.innerText;
            // console.log(i, td, txtValue)
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}