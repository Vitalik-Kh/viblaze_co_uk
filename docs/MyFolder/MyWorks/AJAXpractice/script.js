//JS AJAX
function clearAnsw(x) {
    document.getElementById(x).innerHTML = '';
}
//onreadystatechange
function ajaxTxt() {
    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('ajax-txt').innerHTML =
            this.responseText;
        }
    };
    xhttp.open('GET', 'ajax_info.txt', true);
    xhttp.send();
}

//callback function
function ajaxCallback() {
    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            ajaxCBackFunc(this);
        }
    }
    xhttp.open('GET', 'ajax_info.txt', true);
    xhttp.send();
}
function ajaxCBackFunc(x) {
    document.getElementById('ajax-callback').innerHTML =
    x.responseText;
}

//getAllResponseHeaders()
function ajaxHeaders() {
    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('ajax-headers').innerHTML =
            this.getAllResponseHeaders();
        }
    }
    xhttp.open('GET', 'ajax_info.txt', true);
    xhttp.send();
}

//XML data to HTML table
function ajaxTable() {
    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
            tableFunc(this);
        }
    }
    xhttp.open('GET', 'xml_catalogue.xml', true);
    xhttp.send();
    function tableFunc(x) {
        var table = '<tr><th>Artist</th><th>Title</th></tr>',
        xmlData = x.responseXML, 
        artist, title,
        cd = xmlData.getElementsByTagName('CD');
        for (i = 0; i < cd.length; i++) {                       
            artist = cd[i].getElementsByTagName('ARTIST')[0].childNodes[0].nodeValue;
            title = cd[i].getElementsByTagName('TITLE')[0].childNodes[0].nodeValue;
            table += '<tr><td>' + artist + '</td><td>' + title + '</td></tr>';
        }
        console.log(table);
        document.getElementById('ajax-table').innerHTML = table;
    }
}

//Navigate through XML nodes
var ajaxCDList;
function dispNavFunc(item) {
    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var xmlDoc = this.responseXML;
            var artistArr = [];
            var cd = xmlDoc.getElementsByTagName('CD')[item];
            ajaxCDList = xmlDoc.getElementsByTagName('CD');
            artistArr.push('Artist: ' +
            cd.getElementsByTagName('ARTIST')[0].firstChild.nodeValue);
            artistArr.push('Title: ' + 
            cd.getElementsByTagName('TITLE')[0].firstChild.nodeValue);
            artistArr.push('Year: ' + 
            cd.getElementsByTagName('YEAR')[0].firstChild.nodeValue);
            
            var listItem = document.getElementById('ajax-nav-ul').getElementsByTagName('li');
            for (i=0; i<listItem.length; i++) {
                listItem[i].innerHTML = artistArr[i];
            }
        }
    }
    xhttp.open('GET', 'xml_catalogue.xml', true);
    xhttp.send();
}
var ajaxCount = 0;
dispNavFunc(ajaxCount);
function ajaxBackBtn() {
    if (ajaxCount > 0) {
        ajaxCount--;
        dispNavFunc(ajaxCount);
    }
}
function ajaxForwBtn() {
    if (ajaxCount < (ajaxCDList.length-1)) {
        ajaxCount++;
        dispNavFunc(ajaxCount);
    }
}

//A simple CD catalogue application
function ajaxCatalogue() {
    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            displayCatTable(this.responseXML);
        }
    }
    xhttp.open('GET', 'xml_catalogue.xml', true);
    xhttp.send();
}

function displayCatTable(x) {
    cd = x.getElementsByTagName('CD');
    var table = '<tr><th>Artist</th><th>Title</th></tr>';
    for (i=0; i<cd.length; i++) {
        document.getElementById('ajax-table-c').innerHTML =
        table +=
        '<tr onclick="openCD(' + i + ')"><td>' +
        cd[i].getElementsByTagName('ARTIST')[0].firstChild.nodeValue +
        '</td><td>' +
        cd[i].getElementsByTagName('TITLE')[0].firstChild.nodeValue +
        '</td></tr>';
    }
    
}
function openCD(i) {
    document.getElementById('ajax-catalogue').innerHTML =
    'Artist: ' + 
    cd[i].getElementsByTagName('ARTIST')[0].firstChild.nodeValue + 
    '<br> Title: ' +
    cd[i].getElementsByTagName('TITLE')[0].firstChild.nodeValue +
    '<br> Year: ' +
    cd[i].getElementsByTagName('YEAR')[0].firstChild.nodeValue;
    
}