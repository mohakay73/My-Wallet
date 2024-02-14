import { ethers } from './ethers.min.js';

const accountInput = document.querySelector('#accountNumber');
const checkButton = document.querySelector('#checkBalance');
const displayBalance = document.querySelector('#balance');
const sendButton = document.querySelector('#sendTx');
const amountInput = document.querySelector('#amount');
const toAccount = document.querySelector('#toAccountNumber');

const provider = new ethers.providers.JsonRpcProvider('HTTP://127.0.0.1:7545');

let account;
let signer;

function initApp() {
  console.log(ethers);
}

async function checkBalance() {
  account = accountInput.value;
  const balance = await provider.getBalance(account);
  console.log(`${balance} ETH`);
  displayBalance.innerHTML = `${balance} ETH`;
  displayBalance.innerHTML = ethers.utils.formatEther(balance);
}

async function sendTransaction() {
  signer = provider.getSigner(account);
  const trx = await signer.sendTransaction({
    to: toAccount.value,
    value: ethers.utils.parseEther(amountInput.value),
  });
  console.log(trx);
}

document.addEventListener('DOMContentLoaded', initApp);
checkButton.addEventListener('click', checkBalance);
sendButton.addEventListener('click', sendTransaction);
