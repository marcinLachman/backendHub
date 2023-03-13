import hubsSchema from "../models/hubsSchema.js";

export const getAllDataHubs = async (req, res) => {
  try {
    const data = await hubsSchema.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: `${error.message} - cant get Data` });
  }
};

export const getHubDAtaById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await hubsSchema.findById(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  };
};

export const postDataHubs =  async (req, res) => {
  try {
    const imageArray = [];
    req.files.forEach(element => {
      const file = {
        FileName: new Date().toISOString().substring(0, 10) + '-' + element.originalname
      }
    imageArray.push(file);
    });

    const hubs = new hubsSchema({
      name: req.body.name,
      content: req.body.content,
      price: req.body.price,
      oldPrice: req.body.oldPrice, 
      lang: req.body.lang,
      bookingHouers: req.body.bookingHouers.split(','),
      bookingAdults: req.body.bookingAdults.split(','),
      bookingChilds: req.body.bookingChilds.split(','),
      quantityHub: req.body.quantityHub,
      image: imageArray,
    });
    const data = await hubs.save();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: `${error.message} - route add error` });
  }
};