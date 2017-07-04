$(function(){
	var index=0;
	var indexfev=0;
	var lenght=$('.lastlist>li').length-1;
	var listlenght=$('.list').length-1;
	var _this=null;
	$('.contentLeft .list').hover(function(){
		indexfev=$(this).index();
		
		$(this).find('.list-item-all li').css({'height':(parseInt($(this).css('height'))+40)});
		$(this).find('.item').css('height',parseInt($(this).find('.list-item-all').css('height'))-40);
		if(indexfev==0){
			$(this).find('.list-item-all').find('li').eq(index).css({'borderLeft':'1px solid #fdfdfe'});			
			$(this).find('.all-top li').eq(index).css({'display':'block'});		
			$('.all-top').css('marginTop',parseInt($(this).css('height'))*index);			
		}else if(indexfev==listlenght){
			$('.lastlist').css('top',-parseInt($(this).find('.item').css('height'))+65);
			$(this).find('.list-item-all>li').eq(lenght).css({'borderLeft':'1px solid #fdfdfe'});
			$(this).find('.all-top li').eq(index).css({'display':'block'});		
		}		
		$(this).css({'background':'#fff','border':'1px solid #D1D4DB'}).find('.list-item-all').css('display','block');
		$(this).find('.item').eq(index).css({'display':'block'});


		$(this).find('.list-item-all>li').mousedown(function(){
		 	index=$(this).index();
		 	$(this).parent().find('.all-top li').css({'display':'none'});
		 	$(this).parent().find('.all-top li').eq(index).css({'display':'block'});
		 	$(this).parent().find('.item').css({'display':'none'});
		 	$(this).find('.item').css({'display':'block'});
			if(index==1){
				$(this).parent().find('.all-top').css('marginTop',(parseInt($(this).css('height'))+1)*index);
			}else{
				$(this).parent().find('.all-top').css('marginTop',parseInt($(this).css('height'))*index);

			}
		})	


		_this=this;	
	},function(){
		$(this).css({'background':'#F8F9FB','border':'1px solid #F8F9FB'}).find('.list-item-all').css('display','none');

	})

	
})