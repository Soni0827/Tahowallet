import { verifySignatureZkNullifier } from './zk-nullifier-sig/verify_signature.js'
import { verifySignatureZkNullifier } from '../zk-nullifier-sig/javascript/signature';
import { privateKeyVerify } from './private-key';
import { signatureVerify } from './signature';
import { publicKeyConvert, publicKeyVerify } from './public-key';

export const verifySignature = async (address, message, signature) => {
    return verifySignatureZkNullifier(address, message, signature)
  }
  