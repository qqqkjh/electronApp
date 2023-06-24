const { dialog } = require('electron');
const fs = require('fs');
const osenv = require('osenv');
const generateClassFile = ()=>{
  dialog.showSaveDialog({
      title: 'Select Output Path',
      defaultPath: 'MyClass.cs',
      filters: [
        { name: 'C# Class Files', extensions: ['cs'] },
        { name: 'All Files', extensions: ['*'] }
      ]
    }).then(result => {
      if (!result.canceled && result.filePath) {
        const outputPath = result.filePath;
  
        const classCode = `
  using System;
  
  namespace MyNamespace
  {
      public class MyClass
      {
          private string myField;
  
          public MyClass(string initialValue)
          {
              myField = initialValue;
          }
  
          public void MyMethod()
          {
              Console.WriteLine("Hello, World! My field value is: " + myField);
          }
      }
  }
  `;
  
        fs.writeFile(outputPath, classCode, (err) => {
          if (err) throw err;
          console.log(`C# class file created at ${outputPath}`);
        });
      }
    }).catch(err => {
      console.error(`Error selecting output path: ${err}`);
    });

  }
module.exports = { 
  generateClassFile 
}
