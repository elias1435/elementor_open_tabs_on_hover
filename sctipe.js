

/* Code for the new tabs element (the one container-based): */
<script>
/* 
Add the code below in an HTML element, on the same page as you have the Elementor tabs that you want to be openable on hover.
* Code for the new tabs element (the one container-based):
*/
document.addEventListener('DOMContentLoaded',function(){
jQuery(function($){
$('.hoverTabs .e-n-tab-title').mouseenter(function(){
$(this).click();
});
});
});


/* 
Code for the old tabs element:
*/
document.addEventListener('DOMContentLoaded',function(){
jQuery(function($){
$('.hoverTabs .elementor-tab-desktop-title').mouseenter(function(){
$(this).click();
});
});
});
</sc

</script>
