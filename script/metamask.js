console.log(window.ethereum);
const connectButton = document.querySelector('#connect');

async function connect() {
  if (typeof window.ethereum != undefined) {
    console.log('Va kul att ethereum är på plats');
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    console.log(accounts);
  } else {
    console.log('Va synd, du måste ha Metamask installerat');
  }
}

connectButton.addEventListener('click', connect);

const accountInput = document.querySelector('#accountNumber');
const checkBalanceButton = document.querySelector('#checkBalance');
const displayBalance = document.querySelector('#balance');
const sendButton = document.querySelector('#sendTx');
const toAccountInput = document.querySelector('#toAccountNumber');
const valueInput = document.querySelector('#amount');

let acccounts;

async function checkBalance() {
  if (typeof ethereum !== undefined) {
    acccounts = await ethereum.request({ method: 'eth_requestAccounts' });
  } else {
    console.log('No ethereum');
  }
}

async function sendFunds() {
  try {
  } catch (error) {
    console.log(error);
  }
}

checkBalanceButton.addEventListener('click', checkBalance);
sendButton.addEventListener('click', sendFunds);
