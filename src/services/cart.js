//->Adicionar item no carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}

//->Deletar item do carrinho
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name)

  if (index !== -1){
    userCart.splice(index, 1);
  }

}

//-> Remover um item
async function removeItem(userCart, item) {
const indexFound = userCart.findIndex((p) => p.name ===  item.name)
if(indexFound == -1){
  console.log("item não encontrado");
  return;
}

if(userCart[indexFound].quantity > 1){
  userCart[indexFound].quantity -= 1;
  return
}
if(userCart[indexFound].quantity === 1){
  userCart.splice(indexFound, 1);
  return;
}
  // const deleteIndex = index - 1;
  // if(index >= 0 && index < userCart.length){
  //   userCart.splice(deleteIndex,1)
  // }
}

//-> Calcular o total do carrinho
async function calcularTotal(userCart) {
  console.log("\nShopee Cart TOTAL IS: ")
 const result = userCart.reduce((total, item) => total + item.subtotal(), 0) 
 console.log(`Total:💲${result}`);
}

async function displayCart(userCart){
  console.log("Shopee cart list: ");
  userCart.forEach((item,index ) =>{
    console.log(`${index + 1}. ${item.name} - ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`);
  })
}

export { addItem, calcularTotal, removeItem, deleteItem,displayCart };
