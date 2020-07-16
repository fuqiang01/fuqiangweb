upload.onchange = function (e) {
  const file = e.target.files[0];

  var reader = new FileReader();
  reader.onload = function (e) {
      var data = new Uint8Array(e.target.result);
      var workbook = XLSX.read(data, {
          type: 'array'
      });
      const importObj = workbook.Sheets.Sheet1;
      const exportObj = workbook.Sheets.Sheet2;
      let lock = false;
      for (const prop in importObj) {
          if (prop.indexOf('A') !== 0) continue;
          const importIndex = prop.slice(1);
          const importItem = importObj[prop];
          const importValue = importItem.v.replace(' ', '');
          for (const key in exportObj) {
              if (key.indexOf('A') !== 0) continue;
              const exportIndex = key.slice(1);
              const exportItem = exportObj[key];
              const exportValue = exportItem === undefined ? '' : exportItem.v.replace(' ', '');;

              if (importValue === exportValue) {
                  lock = true;
                  exportObj["B" + exportIndex] = importObj["B" + importIndex]
              }
          }
          if (!lock) {
              importObj["A" + importIndex] = {
                  v: importObj["A" + importIndex].v + '++++++',
                  t: importObj["A" + importIndex].t,
                  w: importObj["A" + importIndex].v + '++++++'
              }
          }
          lock = false;
      }

      var wopts = {
          bookType: 'xlsx',
          bookSST: false,
          type: 'array'
      };
      var wbout = XLSX.write(workbook, wopts);
      const blob = new Blob([wbout], {
          type: "application/octet-stream"
      });
      const aDom = document.createElement('a');
      const href = window.URL.createObjectURL(blob);
      aDom.href = href;
      aDom.download = 'test.xlsx';
      aDom.click();
      window.URL.revokeObjectURL(href);
  };
  reader.readAsArrayBuffer(file);
}