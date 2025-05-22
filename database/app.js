// フォームデータ保存
const saveFormData = () => {
  const formData = {
    password: document.getElementById('password').value,
    email: document.getElementById('email').value,
    // message: document.getElementById('message').value,
  };
  if (("localStorage" in window) && window.localStorage !== null) {
    localStorage.setItem('contactFormData', JSON.stringify(formData));
  }
}

// フォームデータ復元
const loadFormData = () => {
  const saved = localStorage.getItem('contactFormData');
  if (saved !== null) {
    const formData = JSON.parse(saved);
    document.getElementById('password').value = formData.name || '';
    document.getElementById('email').value = formData.email || '';
    // document.getElementById('message').value = formData.message || '';
  }
}

// ページロード時に復元
window.addEventListener('load',loadFormData);

// 送信時にlocalStorageを保存（任意）
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  // localStorage.removeItem('contactFormData');
  saveFormData();
  alert('送信完了！');
});