import collatz from "collatz-series";
import _ from "lodash";

export const partitionCollatzSeries = (n: number): number => (
  _.partition(collatz(n), (n: number) => n % 2)
);
