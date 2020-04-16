import * as admin from "firebase-admin";
const serviceAccount = require("../../../key/shop-review-firebase-adminsdk.json");
const shopSeeds = require("../../../seed/shops.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://shop-review-dc102.firebaseio.com",
});

const db = admin.firestore();

(async () => {
  let batch = db.batch();
  for (let key in shopSeeds) {
    let shopRef = db.collection("shops").doc(key);
    batch.set(shopRef, shopSeeds[key], { merge: true });
  }
  await batch.commit();
})();
