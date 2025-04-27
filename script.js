
function checkPassword() {
    var pass = document.getElementById('password').value;
    if (pass === 'GIZA2025') {
        document.getElementById('login-page').classList.add('hidden');
        document.getElementById('main-site').classList.remove('hidden');
    } else {
        alert('Wrong password!');
    }
}

function changeLanguage() {
    var lang = document.getElementById('language-selector').value;
    if (lang === 'ar') {
        document.getElementById('title').innerText = 'مشروع كشف التسرب لشركة جيزة العربية';
        document.getElementById('description').innerText = 'جيزة العربية شركة رائدة في حلول المياه والبنية التحتية.';
        document.getElementById('dg').innerText = 'جمع البيانات';
        document.getElementById('ve').innerText = 'تقييم الصمامات';
        document.getElementById('ld').innerText = 'كشف التسرب';
        document.getElementById('lr').innerText = 'إصلاح التسرب';
    } else if (lang === 'fr') {
        document.getElementById('title').innerText = 'Projet de Détection des Fuites - Giza Arabia';
        document.getElementById('description').innerText = 'Giza Arabia est un leader dans les solutions d'eau et d'infrastructure.';
        document.getElementById('dg').innerText = 'Collecte de données';
        document.getElementById('ve').innerText = 'Évaluation des vannes';
        document.getElementById('ld').innerText = 'Détection des fuites';
        document.getElementById('lr').innerText = 'Réparation des fuites';
    } else {
        document.getElementById('title').innerText = 'GIZA ARABIA LEAK DETECTION PROJECT';
        document.getElementById('description').innerText = 'Giza Arabia is a leading company providing water and infrastructure solutions.';
        document.getElementById('dg').innerText = 'DATA GATHERING';
        document.getElementById('ve').innerText = 'VALVE EVALUATION';
        document.getElementById('ld').innerText = 'LEAK DETECTION';
        document.getElementById('lr').innerText = 'LEAK REPAIR';
    }
}
