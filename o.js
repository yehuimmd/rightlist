window.onload = function(){
	/*var EventUtil = {
    addHandler: function(element, type, handler){
        if (element.addEventListener){
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent){
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },

    getEvent: function(event){
        return event ? event : window.event;
    },

    preventDefault: function(event){
        if(event.preventDefault){
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }
};

        EventUtil.addHandler(window, "load", function(event){
            var div=document.getElementById('mydiv');

             EventUtil.addHandler(div, "contextmenu", function(event){
             	event=EventUtil.getEvent(event);
             	EventUtil.preventDefault(event);

             	var menu = document.getElementById("mymenu");
    	        menu.style.left = event.clientX + "px";
    		    menu.style.top = event.clientY + "px";
    		    menu.style.visibility = "visible";
             });

             EventUtil.addHandler(document, "click", function(event){
               document.getElementById("mymenu").style.visibility ="hidden";
             });
        });
        */
    	var div=document.getElementById('mydiv');
         //addEventListener() 方法用于向指定元素添加事件句柄。
    	document.addEventListener("contextmenu", function(event){

    		//event=EventUtil.getEvent(event);
    		event.preventDefault();

    		 var menu = document.getElementById("mymenu");
    		 menu.style.left = event.clientX + "px";
    		 menu.style.top = event.clientY + "px";
    		 menu.style.visibility = "visible";
    	 });

    	document.addEventListener("click", function(event){
    		document.getElementById("mymenu").style.visibility ="hidden";
     });
   
	

 }











 