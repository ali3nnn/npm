# Table Purifyer

This module makes easier to query a table.

## Installation

```bash
npm i table-purify --save
```

## Usage

```python
const purify = require('table-purify')

purify('inputId','tableId',columnIndex)

# inputId - is the html id of input element where you will input the text you wanna filter by. 
# (i.e. in input you type "123" and in table you will see only the rows contiaing "123")

# tableId - is the html id of the table you want to filter

# columnIndex - is the index (starting from 0) of column you want to check.
# i.e the text "123" from input is taken and compared with every row of one column assigned by index column
# if you table has 3 columns (id, name, barcode) and you want to show only the rows that have "123" on barcode column => columnIndex = 2
```

## Contributing
This module is taken from stackoverflow and published here for being easier to use from here by installing using npm

## License
[MIT](https://choosealicense.com/licenses/mit/)
