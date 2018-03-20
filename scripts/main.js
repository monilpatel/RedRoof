$(document).ready(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() >= 20) {
            $(".navbar").addClass("compressed");
        } else {
            $(".navbar").removeClass("compressed");
        }
    });

    var $contactForm = $('#contact-form');
    $contactForm.submit(function (e) {
        e.preventDefault();
        $.ajax({
            url: '//formspree.io/monilpatel01@gmail.com',
            method: 'POST',
            data: $(this).serialize(),
            dataType: 'json',
            beforeSend: function () {
                $contactForm.append('<div class="alert alert--loading">Sending message…</div>');
            },
            success: function (data) {
                $contactForm.find('.alert--loading').hide();
                $contactForm.append('<div class="alert alert--success">Message sent!</div>');
            },
            error: function (err) {
                $contactForm.find('.alert--loading').hide();
                $contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');
            }
        });
    });
})
