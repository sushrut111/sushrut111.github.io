$('#home').on('inview.uk.scrollspy', function(){
    $(".homesel").parent().addClass('is-active');
    
});
$('#home').on('outview.uk.scrollspy', function(){
    $(".homesel").parent().removeClass('is-active');
});
$('#skills').on('inview.uk.scrollspy', function(){
    $(".skillssel").parent().addClass('is-active');
    
});
$('#skills').on('outview.uk.scrollspy', function(){
    $(".skillssel").parent().removeClass('is-active');
});
$('#projects').on('inview.uk.scrollspy', function(){
    $(".projectssel").parent().addClass('is-active');
    
});
$('#projects').on('outview.uk.scrollspy', function(){
    $(".projectssel").parent().removeClass('is-active');
});
$('#education').on('inview.uk.scrollspy', function(){
    $(".educationsel").parent().addClass('is-active');
    
});
$('#education').on('outview.uk.scrollspy', function(){
    $(".educationsel").parent().removeClass('is-active');
});
$('#about').on('inview.uk.scrollspy', function(){
    $(".aboutsel").parent().addClass('is-active');
    
});
$('#about').on('outview.uk.scrollspy', function(){
    $(".aboutsel").parent().removeClass('is-active');
});