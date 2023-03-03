const main = async () => {
  const [owner, anyPerson] = await hre.ethers.getSigners();
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();
  console.log("Contract deployed to:", waveContract.address);

  console.log("Contract deployed by:", owner.address);

  await waveContract.getTotalWaves();

  const txns = await waveContract.wave();
  await txns.wait();

  await waveContract.getTotalWaves();

  const secondTxns = await waveContract.connect(anyPerson).wave();
  await secondTxns.wait();

  await waveContract.getTotalWaves();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
