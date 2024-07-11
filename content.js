function inject(){
  var link = document.createElement('link');
  link.href = chrome.runtime.getURL('darkmode.css'); // Get URL from extension
  link.rel = 'stylesheet';
  link.type = 'text/css';

  // Append the link element to the head of the document
  document.head.appendChild(link);
};

inject();