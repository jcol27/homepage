document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.querySelector('.search-bar input');
  searchInput.value = "";

  function search() {
    const searchText = searchInput.value.trim();
    if (searchText !== '') {
        if (searchText.startsWith('-w ')) {
            const searchUrl = 'https://en.wikipedia.org/wiki/Special:Search?search=' + encodeURIComponent(searchText.slice(3));
            window.location.href = searchUrl;
        }
        else if (searchText.startsWith('-d ')) {
            const searchUrl = 'https://www.duckduckgo.com/?q=' + encodeURIComponent(searchText.slice(3));
            window.location.href = searchUrl;
        }
        else if (searchText.startsWith('-g ')) {
            const searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(searchText.slice(3));
            window.location.href = searchUrl;
        }
        else {
            const searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(searchText);
            window.location.href = searchUrl;            
        }
    }    
  };

  searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      //searchButton.click();
      search();
    }
  });
});

window.addEventListener('load', function() {
    var columns = document.querySelectorAll('.column');
    columns.forEach(function(column) {
      var links = column.querySelectorAll('a');
      var height = 78 + links.length * 78; // You can adjust the height multiplier as needed
      column.style.height = height + 'px';
    });
  });