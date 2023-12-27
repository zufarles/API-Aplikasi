const barangModel = require('../models/barang')

exports.create = (data) =>
  new Promise((resolve, reject) => {
    barangModel.create(data)
      .then(() => {
        resolve({
          sukses: true,
          msg: 'Berhasil Menyimpan Data'
        })
      }).catch((e) => {
        console.log(e)
        reject({
          sukses: false,
          msg: 'Gagal Menyimpan Data'
        })
      })
  })

exports.getData = () =>
  new Promise((resolve, reject) => {
    barangModel.find({})
      .then(res => {
        resolve({
          sukses: true,
          msg: 'Berhasil Mengambil Data',
          data: res
        })
      }).catch(() => reject({
        sukses: false,
        msg: 'Gagal Mengmabil Data',
        data: []
      }))
  })

exports.getById = (id) =>
  new Promise((resolve, reject) => {
    barangModel.findOne({
      _id: id
    })
      .then(res => {
        resolve({
          sukses: true,
          msg: 'Berhasil Mengambil Data',
          data: res
        })
      }).catch(() => reject({
        sukses: false,
        msg: 'Gagal Mengmabil Data',
        data: {}
      }))
  })

exports.edit = (id, data) =>
  new Promise((resolve, reject) => {
    barangModel.updateOne({
      _id: id
    }, data).then(() => resolve({
      sukses: true,
      msg: 'Berhasil Edit Data'
    })).catch(() => reject({
      sukses: false,
      msg: 'Gagal Edit Data'
    }))
  })
  exports.updateStock = (id, newStock) =>
  new Promise((resolve, reject) => {
    barangModel.findByIdAndUpdate(
      id,
      { $set: { stock: newStock } },
      { new: true }
    ).then((updatedData) => resolve({
      sukses: true,
      msg: 'Berhasil Update Stock',
      data: updatedData
    })).catch(() => reject({
      sukses: false,
      msg: 'Gagal Update Stock'
    }))
  })
exports.delete = (id) =>
  new Promise((resolve, reject) => {
    barangModel.deleteOne({
      _id: id
    }).then(() => resolve({
      sukses: true,
      msg: 'Berhasil Hapus Data'
    })).catch(() => reject({
      sukses: false,
      msg: 'Gagal Hapus Data'
    }))
  })