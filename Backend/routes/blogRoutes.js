const multer = require('multer');
const { uploadImage } = require('../controllers/blogController');

const upload = multer({ dest: 'uploads/' }); // Temp storage
router.post('/upload', authMiddleware.auth, upload.single('image'), uploadImage);
