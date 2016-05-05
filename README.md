一个小型的ajax库，没有使用jquery，减少加载Jquery库的时间，也不用负担Jquery复杂的逻辑处理带来的性能消耗。其中整合jsonp，方便跨域。

示例：

```bash
ajax({
    type:"post",
    url:"", //添加自己的接口链接
    timeOut:5000,
    before:function(){
      console.log("before");  
    },
    success:function(str){
        console.log(str);
    },
    error:function(){
        console.log("error");
    }
});
```

参数表：

| 参数 | 默认值 | 描述 | 可选值 |
|:----|:----|:----|:----|
| url | "" | 请求的链接 | string |
| type | get | 请求的方法 | get,post |
| data | null | 请求的数据 | object,string |
| contentType | "" | 请求头 | string |
| dataType | "" | 请求的类型 | jsonp |
| async | true | 是否异步 | blooean |
| timeOut | undefined | 超时时间 | number |
| before | function(){} | 发送之前执行的函数 | function |
| error | function(){} | 请求报错执行的函数 | function |
| success | function(){} | 请求成功的回调函数 | function |

详细的说明，请看[这里](http://littleblack.cc/2016/05/04/Javascript/%E8%87%AA%E5%B7%B1%E5%8A%A8%E6%89%8B%E5%86%99%E4%B8%80%E4%B8%AAAjax/)