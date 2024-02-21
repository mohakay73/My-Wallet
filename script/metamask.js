const connectButton = document.querySelector('#connect');
const accountInput = document.querySelector('#accountNumber');
const checkBalanceButton = document.querySelector('#checkBalance');
const displayBalance = document.querySelector('#balance');
const sendButton = document.querySelector('#sendTx');
const toAccountInput = document.querySelector('#toAccountNumber');
const valueInput = document.querySelector('#amount');

let acccounts;

async function connect() {
  if (typeof window.ethereum !== 'undefined') {
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
    } catch (error) {
      displayErrorMessage(error.message);
    }
  } else {
    displayErrorMessage(
      'Metamask is required to connect. Please install Metamask and try again.'
    );
  }
}

async function checkBalance() {
  if (typeof ethereum !== 'undefined') {
    try {
      acccounts = await ethereum.request({ method: 'eth_requestAccounts' });

      const balance = await ethereum.request({
        method: 'eth_getBalance',
        params: [accountInput.value, 'latest'],
      });
      const parsedBalance = parseInt(balance, 10) / Math.pow(10, 18);
      displayBalance.innerText = `${parsedBalance} ETH`;
    } catch (error) {
      displayErrorMessage('Failed to fetch balance. Please try again.');
    }
  } else {
    displayErrorMessage(
      'Ethereum object not found. Please ensure you have MetaMask installed.'
    );
  }
}

async function sendFunds() {
  try {
    const amount = parseFloat(valueInput.value) * Math.pow(10, 18);
    let params = [
      {
        from: accountInput.value,
        to: toAccountInput.value,
        value: Number(amount).toString(16),
        gas: Number(21000).toString(16),
        gasPrice: Number(2500000).toString(16),
      },
    ];

    const response = await ethereum.request({
      method: 'eth_sendTransaction',
      params: params,
    });
  } catch (error) {
    console.log(error);
  }
}

function displayErrorMessage(message) {
  const errorMessageElement = document.getElementById('error-message');
  if (errorMessageElement) {
    errorMessageElement.innerText = message;
    errorMessageElement.style.display = 'block';
    setTimeout(() => {
      errorMessageElement.style.display = 'none';
    }, 3000);
  } else {
    console.error(message);
  }
}

checkBalanceButton.addEventListener('click', checkBalance);
sendButton.addEventListener('click', sendFunds);
connectButton.addEventListener('click', connect);
