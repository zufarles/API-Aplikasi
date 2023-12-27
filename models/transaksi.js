const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectId = mongoose.Types.ObjectId;

const transaksiSchema = new Schema({
    idBarang: {
        type: objectId,
    },
    idUser: {
        type: objectId,
    },
    jumlah: {
        type: Number,
    },
    harga: {
        type: Number,
    },
    total: {
        type: Number,
    },
    tanggal: {
        type: Date,
        default: new Date().toLocaleDateString(),
    },
    lamaSewa: {
        type: Number, 
    },
    status: {
        type: Number,
        default: 0,
    },
    buktiPembayaran: {
        type: String,
    },
});

// Fungsi middleware untuk menghitung lama sewa sebelum menyimpan atau memperbarui transaksi
transaksiSchema.pre('save', function (next) {
    if (this.isNew || this.isModified('tanggal')) {
        // Jika transaksi baru atau tanggal diubah, hitung lama sewa
        this.lamaSewa = this.hitungLamaSewa();
    }
    next();
});

transaksiSchema.methods.hitungLamaSewa = function () {
    // Fungsi untuk menghitung lama sewa dalam hari
    const startDate = new Date(this.tanggal);
    const endDate = new Date();
    return Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
};

module.exports = mongoose.model('transaksi', transaksiSchema);
