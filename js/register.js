Bmob.initialize("dd9384d25225c5ae", "123123");
Bmob.debug(true)
function reg() {
    var un = document.getElementById("userName");
    var pwd = document.getElementById("password");
    var pwds = document.getElementById("surePassword");
    var lun = document.getElementById("luser").innerHTML;
    var lpwd = document.getElementById("lpwd").innerHTML;
    var lpwds = document.getElementById("lpwds").innerHTML;
    ysnull();
    if (lun != "" || lpwd != "" || lpwds != "") {
        return;
    }
    else if (pwd.value != pwds.value) {
        return document.getElementById("lpwd").innerHTML = "&nbsp&nbsp&nbsp密码不相同";
    }
    else {
        if (un.value != "" && pwd.value != "" && pwds.value != "") {
            const query = Bmob.Query('user');   //选择user表
            query.set("username", un.value)     //
            query.set("pwd", pwd.value)
            query.save().then(res => {
                reset();
                alert("注册成功！");
            }).catch(err => {
                alert("注册失败！用户名已存在！");
                document.getElementById("userName").value = "";
                document.getElementById("userName").focus();
            })
        }
    }
}

function reset() {
    document.getElementById("luser").innerHTML = "&nbsp&nbsp&nbsp请输入用户名！";
    document.getElementById("lpwd").innerHTML = ""
    document.getElementById("lpwds").innerHTML = ""
    document.getElementById("userName").value = "";
    document.getElementById("password").value = "";
    document.getElementById("surePassword").value = "";
    document.getElementById("userName").focus();
}

function ysnull() {
    nullpwds();
    nullpwd();
    nulluser();
}

function nulluser() {
    var un = document.getElementById("userName");
    if (un.value == "") {
        document.getElementById("luser").innerHTML = "&nbsp&nbsp&nbsp请输入用户名！";
        document.getElementById("userName").focus();
    }
    else {
        const query = Bmob.Query("user");
        query.equalTo("username", "==", un.value);
        query.find().then(res => {
            if (res[0].username == un.value) {
                document.getElementById("luser").innerHTML = "&nbsp&nbsp&nbsp用户名已存在！";
                document.getElementById("userName").focus();
                return;
            }
        }).catch(err => {
            document.getElementById("luser").innerHTML = "";
        });
    }
    return;
}
function nullpwd() {
    var pwd = document.getElementById("password");
    if (pwd.value == "") {
        document.getElementById("lpwd").innerHTML = "&nbsp&nbsp&nbsp请输入密码！";
    }
    else {
        document.getElementById("lpwd").innerHTML = "";
    }
    return;
}
function nullpwds() {
    var pwds = document.getElementById("surePassword");
    if (pwds.value == "") {
        document.getElementById("lpwds").innerHTML = "&nbsp&nbsp&nbsp请输入密码！";
    }
    else {
        document.getElementById("lpwds").innerHTML = "";
    }
    return;
}