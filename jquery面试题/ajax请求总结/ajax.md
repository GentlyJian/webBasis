AJAX是异步的JavaScript和XML
AJAX是一种快速创建动态网页的技术4
AJAX可以使网页异步更新，是网页只刷新需要更新的数据

AJAX的get和post请求
    get请求：

    <script>
        <!-- 1.获取XMLHttpRequest请求对象 -->
        var xhr = new XMLHttpRequest();
        <!-- 2.设置请求方式和地址 -->
        xhr.open('get','url');
        <!-- 3.注册回调函数 -->
        xhr.onload = function() {

        }
        <!-- 4.发送请求 -->
        xhr.send();
    </script>

    post请求：
    <script>
        <!-- 1.获取XMLHttpRequest请求对象 -->
        var xhr = new XMLHttpRequest();
        <!-- 2.设置请求方式 和 请求地址 -->
        xhr.open('post', 'url');
        <!-- 3.设置请求头 -->
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        <!-- 4.注册回调函数 -->
        xhr.onload = function() {

        }
        <!-- 5.发送请求和参数 -->

        xhr.send('key=value');
   
    </script>

    get和post区别
        传递参数的区别：
        get传递参数会在url地址栏显示
        post会以http消息实体发送给Web

        安全区别：
        get请求的参数会在地址栏显示
        而post则会进行加密

        发送请求的区别
        get传递参数，发送请求时不需要传递参数
        post需要设置请求头 x-www-form-urlecode,并在send方法里传递参数

        传递数据大小的区别
        get大小显示4k
        而post没有限制

jquery中$ajax请求
    $ajax({
        type: post || get,  // 请求方式
        url : url       // 请求地址
        data： data     //请求参数 {A:'...', B: '...'},
        dataType: json || jsonp 服务器返回的数据类型,
        success: () => {} //请求成功的回调函数
        error : () => {} 请求失败的回调函数
        async: true || false 是否执行异步操作

    })