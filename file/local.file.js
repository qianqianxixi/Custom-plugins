$(document).ready(function(){
	$("#upload_file").click(function(){ 
	doUpload(); 
	});
	$("#upload_file1").click(function(){ 
		doUpload1(); 
	});
	$("#upload_file2").click(function(){ 
		doUpload2(); 
	});
	$("#upload_file3").click(function(){ 
		doUpload3(); 
	});
	$("#upload_file4").click(function(){ 
		
	doUpload4(); 
	});
	$("#upload_file5").click(function(){ 
		
		doUpload5(); 
	});	
});
function doUpload() {
        // 上传方法
        var token=$('#token').val();     
        $.upload({
                        // 上传地址
                        url:baseurl+"UploadFile", 
                        // 文件域名字
                        fileName: 'file', 
                        // 其他表单数据
                        params:{stb_csrf_token:token},
                        // 上传完成后, 返回json, text
                        dataType: 'json',
                        // 上传之前回调,return true表示可继续上传
                        onSend: function() {
                                        return true;
                        },                      
                        // 上传之后回调
                        onComplate: function(data) {
	                        if(data.file_url){
	                        var addString = data.file_url +'\n';
							var textareaContain = $("#post_content").eq(0);
							//$('#post_content').val(textareaContain.val()+addString);
							//$("#post_content").insertAtCaret(addString);
							$('#post_content').val(textareaContain.val()+addString);
							
                            } else {
								alert(data.error);
							}							
                        }
        });
}
function doUpload1() {	
    // 上传方法
    var token=$('#token').val();      
    $.upload({
                    // 上传地址
                    url:baseurl+"UploadFile", 
                    // 文件域名字
                    fileName: 'file', 
                    // 其他表单数据
                    params:{stb_csrf_token:token},
                    // 上传完成后, 返回json, text
                    dataType: 'json',
                    // 上传之前回调,return true表示可继续上传
                    onSend: function() {
                                    return true;
                    },
                    // 上传之后回调
                    onComplate: function(data) {
                        if(data.file_url){
                        var addString = data.file_url;
                        var maddString = data.m_file_url;
						//var textareaContain = $("#post_content1").eq(0);
						//$('#post_content').val(textareaContain.val()+addString);
						//$("#post_content").insertAtCaret(addString);          
                        var aa = addString.substr(-24); 

                        $('#post-content1').val(addString);
                        $('#post-content2').val(aa);
                        $('#post-m-content1').val(maddString);
                        $("#up-loading1").html("上传成功...");
                        $("#upload_file5").css("display","block");
                        $("#upload_file1").css("display","block");
                        setTimeout(function(){
                        	$("#upload_file1").css("display","block");
                        	$("#up-loading1").css("display","none");
                        },500); 
                        } else {                        	
							alert(data.error);
							$("#upload_file1").css("display","block");
                        	$("#up-loading1").css("display","none");
						}
						
                    }
    });
}
function doUpload2() {	
    // 上传方法
    var token=$('#token').val();      
    $.upload({
                    // 上传地址
                    url:baseurl+"UploadFile", 
                    // 文件域名字
                    fileName: 'file', 
                    // 其他表单数据
                    params:{stb_csrf_token:token},
                    // 上传完成后, 返回json, text
                    dataType: 'json',
                    // 上传之前回调,return true表示可继续上传
                    onSend: function() {
                                    return true;
                    },
                    // 上传之后回调
                    onComplate: function(data) {
                        if(data.file_url){
                        var addString = data.file_url;						
                        $('#post-content2').val(addString);
                        $("#upload_file1").css("display","block");
                        } else {
							alert(data.error);
						}
						
                    }
    });
}
function doUpload3() {	
    // 上传方法
    var token=$('#token').val();      
    $.upload({
                    // 上传地址
                    url:baseurl+"UploadFile", 
                    // 文件域名字
                    fileName: 'file', 
                    // 其他表单数据
                    params:{stb_csrf_token:token},
                    // 上传完成后, 返回json, text
                    dataType: 'json',
                    // 上传之前回调,return true表示可继续上传
                    onSend: function() {
                                    return true;
                    },
                    // 上传之后回调
                    onComplate: function(data) {
                        if(data.file_url){
                        var addString = data.file_url;
						//var textareaContain = $("#post_content1").eq(0);
						//$('#post_content').val(textareaContain.val()+addString);
						//$("#post_content").insertAtCaret(addString);
                        $('#post-content3').val(addString);
                        $("#upload_file1").css("display","block");
                        $("#upload_file5").css("display","block");
                        } else {
							alert(data.error);
						}						
                    }
    }); 
}
function doUpload4() {	
    // 上传方法
    var token=$('#token').val();      
    $.upload({
                    // 上传地址
                    url:baseurl+"UploadFile", 
                    // 文件域名字
                    fileName: 'file', 
                    // 其他表单数据
                    params:{stb_csrf_token:token},
                    // 上传完成后, 返回json, text
                    dataType: 'json',
                    // 上传之前回调,return true表示可继续上传
                    onSend: function() {
                                    return true;
                    },
                    // 上传之后回调
                    onComplate: function(data) {
                        if(data.file_url){
                        var addString = data.file_url;
						//var textareaContain = $("#post_content1").eq(0);
						//$('#post_content').val(textareaContain.val()+addString);
						//$("#post_content").insertAtCaret(addString);
                        $('#post-content4').val(addString);
                        $("#upload_file5").css("display","block");
                        $("#upload_file1").css("display","block");
                        } else {
							alert(data.error);
						}						
                    }
    }); 
}

