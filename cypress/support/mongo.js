const dns = require('node:dns').promises
const { MongoClient } = require('mongodb')

require('dotenv').config()

const mongoUri = process.env.MONG_URI

const client = new MongoClient(mongoUri)

async function connect() {
    dns.setServers(['8.8.8.8', '1.1.1.1'])
    await client.connect()

    return client.db('markdb')
}

async function disconnect() {
    await client.disconnect()
}

module.exports = { connect, disconnect }