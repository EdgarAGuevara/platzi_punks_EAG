
const deploy = async () => {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contract with the account: ", deployer.address);

  const PlatziPunksEAG = await ethers.getContractFactory("PlatziPunksEAG");

  const deployed = await PlatziPunksEAG.deploy();

  console.log("PLastzi punks EAG is deployed at: ", deployed.address);

}

deploy().then(() => process.exit(0)).catch(error => {
  console.log(error);
  process.exit(1);
});