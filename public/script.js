document.getElementById('quantity').addEventListener('input', function () {
  const quantity = parseFloat(this.value); 
  const itemList = document.getElementById('item-list'); 
  const warningText = document.getElementById('warning-text');
  itemList.innerHTML = ''; 

  if (quantity % 1 !== 0 && quantity) {
    warningText.style.display = 'block';
  } else {
    warningText.style.display = 'none'; 
  }

  const filteredQuantity = parseInt(quantity)

  if (filteredQuantity > 0) {
    for (let i = 1; i <= filteredQuantity; i++) {
      const listItem = document.createElement('li');
      itemList.appendChild(listItem);
    }
  }
});


