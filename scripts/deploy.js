const hre = require("hardhat");
require("dotenv").config();

const {API_LINK} = process.env;

function getContractArguments(network) {
    return [API_LINK + `${network}/`];
}

async function main() {
    const network = hre.network.name;
    const contractArguments = getContractArguments(network);

    console.log("Starting deployment...");
    const omniHubFactory = await hre.ethers.deployContract("ERC721OmniHubFactory", contractArguments);
    console.log(`Deployed to ${omniHubFactory.target}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
