Bmob.initialize("d5e0119e35e700ff", "123123");
Bmob.debug(true)
function reg() {
    var un = document.getElementById("userName");
    var pwd = document.getElementById("password");
    var pwds = document.getElementById("surePassword");
    var lun = document.getElementById("luser").innerHTML;
    var lpwd = document.getElementById("lpwd").innerHTML;
    var lpwds = document.getElementById("lpwds").innerHTML;
    nulluser();
    nullpwd();
    nullpwds();
    if (lun != "" || lpwd != "" || lpwds != "") {
        return;
    }
    else if (pwd.value != pwds.value) {
        return document.getElementById("lpwd").innerHTML = "&nbsp&nbsp&nbsp密码不相同";
    }
    else {
        const query = Bmob.Query('user');
        query.set("username", un.value)
        query.set("pwd", pwd.value)
        query.save().then(res => {
            alert("注册成功！");
        }).catch(err => {
            alert("注册失败！");
            document.getElementById("userName").value = "";
            document.getElementById("password").value = "";
            document.getElementById("surePassword").value = "";
            document.getElementById("userName").focus();
        })
    }
}

function getuser() {
    const query = Bmob.Query('user');
    query.get.username('3').then(res => {
        alert("1");
    }).catch(err => {
        alert("2");
    })
}

function nulluser() {
    var un = document.getElementById("userName");
    if (un.value == "") {
        return document.getElementById("luser").innerHTML = "&nbsp&nbsp&nbsp请输入用户名！";
    }
    else {
        return document.getElementById("luser").innerHTML = "";
    }
}
function nullpwd() {
    var pwd = document.getElementById("password");
    if (pwd.value == "") {
        return document.getElementById("lpwd").innerHTML = "&nbsp&nbsp&nbsp请输入密码！";
    }
    else {
        return document.getElementById("lpwd").innerHTML = "";
    }
}
function nullpwds() {
    var pwds = document.getElementById("surePassword");
    if (pwds.value == "") {
        return document.getElementById("lpwds").innerHTML = "&nbsp&nbsp&nbsp请输入密码！";
    }
    else {
        return document.getElementById("lpwds").innerHTML = "";
    }
}