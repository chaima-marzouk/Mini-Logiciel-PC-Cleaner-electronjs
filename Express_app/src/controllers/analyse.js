import fs from'fs';
import path from 'path';
import getFolderSize from 'get-folder-size'


const  getFileSizee =  async ()=>{

    const myFolder = "C:/Users/Youcode/Desktop/test";
    const size = await getFolderSize.loose(myFolder);
    console.log(`The folder is ${size} bytes large`);
    console.log(`That is the same as ${(size / 1000 / 1000).toFixed(2)} MB`);

    // value.map(e=>{
    //     console.log(fs.lstatSync(path.dirname(e)).isFile());
    //   })

    

}

getFileSizee()

const nettoyer = () => {
    const myFolder = 'C:/Users/Youcode/Desktop/test/*';
   fs.unlink(myFolder, function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });
}

nettoyer()

// 