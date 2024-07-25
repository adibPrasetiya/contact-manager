import { app } from "./app/server.js";
import { initVault } from "./app/vault.js";
import { APP_PORT } from "./configs/constanta-config.js";

app.listen(APP_PORT || 3000, () => {
  console.log(`SERVER RUNING ON PORT ${APP_PORT || 3000}`);
  // inisialisasi koneksi ke vault server
  initVault();
});
