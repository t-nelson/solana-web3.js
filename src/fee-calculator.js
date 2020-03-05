// @flow
import * as Layout from './layout';

/**
 * https://github.com/solana-labs/solana/blob/90bedd7e067b5b8f3ddbb45da00a4e9cabb22c62/sdk/src/fee_calculator.rs#L7-L11
 *
 * @private
 */
const FeeCalculatorLayout = BufferLayout.struct([
  Layout.uint64('lamportsPerSignature'),
]);

/**
 * @typedef {Object} FeeCalculator
 * @property {number} lamportsPerSignature lamports Cost in lamports to validate a signature
 */
export class FeeCalculator = {
  lamportsPerSignature: number;

  /**
   * Deserialize FeeCalculator from account data.
   *
   * @param buffer account data
   * @return FeeCalculator
   */
  static fromAccountData(buffer: Buffer): FeeCalculator {
    const feeCalculator = FeeCalculatorLayout.decode(buffer, 0);
    return feeCalculator;
  }
};
