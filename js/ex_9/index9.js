const order = {
  customer:{
    address:{
      city:"a"}
    }
};

/*if (order && order.customer && order.customer.address && !order.customer.address.city) {
  console.log('City is required');
}
else console.log(order.customer.address.city);*/

let city=Object.values(order.customer.address.city);
if (city==false){
console.log('City is required');}
else console.log(city);
