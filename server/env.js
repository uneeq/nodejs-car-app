module.exports = {
	development: {
		db: 'mongodb+srv://nikita-user:nikita-password@nodejs.nzsos.mongodb.net/test',
		port: process.env.PORT || 3000
    },
    production: {
        db: process.env.MONGODB_URI || 'please provide valid URI',
        port: process.env.PORT || 80
    }
}