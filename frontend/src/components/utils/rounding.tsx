const floorToFixed = (cost: number, decimals: number) => (
  (Math.floor(cost * 10 ** decimals) / 10 ** decimals).toFixed(decimals)
);

export default floorToFixed;
