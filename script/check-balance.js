function initApp() {}

const CheckBlocks = document.querySelector('#blocks');
const transactionList = document.querySelector('#transactions');
const rpc = new Web3('HTTP://127.0.0.1:7545');

async function checkBlocks() {
  const block = await rpc.eth.getBlock('latest');

  if (block === null) return;

  const transactions = block.transactions;

  if (transactions != null) {
    displayHistory(transactions);
  }
}

function createTransactionList(transaction) {
  transactionList.innerHTML += `
    <span>${transaction.from}</span>
    <span>${transaction.to}</span>
    <span>${rpc.utils.fromWei(transaction.value, 'ether')} ETH</span>`;
}

async function displayHistory(transactions) {
  transactionList.innerHTML = '';
  for (let hash of transactions) {
    //Get transaction by its hash
    let trx = await rpc.eth.getTransaction(hash);
    console.log(trx);
    createTransactionList(trx);
  }
}

document.addEventListener('DOMContentLoaded', initApp);
CheckBlocks.addEventListener('click', checkBlocks);
