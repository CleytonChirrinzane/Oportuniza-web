const filterInput = document.getElementById('filterInput');
const nationalOpportunitiesList = document.getElementById('nationalOpportunitiesList');
const internationalOpportunitiesList = document.getElementById('internationalOpportunitiesList');

filterInput.addEventListener('input', () => {
  const filter = filterInput.value.toLowerCase();
  const filterList = list => {
    const items = list.getElementsByTagName('li');
    Array.from(items).forEach(item => {
      const text = item.textContent.toLowerCase();
      if (text.includes(filter)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  };
  filterList(nationalOpportunitiesList);
  filterList(internationalOpportunitiesList);
});

// Profile picture live preview (profile.html)
document.addEventListener('DOMContentLoaded', function() {
  const fileInput = document.getElementById('profilepic');
  const previewImg = document.getElementById('profile-pic-preview');
  if (fileInput && previewImg) {
    fileInput.addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(evt) {
          previewImg.src = evt.target.result;
          previewImg.style.display = 'block';
        };
        reader.readAsDataURL(file);
      } else {
        previewImg.src = '#';
        previewImg.style.display = 'none';
      }
    });
  }
});