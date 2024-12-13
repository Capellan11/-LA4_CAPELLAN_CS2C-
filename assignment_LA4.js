let customerQueue = [];

function addCustomer() {
  let name = prompt("Please enter your name to join the queue:");

  customerQueue.push(name);

  console.log(`Customer ${name} added to the queue.`);
  console.log("Current Queue: " + customerQueue.join(", "));
}

function serviceCustomer() {
  if (customerQueue.length === 0) {
    alert("The queue is empty! No customers to service.");
    return;
  }

  let customerNumber = prompt(`Enter a customer number (1-${customerQueue.length}) to service:`);

  customerNumber = parseInt(customerNumber);

  if (customerNumber >= 1 && customerNumber <= customerQueue.length) {
    let servicedCustomer = customerQueue.splice(customerNumber - 1, 1)[0];
    
    alert(`Customer ${servicedCustomer} has been serviced.`);
    console.log(`Serviced customer: ${servicedCustomer}`);
    console.log("Updated Queue: " + customerQueue.join(", "));
  } else {
    alert("Invalid number! Please enter a valid customer number.");
  }
}
function startQueueSystem() {
  alert("Welcome to the Queueing System!");


  for (let i = 0; i < 5; i++) {
    addCustomer();
  }

  while (customerQueue.length > 0) {
    serviceCustomer();
  }

  alert("All customers have been serviced. Thank you!");
}

startQueueSystem();
