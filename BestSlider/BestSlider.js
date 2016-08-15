/**
 * Created by db on 16/8/8.
 */



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