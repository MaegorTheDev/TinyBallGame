namespace ut {
 
    export class JsonUtils {
   
      static loadAssetAsync(assetName: string, callback: (error?: any, jsonResponse?: any) => void): void {
        this.loadAsync(UT_ASSETS[assetName], callback);
      }
   
      static loadAsync(url: string, callback: (error?: any, jsonResponse?: any) => void): void {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
   
        xhr.onload = function () {
          var status = xhr.status;
          if (status == 200) {
            callback(null, xhr.response);
          } else {
            callback(status);
          }
        };
   
        xhr.send();
      }
    }
  }