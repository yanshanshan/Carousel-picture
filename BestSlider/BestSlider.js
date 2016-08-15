/**
 * Created by db on 16/8/8.
 */
//
//$(document).ready(function () {
//
//})


//$(function () {
//    var $ctrlItem = $(".ctrl-item")
//    var $item = $('.item')
//
//    $ctrlItem.click(function () {
//        var index = $ctrlItem.index(this)
//
//        if ($item.filter('.item-active')[0] === $item.eq(index)[0]) {
//            return
//        }
//
//        $item.not('.item-active').css('display', 'none')
//
//        $item.filter('.item-active').fadeOut(function () {
//
//            $(this).removeClass('item-active')
//        });
//
//        $item.eq(index).fadeIn(function () {
//            $(this).addClass('item-active')
//        })
//    })
//});

//
//
//var n = 0
//var index = $('.ctrl-item').index(this)
//$(function(){
//
//    var $button = $('.ctrl-item')
//    var $item = $('.item')
//    $button.click(function(){
//
//        var index = $button.index(this)
//        $button.eq(index).addClass('ctrl-item1').siblings().removeClass('ctrl-item1')
//
//        if($item.filter('.item-active')[0] === $item.eq(index)[0]){
//            return
//        }
//
//        $item.not('.item-active').css('display','none')
//        $item.filter('.item-active').fadeOut(function(){
//            $(this).removeClass('item-active')
//        });
//        $item.eq(index).fadeIn(function(){
//            $(this).addClass('item-active')
//        })
//    })
//
//    t = setInterval('cl()',2000);
//    //function cl() {
//    //
//    //    index = (index >= 3) ? 0:index++
//    //
//    //    $button.eq(index).trigger('click')
//    //
//    //    setInterval("cl()",2000);
//    //}
//    //
//    //setInterval('cl()',2000);
//
//
//
//})
//function cl() {
//
//
//    //if(n >= 3){
//    //    n = 0;
//    //} else {
//    //    n += 1 ;
//    //}
//
//    //$('.ctrl-item').eq(n).trigger('click')
//    index = (index >= 3) ? 0 : index +1
//    console.log(index)
//    $('.ctrl-item').eq(index).trigger('click')
//}

//
//var n = 0
//$(function(){
//    var $button = $('.ctrl-item')
//    var $item = $('.item')
//    $button.click(function(){
//        var index = $button.index(this)
//       $button.eq(index).addClass('ctrl-item1').siblings().removeClass('ctrl-item1')
//
//        if($item.filter('.item-active')[0] === $item.eq(index)[0]){
//            return
//        }
//
//        $item.not('.item-active').css('display','none')
//        $item.filter('.item-active').fadeOut(function(){
//            $(this).removeClass('item-active')
//        })
//        $item.eq(index).fadeIn(function(){
//            $(this).addClass('item-active')
//        })
//
//
//    })
//    t = setInterval('cl()',2000)
//    $button.hover(function(){
//            clearInterval(t)
//        },
//        function(){
//            t = setInterval('cl()',2000)
//        }
//    )
//
//
//
//})
//function cl(){
//
//    if ( n >= 3){
//        n = 0
//    }else{
//        n +=1
//    }
//    $('.ctrl-item').eq(n).trigger('click')
//
//
//
//}
//$(this).addClass('item-active')


//var n = 0
// c = $('.item').length
// console.log(c)
//$(function(){
//
//    var $button  = $('.ctrl-item')
//    var $item = $('.item')
//    $button.click(function(){
//        index = $button.index(this)
//        $button.eq(index).addClass('ctrl-item1').siblings().removeClass('ctrl-item1')
//        if($item.filter('.ctrl-item1')[0] ===$item.eq(index)[0] ){
//            return
//        }
//        $item.not('.item-active').css('display','none')
//        $item.filter('.item-active').fadeOut(function(){
//            $(this).removeClass('item-active')
//        })
//        $item.eq(index).fadeIn(function(){
//             $(this).addClass('item-active')
//        })
//    })
//    var t = setInterval('cl()',2000)
//    $button.hover (function(){
//        clearInterval(t)
//
//    },
//        function(){
//        t = setInterval('cl()', 2000)
//    }
//    )
//
//})
//function cl(){
//    if(n >= c-1){
//        n = 0
//    } else{
//        n+=1
//    }
//    $('.ctrl-item').eq(n).trigger('click')
//
//}
//$('.ctrl-item').click(function(){
//    n = $(this).index()
//    console.log(n)
//})



