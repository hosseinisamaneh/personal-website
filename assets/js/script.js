// Smooth scroll for sidebar links (if page has anchors)
document.querySelectorAll('.sidebar nav a').forEach(link => {
    link.addEventListener('click', function(e){
        const href = this.getAttribute('href');
        if(href.startsWith("#")){
            e.preventDefault();
            document.querySelector(href).scrollIntoView({behavior: 'smooth'});
        }
    });
});
