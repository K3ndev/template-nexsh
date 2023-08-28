export type useIsDivVisibleType = {
  divRef: React.RefObject<HTMLDivElement>;
  threshold: number | number[]; // or [0, 0.25, 0.5, 0.75, 1]
};
