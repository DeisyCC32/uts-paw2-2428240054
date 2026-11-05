const mongoose = require('mongoose');

const kamarKos = new mongoose.Schema({
  kodeKamar: String,
  nama: String
}, { _id: false });

const kosSchema = new mongoose.Schema({
  nama: { type: String, required: [true, 'nama wajib diisi'], trim: true },
  kodeKamar: { type: String, required: [true, 'nim wajib diisi'], unique: true, trim: true },
  pelangganId: { type: mongoose.Schema.Types.ObjectId, ref: 'Prodi' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('kamarkos', kosSchema);