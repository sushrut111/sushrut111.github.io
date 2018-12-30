$('#home').on('inview.uk.scrollspy', function(){
    console.log("skills aya");
    $(".homesel").parent().addClass('is-active');
    
});
$('#home').on('outview.uk.scrollspy', function(){
    console.log("skills gya");
    $(".homesel").parent().removeClass('is-active');
});
$('#skills').on('inview.uk.scrollspy', function(){
    console.log("skills aya");
    $(".skillssel").parent().addClass('is-active');
    
});
$('#skills').on('outview.uk.scrollspy', function(){
    console.log("skills gya");
    $(".skillssel").parent().removeClass('is-active');
});
$('#projects').on('inview.uk.scrollspy', function(){
    console.log("skills aya");
    $(".projectssel").parent().addClass('is-active');
    
});
$('#projects').on('outview.uk.scrollspy', function(){
    console.log("skills gya");
    $(".projectssel").parent().removeClass('is-active');
});
$('#education').on('inview.uk.scrollspy', function(){
    console.log("skills aya");
    $(".educationsel").parent().addClass('is-active');
    
});
$('#education').on('outview.uk.scrollspy', function(){
    console.log("skills gya");
    $(".educationsel").parent().removeClass('is-active');
});
$('#about').on('inview.uk.scrollspy', function(){
    console.log("skills aya");
    $(".aboutsel").parent().addClass('is-active');
    
});
$('#about').on('outview.uk.scrollspy', function(){
    console.log("skills gya");
    $(".aboutsel").parent().removeClass('is-active');
});