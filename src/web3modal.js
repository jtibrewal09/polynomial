import Web3 from "web3";
import Web3Modal from "web3modal";
// import WalletConnectProvider from "@walletconnect/web3-provider";

const providerOptions = {
    /* See Provider Options Section */
};

// const providerOptions = {
//     // Example with injected providers
//     injected: {
//         display: {
//             logo: "data:image/gif;base64,INSERT_BASE64_STRING",
//             name: "Injected",
//             description: "Connect with the provider in your Browser"
//         },
//         package: null
//     },
//     // Example with WalletConnect provider
//     walletconnect: {
//         display: {
//             logo: "data:image/gif;base64,INSERT_BASE64_STRING",
//             name: "Mobile",
//             description: "Scan qrcode with your mobile wallet"
//         },
//         package: WalletConnectProvider,
//         options: {
//             infuraId: "INFURA_ID" // required
//         }
//     }
// };

const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions // required
});

const provider = await web3Modal.connect();

const web3 = new Web3(provider);

export default { web3, provider };