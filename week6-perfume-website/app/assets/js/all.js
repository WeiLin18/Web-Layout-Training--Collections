$(document).ready(function () {
    if(document.title === 'product'){
        $('a[data-page="CHANEL"]').addClass('link--active');
       
    }
    if(document.title === 'product' || document.title === 'shop'){
        $('a[data-page="product"]').addClass('link--active');
    }
});

