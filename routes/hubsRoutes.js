import express from 'express';
import multer from 'multer';

import {
  getAllDataHubs,
  postDataHubs,
  getHubDAtaById
} from '../controllers/hubsControllers.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images')
  },

  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + new Date().toISOString().substring(0, 10) + '-' + file.originalname); 
  }
});

const upload = multer({ 
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
});

router.get('/hubs/', getAllDataHubs);
router.get('/hubs/:id', getHubDAtaById);
router.post('/hubs/', upload.array('images', 5), postDataHubs);

export default router;