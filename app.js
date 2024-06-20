const express   = require('express')
const app       = express()
const port      = 3000


app.set('view engine', 'ejs')   //setting penggunaan template engine untuk express
app.set('views', './view-ejs')  //setting penggunaan folder untuk menyimpan file .ejs


app.get('/', (req,res)=>{
    res.render('index')
})


app.get('/profil', (req,res)=>{
    res.render('profil')
})


app.get('/pengalaman', (req,res)=>{
    res.render('daftar-pengalaman', {
        nama: 'Aji Kowiyu Uzumaki',
        jenis_kelamin: 'L',
        posisi: 'Sr. Programmer',
        perusahaan: 'Agung Podomoro',
        gaji: 9557000,
        pajak: (this.gaji > 10000000) ? 'gaji anda kena pajak' : 'aman, gak perlu bayar pajak',
    })
})


app.get('/karyawan', async (req,res)=>{
    const m_karyawan = require('./model/m_karyawan')
    let dataview = {
        semua_karyawan: await m_karyawan.get_semua_karyawan(),
    }
    res.render('karyawan/all', dataview)
})


app.get('/karyawan/detail/:id_karyawan', async (req,res)=>{
    const m_karyawan = require('./model/m_karyawan')
    const id = req.params.id_karyawan
    let dataview = {
        detail_karyawan: await m_karyawan.get_satu_karyawan(id),
    }
    res.render('karyawan/detail', dataview)
})


app.listen(port, ()=>{
    console.log(`App sudah siap, buka http://localhost:${port}`)
})