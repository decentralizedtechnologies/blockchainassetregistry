export const isWeb3Compatible = (): boolean =>
  (window as any).ethereum !== undefined || (window as any).web3 !== undefined;

export const isEthereumEnabled = (): Promise<boolean> =>
  new Promise(async (resolve) => {
    const enable = await (window as any).ethereum.enable();
    resolve(isWeb3Compatible() && enable.length && enable.length > 0);
  });

export const enableEthereumWallet = async () => {
  const ethereum = (window as any).ethereum;
  if (typeof ethereum !== "undefined") {
    await ethereum.enable();
  }
};
