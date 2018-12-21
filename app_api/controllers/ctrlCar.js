import Car from "../models/cars";

const arabalarıListele = function(req,res) {
    Car.find().then((err,cars) => {
        if(err)
            res.send(err);
        else
            res.json(cars);
    });
};

const arabaListele = function(req,res){
    Car.findById(req.params.id,(err,car) => {
        if(err)
            console.log(err);
        else
            res.json(car);
    });
};

const arabaEkle = function(req,res) {
    let car = new Car(req.body);
    car.save().then((err,car) => {
        if(err) 
            res.send(err);
        else
            res.json(car);
    });
};

const arabaGuncelle = function(req,res) {
    var id = req.params.id;

    Car.findById(id,(err,car) => {
        if(!car) 
            res.send("ARABA YOK");
        else {
        
        car.ücret = req.body.ücret;
        car.yil = req.body.yil;
        car.marka = req.body.marka;

        car.save().then(car => {
            res.send("Update done");
        }).catch(err => {
            res.send("Update failed");
        })
    }
    })

}


const arabaSil = function(req,res) {
    var id = req.params.id;
    if(id) {
        Car.findByIdAndRemove(id,(err) => {
            if(err) 
                res.send(err);
            res.send("BAŞARIYLA SİLİNDİ");
        })
    }else {
        res.send("id yok");
    }
}
module.exports = {arabalarıListele,arabaListele,arabaEkle,arabaGuncelle,arabaSil};