const mongoose = require("mongoose");
const Schema = mongoose.Schema();
const databaseUrl = "mongodb://localhost/imageDatabase";


mongoose.connect(databaseUrl)
.then(()=>console.log("veritabanına bağlantı başarılı."))
.catch((err)=>console.log("bağlanma sırasında hata oluştu :"+err));
