<script>
//      获取当前页面URI
        var pathName = window.location.pathname;
// 		通过URL中特征字符串判断当前浏览是不是文章页
		if (pathName.indexOf('post/') > -1) {
		  //  计算文章内容字符数
		  //    .xx为本站文章内容div
		    var content_num=$(".post_content").text().replace(/\s/g, "").length;
		  //  计算阅读时间 很简单除以400取值就行了
		    var content_min=Math.ceil(content_num/400);
		  //  追加到文章内容最前显示
            $('.post_content').prepend('<p class="putong">本文总共 <b>'+content_num+'</b> 字 · 阅读全文大约需要 <b>'+content_min+'</b> 分钟</p>');
		}
</script>
