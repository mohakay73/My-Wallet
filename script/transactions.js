import { ethers } from './ethers.min.js';
import { provider } from './app.js';

const accountInput = document.querySelector('#accountNumber');
const checkButton = document.querySelector('#checkBalance');
const displayBalance = document.querySelector('#balance');
const sendButton = document.querySelector('#sendTx');
const amountInput = document.querySelector('#amount');
const toAccount = document.querySelector('#toAccountNumber');

let account;
let signer;

function initApp() {}

export async function checkBalance() {
  account = accountInput.value;
  const balance = await provider.getBalance(account);
  displayBalance.innerHTML = ethers.utils.formatEther(balance) + ' ETH';
}

async function sendTransaction() {
  signer = provider.getSigner(account);
  const transactionStatus = document.querySelector('#transactionStatus');
  try {
    const trx = await signer.sendTransaction({
      to: toAccount.value,
      value: ethers.utils.parseEther(amountInput.value),
    });

    await trx.wait();

    transactionStatus.innerHTML = 'Transaction completed successfully!';
    transactionStatus.style.color = 'green';
    setTimeout(() => {
      transactionStatus.innerHTML = '';
    }, 3000);
  } catch (error) {
    console.error('Transaction failed: ', error);
    transactionStatus.innerHTML = 'Transaction failed!';
    transactionStatus.style.color = 'red';
    setTimeout(() => {
      transactionStatus.innerHTML = '';
    }, 3000);
  }
}

document.addEventListener('DOMContentLoaded', initApp);
checkButton.addEventListener('click', checkBalance);
sendButton.addEventListener('click', sendTransaction);
