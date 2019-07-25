require.config({
    paths:{
        jquery:'jquery-1.11.0',
        jqueryUI:'https://cdn.bootcss.com/jqueryui/1.10.4/jquery-ui'
    }
})

// 未扩展参数格式
// require(['jquery','window'],function($,w){
//     $('#a').click(function(){
//         new w.Window().alert("welcome!",function(){
//             alert("you have clicked the btn!")
//         },{
//             width:300,
//             height:150,
//             y:50
//         });
//     });
// });
require(['jquery','window'],function($,w){
    $('#a').click(function(){
        new w.Window().alert({
            title:"提示",
            content:"welcome!",
            hasCloseBtn:true,
            handler4AlertBtn:function(){
                alert("you have clicked the alertbtn!")
            },
            handler4CloseBtn:function(){
                alert("you have clicked the closebtn!")
            },
            dragHandle:".window_header",
            skinClassName:"window_skin_a",
            text4AlertBtn:"OK",
            width:300,
            height:150,
            y:50
        });
    });
});