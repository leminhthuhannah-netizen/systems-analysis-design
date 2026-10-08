function Subtotal(quantity,unitprice,discount){
    const result = quantity * unitprice - (quantity * unitprice * discount/100);
    return result;
}

let id = 1;
// Event 
const sellButton = document.getElementById('product-btn_sell');

sellButton.addEventListener('click', function () {
    const productNameInput = document.getElementById('product-name').value;
    const quantityInput = parseInt(document.getElementById('quantity').value);
    const unitPriceInput = parseInt(document.getElementById('unit-price').value);
    const discountInput = parseFloat(document.getElementById('discount').value);
    const subtotal = Subtotal(quantityInput,unitPriceInput,discountInput);
    

    // create tr 
    const productList = document.getElementById('product-list');
    const row = document.createElement('tr')

    const idCell = document.createElement('td');
    idCell.textContent = id;
    row.appendChild(idCell);


    const productNameCell = document.createElement('td');
    productNameCell.textContent = productNameInput;
    row.appendChild(productNameCell);
    
    const quantityCell = document.createElement('td');
    quantityCell.textContent = quantityInput;
    row.appendChild(quantityCell);

    const unitPriceCell = document.createElement('td');
    unitPriceCell.textContent = unitPriceInput;
    row.appendChild(unitPriceCell);

    const discountCell = document.createElement('td');
    discountCell.textContent = discountInput;
    row.appendChild(discountCell);

    const subtotalCell = document.createElement('td');
    subtotalCell.textContent = subtotal;
    row.appendChild(subtotalCell);

    // When we finish add to productlist - done
    productList.appendChild(row);

    id++;

});


// let id = 0;
// function sell(){
//     id++;
//     var pname = frm.pname.value;
//     var quty = frm.qty.value 

// }