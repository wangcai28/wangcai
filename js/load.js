/****************************************************************
 *																*		
 * 						      代码库							*
 *                        www.dmaku.com							*
 *       		  努力创建完善、持续更新插件以及模板			*
 * 																*
****************************************************************/
$(function(){
	paceOptions = {
		  elements: true
		};
	function load(time){
      var x = new XMLHttpRequest()
      x.open('GET', "" + time, true);
      x.send();
    };
    setTimeout(function(){
      Pace.ignore(function(){
        load(3100);
      });
    }, 4000);

    Pace.on('hide', function(){
      
    });
	
  $(".case_list ul li a img").lazyload({ 
    placeholder : "../images/loading.gif",
    effect: "fadeIn"
  });  

  $(".wechat-list img").lazyload({ 
    placeholder : "../images/loading.gif",
    effect: "fadeIn"
  });  

  
	$(".imgs-show-one img").lazyload({ 
		placeholder : "../images/loading.gif",
		effect: "fadeIn"
	});  
      
})