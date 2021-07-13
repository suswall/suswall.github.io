// Height of Sidebar
var checkExist = setInterval(function () {
    var sections = document.querySelectorAll("div.s").length
    if (sections > 1) {
        console.log(sections)
        let sidebar = document.getElementById("con");
        let a = (sections - 1) * 210 + ((sections - 4) * 20)
        console.log(a)
        sidebar.style.height = `${a}px`;
        clearInterval(checkExist);
    }
}, 100); // check every 100ms


    let infor = $.getJSON("info.json", function (json) {
        let i = 0;
        json.forEach(e => {
            i++;
            let r = "c" + i.toString()
            let clone = $("div#ct").clone();
            clone.attr("id", r)
            clone.find(".location").text(e[0])
            clone.find(".address").html(e[1])
            clone.find(".status").text(e[2])
            console.log(r)
            if (document.getElementById(r) == null) {
                $("#con").append(clone)
            }
        });
    });

    let info = $.getJSON("info.json", function (json) {
        let i = 0;
        json.forEach(e => {
            i++;
            let r = "s" + i.toString()
            let clone = $("div#st").clone();
            clone.attr("id", r)
            clone.find(".location").text(e[0])
            clone.find(".address").html(e[1])
            clone.find(".status").text(e[2])
            console.log(r)
            if (document.getElementById(r) == null) {
                if (i < 3) {
                    let td = document.createElement("td");
                    td.style.columnSpan = 1
                    td.id = "sc"+i.toString()
                    $("#re1").append(td);
                    $("#sc"+i.toString()).append(clone)
                    return;
                }
                if (i === 3 || i === 4) {
                    let td = document.createElement("td");
                    td.style.columnSpan = 1
                    td.id = "sc"+i.toString()
                    $("#re2").append(td);
                    $("#sc"+i.toString()).append(clone)
                    return;
                }
                if (i > 4) {
                    let td = document.createElement("td");
                    td.style.columnSpan = 1
                    td.id = "sc"+i.toString()
                    $("#re3").append(td);
                    $("#sc"+i.toString()).append(clone)
                    return;
                }
            }
        });
    });