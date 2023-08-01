// app.js
const contractAddress = 'CONTRACT_ADDRESS'; // Replace with the deployed contract address
const abi = [...]; // Replace with the ABI of the deployed contract

const web3 = new Web3(Web3.givenProvider);
const tokenSwapContract = new web3.eth.Contract(abi, contractAddress);

async function swapTokens() {
  const amountIn = document.getElementById('amountIn').value;
  const accounts = await web3.eth.requestAccounts();

  try {
    await tokenSwapContract.methods.swap(amountIn).send({ from: accounts[0] });
    alert('Swap successful!');
  } catch (err) {
    console.error('Error during swap:', err);
    alert('Error during swap. Check the console for more details.');
  }
}
