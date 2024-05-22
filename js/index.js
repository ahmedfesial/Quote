
document.getElementById('displayButton').addEventListener('click', function() {
    var paragraphs = document.querySelectorAll('.paragraphs');
    paragraphs.forEach(para => para.style.display = 'none');
    
    const randomIndex = Math.floor(Math.random() * paragraphs.length);    
     paragraphs[randomIndex].style.display = 'block';
});
