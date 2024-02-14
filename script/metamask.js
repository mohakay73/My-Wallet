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
