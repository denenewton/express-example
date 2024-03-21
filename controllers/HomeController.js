import Photo from "../models/Photo.js";


class HomeController {
  async index(req, res) {
    try {
      const imagens = await Photo.find().sort('originalname')
      console.log(imagens);
      return res.status(200).json(imagens)
    } catch (error) {
      return res.status(501).json({
        menssage: 'Something goes wrong on the server...'
      })
    }
  }
}

export default new HomeController()