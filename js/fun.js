Bmob.initialize("d5e0119e35e700ff", "123123");
Bmob.debug(true)
function reg(){
    var un = document.getElementById("userName");
    var pwd = document.getElementById("password");
    var pwds = document.getElementById("surePassword");
    if(pwd.value != pwds.value){
        return alert("密码不相同！");
    }
    const query = Bmob.Query('user');
    query.set("username",un.value)
    query.set("pwd",pwd.value)
    query.save().then(res => {
        alert("1");
    }).catch(err => {
        alert("0");
    })
}
