function downloadFile(url, filename) {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename || 'file';
    
    console.log(`Скачиваем файл ${filename}`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const button = document.getElementById('resume-button');

button.addEventListener('click', () => downloadFile('assets/resume.pdf', 'resume.pdf'));