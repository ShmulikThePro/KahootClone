'use server'

import fs from 'fs'
import path from 'path' ;
import { nanoid } from 'nanoid' ;

export default async function getStaticProps(newData) {
  // Path to the JSON file
  const filePath = path.resolve('src/app/server.json') ;

  // Read the JSON file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading JSON file:', err) ;
      return ;
    }

    // Parse JSON data
    const jsonData = JSON.parse(data) ;
    const date = new Date() ;

    console.log(jsonData, newData) ;

    newData.id = nanoid() ;
    newData.previewImg = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' ;
    newData.updatedAt = 
      String(date.getDate()).padStart(2, '0') + '/' +
      String(date.getMonth() + 1).padStart(2, '0') + '/' +
      String(date.getFullYear()) + ' ' +
      String(date.getHours()).padStart(2, '0') + ':' + 
      String(date.getMinutes()).padStart(2, '0') + ':' + 
      String(date.getSeconds()).padStart(2, '0') ;

    jsonData.push(newData)

    // Modify JSON data (for example, add a new key-value pair)

    // Write the modified JSON back to the file
    fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
      if (err) {
        console.error('Error writing JSON file:', err) ;
        return ;
      }
      console.log('JSON file has been updated.') ;
    }) ;
  }) ;
}
