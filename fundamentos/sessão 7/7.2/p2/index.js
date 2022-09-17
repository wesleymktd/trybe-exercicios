const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    console.log(`Olá ${order.order.delivery.deliveryPerson} entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, N°: ${order.address.number}, AP: ${order.address.apartment}`);
  
  };
  

  
  customerInfo(order);
  
  const orderModifier = (order) => {
  order.name = 'Luiz Souza';
  const pagment = order.payment.total = 50;
  const pizzas = Object.keys(order.order.pizza)
  const bebidas = order.order.drinks.coke.type
  
  console.log(`Olá ${order.name}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${bebidas} é R$ ${pagment}`) 


  
  };
  
  
  // Complete a função orderModifier() para que seu retorno seja similar a 
  // “Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.”

  // Modifique o nome da pessoa compradora.
  // Modifique o valor total da compra para R$ 50,00.

  orderModifier(order);