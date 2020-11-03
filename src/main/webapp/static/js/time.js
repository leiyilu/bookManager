//时间
function fn(){
    var time = new Date();
    var str= "";
    var div = document.getElementById("time");
    console.log(time);
    var year = time.getFullYear();
    var mon = time.getMonth()+1;
    var day = time.getDate();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    var week = time.getDay();
    switch (week){
        case 0:week="日";
            break;
        case 1:week="一";
            break;
        case 2:week="二";
            break;
        case 3:week="三";
            break;
        case 4:week="四";
            break;
        case 5:week="五";
            break;
        case 6:week="六";
            break;
    }
    str = year +"年"+totwo(mon)+"月"+totwo(day)+"日"+"&nbsp;"+totwo(h)+":"+totwo(m)+":"+totwo(s)+"&nbsp;"+"星期"+week;
    div.innerHTML = str;
}
fn();
setInterval(fn,1000);
function totwo(n){
    if(n<=9){
        return n = "0"+n;
    }
    else{
        return n =""+n;
    }
}

//
// function disptime() {
//     alert("11111")
//     var time = new Date(); //获得当前时间
//     var year = time.getFullYear(); //获得年月日
//     var month = time.getMonth(); //获得年月日
//     var date = time.getDate(); //获得年月日
//     var hour = time.getHours(); //获得小时、分钟、秒
//     var minute = time.getMinutes();
//     var second = time.getSeconds();
//     if (minute < 10) //如果分钟只有1位，补0显示
//         minute = "0" + minute;
//     if (second < 10) //如果秒数只有1位，补0显示
//         second = "0" + second;
//     /*设置文本框的内容为当前时间*/
//     document.getElementById('time').innerHTML = year + "年" + month + "月" + date + "日" + hour + ":" + minute + ":" +
//         second
//     document.myform.myclock.value = year + "年" + month + "月" + date + "日" + hour + ":" + minute + ":" + second
//     /*设置定时器每隔1秒（1000毫秒），调用函数disptime()执行，刷新时钟显示*/
//     var myTime = setTimeout("disptime()", 1000);
//
// }
//
// $(function () {
//     alert('111111111111');
//     disptime();
// })