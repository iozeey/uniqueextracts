var visibleRecaptcha;
var frmBtn = document.getElementById('lets-talk');
var formBtn = document.getElementById('form');

$(document).ready(function () { 
    /* contact form */
    var diuretionTime = 350;
    
    // name input
    $("#your-name-label").click( function (){
        $("#your-name-label").addClass("active-label", diuretionTime);
        $("#your-name-input").focus();
    });
    $("#your-name-input").focusin( function (){
       $("#your-name-label").addClass("active-label", diuretionTime);
    });
    $("#your-name-input").focusout( function (){
        if ($(this).val() == "") {
            $("#your-name-label").removeClass("active-label", diuretionTime);
        }
    });
    
    // email input
    $("#your-email-label").click( function (){
        $("#your-email-label").addClass("active-label", diuretionTime);
        $("#your-email-input").focus();
    });
    $("#your-email-input").focusin( function (){
       $("#your-email-label").addClass("active-label", diuretionTime);
    });
    $("#your-email-input").focusout( function (){
        if ($(this).val() == "") {
            $("#your-email-label").removeClass("active-label", diuretionTime);
        }
    });
    
    // tel input
    $("#your-tel-label").click( function (){
        $("#your-tel-label").addClass("active-label", diuretionTime);
        $("#your-tel-input").focus();
    });
    $("#your-tel-input").focusin( function (){
       $("#your-tel-label").addClass("active-label", diuretionTime);
    });
    $("#your-tel-input").focusout( function (){
        if ($(this).val() == "") {
            $("#your-tel-label").removeClass("active-label", diuretionTime);
        }
    });
    
    // tel input
    $("#your-msg-label").click( function (){
        $("#your-msg-label").addClass("active-label", diuretionTime);
        $("#your-msg-input").focus();
        $("#your-msg-input").addClass("margin-top");
    });
    $("#your-msg-input").focusin( function (){
       $("#your-msg-label").addClass("active-label", diuretionTime);
    });
    $("#your-msg-input").focusout( function (){
        if ($(this).val() == "") {
            $("#your-msg-label").removeClass("active-label", diuretionTime);
        }
    });

    /* attach a submit handler to the form */
    $("#form").submit(function (event) {
        $('input#lets-talk').css("display", "none");
        $(".loader").css("display", "block");

        /* stop form from submitting normally */
        event.preventDefault();

        $(this).ajaxSubmit({
            error: function (err) {
                alert(err.responseText);

                grecaptcha.reset(visibleRecaptcha);
                disableBtn();
                $(".loader").css("display", "none");
                $('input#lets-talk').css("display", "block");
            },
            success: function (res) {
                if(res.success){
                    $("footer").css('bottom', '0');
                    var message= "<div class='my-notify-success'>"+res.message+"</div>";
                    $(".message").html(message).css('display', 'block');
                }
                else{
                    var message= "<div class='my-notify-error'>"+res.message+"</div>";
                    $(".message").html(message).css('display', 'block');
                }
            },
            complete: function(res){
                $(".loader").css("display", "none");
                $('input#lets-talk').css("display", "block");
            }
        });

        //Very important line, it disable the page refresh.
        return false;
    });
});

