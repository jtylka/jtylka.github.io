function generateNavigationMenu(url){
  var urlSplit = url.split("/");
  var page = urlSplit[urlSplit.length-1];
  if (page == 'jtylka.github.io' || page == 'index.html' || page == '') {
    page = '.';
  }
  alert(page);
  var pageLinks = ['.','Projects.html','Publications.html','Patents.html'];
  var pageNames = ['Home','Projects','Publications','Patents'];
  var htmlOut = '';
  for (var ii=0; ii<pageLinks.length; ii++){
    var pageName = pageNames[ii];
    if (page == pageLinks[ii]) {
      pageName = ('<b>' + pageName + '</b>');
    }
    htmlOut = htmlOut + ('<th><a class="menu" href="' + pageLinks[ii] + '">' + pageName + '</a></th>');
  }
  return htmlOut;
}

function parseBib(file){
  var entries = file.split("\n@");
  var bibArray = [];
  for (var ii=0; ii<entries.length; ii++){
    var entry = entries[ii];
    var entrytitle = trimBounds(pullBibItem(entry,"title ="));
    var entryyear = trimBounds(pullBibItem(entry,"year ="));
    var entryurl = trimBounds(pullBibItem(entry,"url ="));
    var entrydoi = trimBounds(pullBibItem(entry,"doi ="));
    bibArray[ii] = {title:entrytitle, year:entryyear, url:entryurl, doi:entrydoi};
  }
  bibArray.sort(function(a, b){return b["year"] - a["year"]});
  return bibArray;
}

function pullBibItem(str,key){
  var pos1 = str.indexOf(key);
  if (pos1 == -1) {
    return "";
  }
  var pos2 = str.indexOf("\n",pos1);
  var item = str.slice(pos1+key.length,pos2);
  return item.trim();
}

function trimBounds(str){
  var delimPos = 0;
  var pos1 = 0;
  var pos2 = str.length;

  delimPos = Math.max(0,str.indexOf('{'));
  pos1 = (delimPos > 3) ? pos1 : delimPos;
  delimPos = Math.max(0,str.indexOf('"'));
  pos1 = (delimPos > 3) ? pos1 : delimPos;

  delimPos = str.lastIndexOf('}');
  pos2 = (delimPos < (str.length - 3)) ? pos2 : delimPos;
  delimPos = str.lastIndexOf('"');
  pos2 = (delimPos < (str.length - 3)) ? pos2 : delimPos;

  return str.slice(pos1+1,pos2);
}

function printTable(array){
  var htmlOut = '';
  for (var ii=0; ii<array.length; ii++){
    var htmlTitle = array[ii]["title"];
    if (array[ii]["url"].length > 0){
      htmlTitle = '<a href="' + array[ii]["url"] + '" target="_blank">' + htmlTitle + '</a>';
    } else if (array[ii]["doi"].length > 0) {
      htmlTitle = '<a href="http://dx.doi.org/' + array[ii]["doi"] + '" target="_blank">' + htmlTitle + '</a>';
    }
    htmlOut = htmlOut +'<tr><td>'+ (ii+1).toString() +'</td><td>'+ htmlTitle +'</td><td>'+ array[ii]["year"] +'</td></tr>\n';
  }
  return htmlOut;
}

function composeEmailAddress(){
  var mailPreFix = 'josephgt';
  var mailDomain = 'alumni.princeton.edu';
  var mailAddr = (mailPreFix + '@' + mailDomain);
  var mailHtml = ('<th><a class="contact" href="mailto:' + mailAddr + '">Email</a></th>');
  return mailHtml;
}
