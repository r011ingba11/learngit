define(['jquery','jqueryUI'],function($,$UI) {
    function Window(){
        this.cfg={
            width:500,
            height:300,
            title:"系统消息",
            content:"",
            hasCloseBtn:false,
            hasMask:true,
            isDraggable:true,
            dragHandle:null,
            skinClassName:null,
            text4AlertBtn:"确定",
            handler4AlertBtn:null,
            handler4CloseBtn:null
        }
    }
    // 未扩展参数
    // Window.prototype = {
    //     alert:function(content,handler,cfg){
    //         var boundingBox = $('<div class="window_boundingBox"></div>');
    //         boundingBox.appendTo("body");
    //         boundingBox.html(content);
    //         var btn = $('<input type="button" value="确定">');
    //         btn.appendTo(boundingBox);
    //         btn.click(function(){
    //             handler && handler();
    //             boundingBox.remove();
    //         })
    //         $.extend(this.cfg,cfg);
    //         boundingBox.css({
    //             width:this.cfg.width+"px",
    //             height:this.cfg.height+"px",
    //             left:(this.cfg.x || (window.innerWidth-this.cfg.width)/2)+"px",
    //             top:(this.cfg.y || (window.innerHeight-this.cfg.height)/2)+"px"
    //         })
    //     },
    //     confirm:function(){},
    //     prompt:function(){}
    // }
    Window.prototype = {
        alert:function(cfg){
            var CFG = $.extend(this.cfg,cfg);
            var boundingBox = $(
                '<div class="window_boundingBox">'+
                '<div class="window_header">'+CFG.title+'</div>'+
                '<div class="window_body">'+CFG.content+'</div>'+
                '<div class="window_footer"><input class="window_alertBtn" type="button" value="'+CFG.text4AlertBtn+'"></div>'+
                '</div>');
            var btn = boundingBox.find(".window_alertBtn");
            var mask = null;
            if(CFG.hasMask){
                mask = $('<div class="window_mask"></div>');
                mask.appendTo("body");
            }
            boundingBox.appendTo("body");
            btn.click(function(){
                CFG.handler4AlertBtn && CFG.handler4AlertBtn();
                boundingBox.remove();
                mask && mask.remove();
            })
            boundingBox.css({
                width:CFG.width+"px",
                height:CFG.height+"px",
                left:(CFG.x || (window.innerWidth-CFG.width)/2)+"px",
                top:(CFG.y || (window.innerHeight-CFG.height)/2)+"px"
            })
            if(CFG.hasCloseBtn){
                var closeBtn = $('<span class="window_closeBtn">X</span>')
                closeBtn.appendTo(boundingBox);
                closeBtn.click(function(){
                    CFG.handler4CloseBtn && CFG.handler4CloseBtn();
                    boundingBox.remove();
                    mask && mask.remove();
                })
            }
            if(CFG.skinClassName){
                boundingBox.addClass(CFG.skinClassName);
            }
            if(CFG.isDraggable){
                if(CFG.dragHandle){
                    boundingBox.draggable({handle:CFG.dragHandle});
                }else{
                    boundingBox.draggable();
                }
            }
        },
        confirm:function(){},
        prompt:function(){}
    }
    return{
        Window:Window
    }
})