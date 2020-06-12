var lang = findGetParameter("lang");
if (lang == "nl") {
    lang = "nl";
} else {
    lang = "en";
}
//document.getElementsByTagName("html").attr("lang") = lang;
$.getJSON(lang + ".json", function(data)  {
    $.each(data, function(index, str) {
        document.getElementById(index).innerHTML = str;
    });
});

if (lang == "nl") {
    document.getElementById("langA").href = "?lang=en";
    document.getElementById("langImg").src = "assets/img/united-states.png";
} else {
    document.getElementById("langA").href = "?lang=nl";
    document.getElementById("langImg").src = "assets/img/netherlands.png";
}

// var IDs = $("#page-top [id]").map(function() { return this.id; }).get();
// var jsonObj = new Object();
// $.each(IDs, function(index, str) {
//     jsonObj[str] = document.getElementById(str).innerHTML;
// });

// console.log(jsonObj);


//

function findGetParameter(parameterName) {
var result = null,
    tmp = [];
location.search
    .substr(1)
    .split("&")
    .forEach(function (item) {
      tmp = item.split("=");
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
return result;
}