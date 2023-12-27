const mongoose = require('mongoose')
const Schema = mongoose.Schema

const barangSchema = new Schema({
    nama: {
        type: String
    },
    merek: {
      type: String
    },
    stock: {
      type: Number
    },
    harga: {
      type: Number
    },
    deskripsi: {
      type: String
    },
    gambar: {
      type: String
    }
})

module.exports = mongoose.model('barang', barangSchema)