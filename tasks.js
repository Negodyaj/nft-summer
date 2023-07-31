/*
Each product in the online store receipt is described by the following values:
- Name;
- Unit price;
- Quantity;
- Participates in the promotion (yes/no).
Write a function that receives the listed values and calculates the receipt’s amount according 
to the following rules:
- If the quantity of the product is greater than or equal to 5, then a 10% discount is applied 
  to the product. 
- If the product participates in the promotion, a 15% discount is applied.
Discounts may be cumulative.
*/

const receiptData = {
  name: 'Pen',
  unitPrice: 1.15,
  quantity: 7,
  hasDiscount: true,
}

const receiptData2 = {
  name: 'Apple',
  unitPrice: 2,
  quantity: 3,
  hasDiscount: false,
}

const receiptData3 = {
  name: 'ApplePen',
  unitPrice: 2.1,
  quantity: 1,
  hasDiscount: true,
}


function calculateAmount(data) {
  let receiptAmount = 0;

  /*
    logic is here
  */

  return receiptAmount;
}

function calculateAmount2(name, unitPrice, quantity, hasDiscount) {
}
calculateAmount2('ApplePen', 2.1, 1, true);

calculateAmount(receiptData); // 6,0375
calculateAmount(receiptData2); // 6
calculateAmount(receiptData3); // 1,785