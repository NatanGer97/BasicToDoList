// alert("connected");

$("ul").on("click","li",function () { 
   $(this).toggleClass("done");
    
});

// click on X to delete


$("ul").on("click","span", function (event) {
    $(this).parent().fadeOut(500,function()
    {
        $(this).remove();
    });
    event.stopPropagation();
    
    
});

// input listener

$("#add-icon").on("click",function (e) { 

   $("input[type='text").fadeToggle(500);
        
});

$("input[type='text").keypress(function (e) { 
    if(e.which === 13) // enter key
    {
        var value = $(this).val();
        $(this).val("");
        // create new li and add to the ul - list;
            $("ul").append(` <li><span><i class="fas fa-eraser"></i></span>${value}</li>`);
    }
        
});

// document.querySelector("h1").innerHTML = 'fff';

