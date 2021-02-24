const multer = require('multer');
const path = require('path')
const crypto = require('crypto');
var sftpStorage = require('multer-sftp')

module.exports = {
    //Dest: path.join('public_html','_imagens'), 
    storage: sftpStorage({
    sftp: {
      host: 'valferraco.com.br',
      port: 22,
      username: 'valferraco1',
      password: 'Valferraco115952@'
    },
    destination: function (req, file, cb) {
      cb(null, path.join('\\public_html','_imagens')) // designation folder in host
    },
    filename: function (req, file, cb) {
      // file name settings
      cb(null, file.originalname)
    },
    
  }),
    limits: {
        fileSize: 2 * 1024 * 1024,
        fileFilter: (req, file , cb) => {
        const allowMines =[      
            'image/jpge',
            'image/png',
            'image/pjpeg'
        ];
            if(allowMines.includes(file.mimeType)){
                console(null,true)
            }else{
                cb(new Error("Arquivo invalido"));
            }


        }
    },
    
}