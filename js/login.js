Bmob.initialize("dd9384d25225c5ae", "123123");
Bmob.debug(true)
function reg(){
    location.href="index.html";
}

function login(){
    var un = document.getElementById("userName");
    var pwd = document.getElementById("password");
    var lun = document.getElementById("luser").innerHTML;
    var lpwd = document.getElementById("lpwd").innerHTML;
    if(lun=="" && lpwd==""){
        const query = Bmob.Query('user');
        query.equalTo("username", "==", un.value);
        query.equalTo("pwd", "==", pwd.value);
        query.find().then(res => {
            if (res[0].username == un.value && res[0].pwd == pwd.value) {
                alert("登录成功！");
            }
        }).catch(err => {
            alert("账号或密码错误！");
        });
    }
}

function nulluser() {
    var pwd = document.getElementById("userName");
    if (pwd.value == "") {
        document.getElementById("luser").innerHTML = "&nbsp&nbsp&nbsp请输入账号！";
    }
    else {
        document.getElementById("luser").innerHTML = "";
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