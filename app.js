const headline = document.querySelector("#headline");
const newsdiv = document.querySelector("#news");
const science = document.querySelector("#science");
const technology = document.querySelector("#technology");
const business = document.querySelector("#business");
const entertainment = document.querySelector("#entertainment");
const sports = document.querySelector("#sports");
const health = document.querySelector("#health");

const proxyurl = "https://cors-anywhere.herokuapp.com/";

document.addEventListener("DOMContentLoaded", headlinesfunc);
headline.addEventListener("click", headlinesfunc);
science.addEventListener("click", sciencefunc);
technology.addEventListener("click", technologyfunc);
business.addEventListener("click", businessfunc);
entertainment.addEventListener("click", entertainmentfunc);
sports.addEventListener("click", sportsfunc);
health.addEventListener("click", healthfunc);

function headlinesfunc() {
  var xhr = new XMLHttpRequest();

  const url =
    "http://newsapi.org/v2/top-headlines?country=us&apiKey=a1fe23fe13e8437baa9d8be47b1a386e";
  xhr.open("GET", url, true);
  xhr.onload = function () {
    if (this.status == 200) {
      let newsresponse = JSON.parse(this.responseText).articles;

      output = "";
      const news = newsresponse.forEach((n) => {
        output += `<div class="newsitem"><div class="newsimg"><img src="${
          n.urlToImage
        }" alt="NO IMAGE"/></div><div class="newsinfo"><div class="title"><a target="_blank" href="${
          n.url
        }">${n.title} </a></div>
        <div class="background">Source: ${
          n.source.name
        } </div><div class="published"> Published on : ${n.publishedAt.substr(
          0,
          n.publishedAt.indexOf("T")
        )} , ${n.publishedAt.substr(n.publishedAt.indexOf("T") + 1, 8)} </div>
        <div class="description">${n.description}</div></div></div>`;
      });
      newsdiv.innerHTML = output;
    }
  };

  xhr.send();
}
function sciencefunc() {
  var xhr = new XMLHttpRequest();

  const url =
    "https://newsapi.org/v2/everything?q=science&apiKey=a1fe23fe13e8437baa9d8be47b1a386e";
  xhr.open("GET", url, true);
  xhr.onload = function () {
    if (this.status == 200) {
      let newsresponse = JSON.parse(this.responseText).articles;

      output = "";
      const news = newsresponse.forEach((n) => {
        output += `<div class="newsitem"><div class="newsimg"><img src="${
          n.urlToImage
        }" alt="NO IMAGE"/></div><div class="newsinfo"><div class="title"><a target="_blank" href="${
          n.url
        }">${n.title} </a></div>
        <div class="background">Source: ${
          n.source.name
        } </div><div class="published"> Published on : ${n.publishedAt.substr(
          0,
          n.publishedAt.indexOf("T")
        )} , ${n.publishedAt.substr(n.publishedAt.indexOf("T") + 1, 8)} </div>
        <div class="description">${n.description}</div></div></div>`;
      });
      newsdiv.innerHTML = output;
    }
  };

  xhr.send();
}

function technologyfunc() {
  var xhr = new XMLHttpRequest();

  const url =
    "https://newsapi.org/v2/everything?q=technology&apiKey=a1fe23fe13e8437baa9d8be47b1a386e";
  xhr.open("GET", url, true);
  xhr.onload = function () {
    if (this.status == 200) {
      let newsresponse = JSON.parse(this.responseText).articles;
      output = "";
      const news = newsresponse.forEach((n) => {
        output += `<div class="newsitem"><div class="newsimg"><img src="${
          n.urlToImage
        }" alt="NO IMAGE"/></div><div class="newsinfo"><div class="title"><a target="_blank" href="${
          n.url
        }">${n.title} </a></div>
        <div class="background">Source: ${
          n.source.name
        } </div><div class="published"> Published on : ${n.publishedAt.substr(
          0,
          n.publishedAt.indexOf("T")
        )} , ${n.publishedAt.substr(n.publishedAt.indexOf("T") + 1, 8)} </div>
        <div class="description">${n.description}</div></div></div>`;
      });
      newsdiv.innerHTML = output;
    }
  };

  xhr.send();
}

function businessfunc() {
  var xhr = new XMLHttpRequest();

  const url =
    "https://newsapi.org/v2/everything?q=business&apiKey=a1fe23fe13e8437baa9d8be47b1a386e";
  xhr.open("GET", url, true);
  xhr.onload = function () {
    if (this.status == 200) {
      let newsresponse = JSON.parse(this.responseText).articles;
      output = "";
      const news = newsresponse.forEach((n) => {
        output += `<div class="newsitem"><div class="newsimg"><img src="${
          n.urlToImage
        }" alt="NO IMAGE"/></div><div class="newsinfo"><div class="title"><a target="_blank" href="${
          n.url
        }">${n.title} </a></div>
        <div class="background">Source: ${
          n.source.name
        } </div><div class="published"> Published on : ${n.publishedAt.substr(
          0,
          n.publishedAt.indexOf("T")
        )} , ${n.publishedAt.substr(n.publishedAt.indexOf("T") + 1, 8)} </div>
        <div class="description">${n.description}</div></div></div>`;
      });
      newsdiv.innerHTML = output;
    }
  };

  xhr.send();
}