function doUpload5() {
	
    // 上传方法
    var token=$('#token').val();      
    $.upload({
                    // 上传地址
                    url:baseurl+"UploadFile", 
                    // 文件域名字
                    fileName: 'file', 
                    // 其他表单数据
                    params:{stb_csrf_token:token},
                    // 上传完成后, 返回json, text
                    dataType: 'json',
                    // 上传之前回调,return true表示可继续上传
                    onSend: function() {  
                    	
                        return true;
                    },                   
                    // 上传之后回调
                    onComplate: function(data) {
                        if(data.file_url){
                        var addString = data.file_url;
						//var textareaContain = $("#post_content1").eq(0);
						//$('#post_content').val(textareaContain.val()+addString);
						//$("#post_content").insertAtCaret(addString);
                        $('#post-content5').val(addString); 
                        $("#up-loading5").html("上传成功...");
                        $("#upload_file1").css("display","block");
                        setTimeout(function(){
                        	$("#upload_file5").css("display","block");
                        	$("#up-loading").css("display","none");
                        },500);                      
                        } else {
							alert(data.error);
							$("#upload_file5").css("display","block");
                        	$("#up-loading").css("display","none");
						}						
                    }
    }); 
}

// 新增上传图片方法
function doUploadImg(num) {    
    // var token=$('#token').val();      
    $.upload({
                    // 上传地址
                    url:"UploadFile", 
                    // 文件域名字
                    fileName: 'file', 
                    // 其他表单数据
                    // params:{stb_csrf_token:token},
                    // // 上传完成后, 返回json, text
                    dataType: 'json',
                    // 上传之前回调,return true表示可继续上传
                    onSend: function() {
                        return true;
                    },
                    // 上传之后回调
                    onComplate: function(data) {
                        if(data.file_url){
                            var addString = data.file_url;
                            var maddString = data.m_file_url;       
                            var aa = addString.substr(40); 
                            var allValue = '#'+'content' + num;
                            var partValue = '#'+ 'post-content'+ num;
                            console.log(allValue +'======'+  partValue);
                            $(allValue).val(addString);
                            $(partValue).val(aa);
                            $(".upload_file1").css("display","block");
                            setTimeout(function(){
                                $(".upload_file1").css("display","block");
                            },500); 
                        } else {                            
                            alert(data.error);
                            $(".upload_file1").css("display","block");
                        }
                        
                    }
    });
}