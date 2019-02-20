原生实现ajax
```javascript 

    var url = '';
    var result;

    var XHR = new XMLHttpRequest();

    XHR.open('GET',url,true);
    XHR.send();

    XHR.onreadystatechange = function() {
        if(XHR.readyState == 4 && XHR.status == 200){
            result = XHR.response;
        }
    }
```