function technologyfunc() {
  var xhr = new XMLHttpRequest();

  const url =
    "https://newsapi.org/v2/everything?q=technology&apiKey=a1fe23fe13e8437baa9d8be47b1a386e";
  xhr.open("GET", url, true);
  xhr.onload = function () {
    if (this.status == 200) {
      let newsresponse = JSON.parse(this.responseText).articles;
      output = "";
      const news = newsresponse.forEach((n) => {
        output += `<div class="newsitem"><div class="newsimg"><img src="${
          n.urlToImage
        }" alt="NO IMAGE"/></div><div class="newsinfo"><div class="title"><a target="_blank" href="${
          n.url
        }">${n.title} </a></div>
        <div class="background">Source: ${
          n.source.name
        } </div><div class="published"> Published on : ${n.publishedAt.substr(
          0,
          n.publishedAt.indexOf("T")
        )} , ${n.publishedAt.substr(n.publishedAt.indexOf("T") + 1, 8)} </div>
        <div class="description">${n.description}</div></div></div>`;
      });
      newsdiv.innerHTML = output;
    }
  };

  xhr.send();
}

function sportsfunc() {
  var xhr = new XMLHttpRequest();

  const url =
    "https://newsapi.org/v2/everything?q=sports&apiKey=a1fe23fe13e8437baa9d8be47b1a386e";
  xhr.open("GET", url, true);
  xhr.onload = function () {
    if (this.status == 200) {
      let newsresponse = JSON.parse(this.responseText).articles;
      output = "";
      const news = newsresponse.forEach((n) => {
        output += `<div class="newsitem"><div class="newsimg"><img src="${
          n.urlToImage
        }" alt="NO IMAGE"/></div><div class="newsinfo"><div class="title"><a target="_blank" href="${
          n.url
        }">${n.title} </a></div>
        <div class="background">Source: ${
          n.source.name
        } </div><div class="published"> Published on : ${n.publishedAt.substr(
          0,
          n.publishedAt.indexOf("T")
        )} , ${n.publishedAt.substr(n.publishedAt.indexOf("T") + 1, 8)} </div>
        <div class="description">${n.description}</div></div></div>`;
      });
      newsdiv.innerHTML = output;
    }
  };

  xhr.send();
}

function healthfunc() {
  var xhr = new XMLHttpRequest();

  const url =
    "https://newsapi.org/v2/everything?q=health&apiKey=a1fe23fe13e8437baa9d8be47b1a386e";
  xhr.open("GET", url, true);
  xhr.onload = function () {
    if (this.status == 200) {
      let newsresponse = JSON.parse(this.responseText).articles;
      output = "";
      const news = newsresponse.forEach((n) => {
        output += `<div class="newsitem"><div class="newsimg"><img src="${
          n.urlToImage
        }" alt="NO IMAGE"/></div><div class="newsinfo"><div class="title"><a target="_blank" href="${
          n.url
        }">${n.title} </a></div>
        <div class="background">Source: ${
          n.source.name
        } </div><div class="published"> Published on : ${n.publishedAt.substr(
          0,
          n.publishedAt.indexOf("T")
        )} , ${n.publishedAt.substr(n.publishedAt.indexOf("T") + 1, 8)} </div>
        <div class="description">${n.description}</div></div></div>`;
      });
      newsdiv.innerHTML = output;
    }
  };

  xhr.send();
}

function entertainmentfunc() {
  var xhr = new XMLHttpRequest();

  const url =
    "https://newsapi.org/v2/everything?q=entertainment&apiKey=a1fe23fe13e8437baa9d8be47b1a386e";
  xhr.open("GET", url, true);
  xhr.onload = function () {
    if (this.status == 200) {
      let newsresponse = JSON.parse(this.responseText).articles;
      output = "";
      const news = newsresponse.forEach((n) => {
        output += `<div class="newsitem"><div class="newsimg"><img src="${
          n.urlToImage
        }" alt="NO IMAGE"/></div><div class="newsinfo"><div class="title"><a target="_blank" href="${
          n.url
        }">${n.title} </a></div>
        <div class="background">Source: ${
          n.source.name
        } </div><div class="published"> Published on : ${n.publishedAt.substr(
          0,
          n.publishedAt.indexOf("T")
        )} , ${n.publishedAt.substr(n.publishedAt.indexOf("T") + 1, 8)} </div>
        <div class="description">${n.description}</div></div></div>`;
      });
      newsdiv.innerHTML = output;
    }
  };

  xhr.send();
}
