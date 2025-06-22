particlesJS.load('particles-js', 'particles_star.json', function () {
  console.log('Hiệu ứng nền đã tải');
});

const text = "Võ Khánh Duy";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('data-target');
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Chức năng mở rộng: Toggle hiển thị nội dung thêm
function toggleDetails(id) {
  const el = document.getElementById(id);
  el.style.display = (el.style.display === 'none') ? 'block' : 'none';
}
