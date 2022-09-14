const multer = require('multer')
const shortid = require('shortid')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate()+'-'+file.originalname)
    }
  })

  const upload = multer({ storage: storage })

  module.exports = upload