import multer from "multer";
import path from 'path'

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000)
export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('Arquivo precisa ser PNG ou JPG.'), false);
    }
    if (file === undefined) {
      return cb(new multer.MulterError('Você esqueceu de selecionar o arquivo.'), false);
    }

    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, '..', 'images'))
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${path.extname(file.originalname)}`)
    }
  })
}
