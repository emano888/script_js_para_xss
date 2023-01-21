var xhr = new XMLHttpRequest();
xhr.open("GET", "https://raw.githubusercontent.com/emano888/script_js_xss/main/test1.js", true);
xhr.setRequestHeader("Content-Type", "text/plain");
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
    }
};
xhr.send();
