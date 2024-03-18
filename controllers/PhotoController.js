import multer from 'multer'
import multerConfig from '../config/multerConfig.js'
import Photo from '../models/Photo.js'

const upload = multer(multerConfig).single('photo')

class PhotoController {
  async store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err]
        })
      }
      const { filename, originalname, path, mimetype } = req.file

      const _photo = await Photo.create({
        originalname,
        filename,
        mimetype,
        path,
      })

      return res.status(200).json(_photo)
    })
  }
}



export default new PhotoController()