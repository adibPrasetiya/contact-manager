import vault from "node-vault";
import { VAULT_ENDPOINT, VAULT_TOKEN } from "../configs/constanta-config.js";

const vaultClient = vault({
  endpoint: VAULT_ENDPOINT,
  token: VAULT_TOKEN,
});

const initVault = async () => {
  try {
    // mengaktifkan tarnsit secret engine
    await vaultClient.mount({ mount_point: "transit", type: "transit" });

    // membuat kunci enkripsi
    await vaultClient.write("transit/keys/my-key");
    console.log("INISIALISASI VAULT DAN KUNCI ENKRIPSI BERHASIL DILAKUKAN");
  } catch (error) {
    if (error.message && error.message.includes("path is already in use")) {
      console.log("Transit secret engine sudah diaktifkan");
    } else {
      console.log("Error inisialisasi vault: ", error.message);
    }
  }
};

const encryptData = async (data) => {
  const result = await vaultClient.write("transit/encrypt/my-key", {
    plaintext: Buffer.from(data).toString("base64"),
  });
  return result.data.ciphertext;
};

const decryptData = async (ciphertext) => {
  const result = await vaultClient.write("transit/decrypt/my-key", {
    ciphertext,
  });
  return Buffer.from(result.data.plaintext, "base64").toString("utf-8");
};

export { initVault, encryptData, decryptData };
