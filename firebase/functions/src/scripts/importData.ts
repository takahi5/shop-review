import * as admin from "firebase-admin";
const serviceAccount = require("./key/review-app-sample-firebase-adminsdk");
//const shopSeeds = require("./seed/shops.json");
//
//admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

//const db = admin.firestore();

(async () => {
  console.log("test");
  //let batch = db.batch();
  //for (let key in shopSeeds) {
  //  let shopRef = db.collection("shops").doc(key);
  //  console.log(shopSeeds[key]);
  //  batch.set(shopRef, shopSeeds[key], { merge: true });
  //}
  //await batch.commit();
})();
