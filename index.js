const express = require('express')
const path = require('path')
const crypto = require('crypto')
const mysql = require('mysql2/promise')
const app = express()
const port = 3000

// Konfigurasi koneksi MySQL
const dbConfig = {
  host: 'localhost',
  user: 'root',           
  password: 'Ayah.280270*',           
  database: 'api_key_generat',
  port: 3309,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
}
