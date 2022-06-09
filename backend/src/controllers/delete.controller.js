const fs = require("fs");
let path = "C:/Users/Youcode/Desktop/Test";

const vide = (req, res) => {
  let files = fs.readdirSync(`${path}`);
  files.forEach((file) => {
    try {
      let stat = fs.lstatSync(`${path}` + "/" + `${file}`);
      console.log(`${path}` + "/" + `${file}`)
      if (stat.isDirectory() == true) {
        path = `${path}/${file}`;
        files = fs.readdirSync(`${path}`);
        console.log(files)
        vide();
        path = "C:/Users/Youcode/Desktop/Test";
      } else {
        fs.unlinkSync(`${path}` + "/" + `${file}`, (err) => {
          if (!err) {
              console.log('file deleted')
            res.json(
              { message: "File Delete Successfuly "},
              { time: new Date().toDateString() }
            );
          } else {
            console.log(err, "File not found");
          }
        });
      }
    } catch (e) {
      return false;
    }
  });
};

// vide()

module.exports = {
  vide,
};