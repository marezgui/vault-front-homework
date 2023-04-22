export const addressPreview = (address: string | undefined, length = 6) =>
  `${address?.slice(0, length)}...${address?.slice(-length)}`;
