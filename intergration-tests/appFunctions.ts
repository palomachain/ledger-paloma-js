import { LCDClient, MsgInstantiateContract } from '@palomachain/paloma.js';
import { SignMode } from '@terra-money/terra.proto/cosmos/tx/signing/v1beta1/signing';
//import { LedgerKey } from '@terra-money/ledger-terra-js';//"../../devel/ledger-terra-js';
import { LedgerKey } from "../src";
import TransportNodeHid from '@ledgerhq/hw-transport-node-hid';

async function main() {
  const lk = await LedgerKey.create(await TransportNodeHid.create(60 * 1000));
  console.log(`accAddress: ${lk.accAddress} / publicKey: ${JSON.stringify(lk.publicKey)}`);

  console.log(lk.getAppInfo());
  console.log(lk.getAppVersion());
  console.log(await lk.getAppDeviceInfo());
  console.log(await lk.getAppPublicKey());
  console.log(await lk.getAppAddressAndPubKey());
  console.log(await lk.showAddressAndPubKey());

}

main().catch(console.error);

