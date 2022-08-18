const express = require("express");
const imgRouter = express();
const Images = require("../models/ımageModels");

imgRouter.get("/" , async (req,res) => {
          try {
                    const bulunanImageler = await Images.find({});
                    res.json(bulunanImageler);
                    
          } catch (error) {
                    console.log("veriler getirilirken hata oluştu : "+error);
          }
});
imgRouter.post("/", async (req,res) => {
          const gonderilenSonuc = new Images(req.body);
          const sonuc = await gonderilenSonuc.save();
          res.json({
                    mesaj:"ekleme işlemi başarılı",
                    yeni_eleman : sonuc
          });
});
imgRouter.patch("/:id", async(req,res) => {
          try {
                    const guncellenecekVeri = await Images.findByIdAndUpdate({_id : req.params.id},req.body);
                    if (guncellenecekVeri) {
                              res.json({
                                        mesaj : `${req.params.id} id'li veri güncellendi.`,
                                        "verinin yeni hali" : req.body
                              })
                    }else{
                              res.status(404).json({
                                        mesaj : `${req.params.id} id'li veri bulunamadı.`,
                              })
                    }
                    
          } catch (error) {
                    res.json({
                              mesaj : "veriyi güncellerken hata oluştu : "+error
                    });
          }

          
});

imgRouter.delete("/:id",async(req,res) => {
          try {
                    const silinenVeri = await Images.findByIdAndDelete({_id : req.params.id});
                    if (silinenVeri) {
                              res.json({
                                        mesaj : `${req.params.id} id'li veri silindi.`,
                                        silinen_veri : silinenVeri
                              })
                    } else {
                              res.status(404).json({
                                        mesaj : `${req.params.id} id'li veri bulunamadı.`,
                              })
                    }
          } catch (error) {
                    res.json({
                              mesaj : `${req.params.id} id'li dosya silinirken bir hata oluştu : ` + error
                    })
          }
})


module.exports = imgRouter;