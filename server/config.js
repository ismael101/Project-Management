module.exports = {
    server_config:{
        port: process.env.PORT || 3000
    },
    database_config:{
        host:process.env.HOST || "mongodb://ismael101:password101@ds227332.mlab.com:27332/project_management"
    },
    encrypt_config:{
        rounds: process.env.SALTS || 10,
        key: process.env.KEY || '2I3U1B8F2Y8WGBUCDHB2IUH3YQWBCSDIC'
    }
}