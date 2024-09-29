
function switchLang(lang) {
   if (languageContent[lang]) {
       for (let key in languageContent[lang]) {
           let element = document.getElementById(key);
           if (element) {
               element.innerHTML = languageContent[lang][key];
           }
       }
   }
   if (lang === 'vn') {
    document.getElementsByName('name')[0].placeholder = 'Tên của bạn';
    document.getElementsByName('email')[0].placeholder = 'Email của bạn';
    document.getElementsByName('message')[0].placeholder = 'Tin nhắn của bạn';
} else if (lang === 'en') {
    document.getElementsByName('name')[0].placeholder = 'Your name';
    document.getElementsByName('email')[0].placeholder = 'Your Email';
    document.getElementsByName('message')[0].placeholder = 'Your message';
}
}