//var n = 0
//var c = $('.item').length
//
//$(function(){
//    var $button = $('.ctrl-item')
//    var $item =$('.item')
//    $button.click(function(){
//        var index = $button.index(this)
//        $button.eq(index).addClass('ctrl-item1').siblings().removeClass('ctrl-item1')
//
//        if($item.filter('.item-active')[0] === $item.eq(index)[0]){
//            return
//        }
//
//        $item.not('.item-active').css('display','none')
//        $item.filter('.item-active').fadeOut(function(){
//            $(this).removeClass('item-active')
//        })
//        $item.eq(index).fadeIn(function(){
//            $(this).addClass('.item-active')
//        })
//    })
//    var t = setInterval('cl()',2000)
//    $button.hover(function(){
//        clearInterval(t)
//    },
//        function(){
//            t = setInterval('cl()',2000)
//        }
//    )
//})
//
//function cl(){
//    if (n >= c-1 ){
//        n = 0
//    } else{
//        n += 1
//    }
//    $('.ctrl-item').eq(n).trigger('click')
//}
//
//$('.ctrl-item').click(function(){
//    n = $(this).index()
//})


//var n = 0
//var c = $('.item').length
//
//$(function(){
//    var $button = $('.ctrl-item')
//    var $item =$('.item')
//    $button.click(function(){
//        $index = $button.index(this)
//        console.log($index)
//        $button.eq($index).addClass('ctrl-item1').siblings().removeClass('ctrl-item1')
//
//        if($item.filter('.item-active')[0] === $item.eq($index)[0]){
//            return
//        }
//
//        $item.not('.item-active').css('display','none')
//        $item.filter('.item-active').fadeOut(function(){
//            $(this).removeClass('item-active')
//        })
//        $item.eq($index).fadeIn(function(){
//            $(this).addClass('item-active')
//        })
//    })
//    t = setInterval('cl()',2000)
//    $('.ctrl-item').hover(function(){
//        clearInterval(t)
//    },function(){
//        t = setInterval('cl()',2000)
//    })
//
//})
//function cl(){
//    if(n >= c-1){
//        n = 0
//    }else{
//        n +=1
//    }
//    $('.ctrl-item').eq(n).trigger('click')
//}
//
//$('.ctrl-item').click(function(){
//    n = $(this).index()
//})

//
//var n = 0
//var c = $('.item').length
//$(function(){
//    var $button = $('.ctrl-item')
//    var $item = $('.item')
//
//    $button.click(function(){
//        var index = $button.index(this)
//        var $this = $(this)
//        $button.eq(index).addClass('ctrl-item1').siblings().removeClass('ctrl-item1')
//        if($item.filter('.item-active')[0] === $item.eq(index)[0]){
//            return
//        }
//        $item.not('.item-active').css('display','none')
//        $item.filter('.item-active').fadeOut(function(){
//           $this.removeClass('item-active')
//        })
//        $item.eq(index).fadeIn(function(){
//            $this.addClass('item-active')
//        })
//
//    })
//   var t = setInterval('cl()',2000)
//    $button.hover(function(){
//        clearInterval(t)
//    },function(){
//            t = setInterval('cl()',2000)
//        }
//        )
//})
//
//function cl(){
//    if(n >= c-1){
//        n =0
//    }else{
//        n+=1
//    }
//
//}
//$('.ctrl-item').click(function(){
//    n = $(this).index()
//})


;(function(){
    var $button = $('.ctrl-item')
    var $item = $('.item')
    var n = 0
    $button.click(function(){
        var $index = $button.index(this)
        $button.eq($index).addClass('ctrl-item1').siblings().removeClass('ctrl-item1')


        $item.not('.item-active').css('display','none')
        $item.filter('.item-active').fadeOut(function(){
            $(this).removeClass('item-active')
        })
        $item.eq($index).fadeIn(function(){
            $(this).addClass('item-active')
        })
    })
    var t = setInterval(function(){
        if(n >= 3){
            n=0
        }else{
            n+=1
        }
        $('.ctrl-item').eq(n).trigger('click',2000)
    },2000)


})();