$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });
});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Certificates | Portfolio Kishore S";
            $("#favicon").attr("href", "/assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "/assets/images/favhand.png");
        }
    });

// fetch certificates start
function getCertificates() {
    return fetch("certificates.json")
        .then(response => response.json())
        .then(data => {
            return data
        });
}

function showCertificates(certificates) {
    let certificatesContainer = document.querySelector(".certificates .box-container");
    let certificatesHTML = "";
    certificates.forEach(certificate => {
        certificatesHTML += `
        <div class="grid-item ${certificate.category}">
        <div class="box tilt" style="width: 380px; margin: 1rem">
      <img draggable="false" src="/assets/images/certificates/${certificate.image}.png" alt="certificate" />
      <div class="content">
        <div class="tag">
        <h3>${certificate.name}</h3>
        </div>
        <div class="desc">
          <p>${certificate.desc}</p>
          <div class="issuer-date">
            <strong>Issuer:</strong> ${certificate.issuer}<br>
            <strong>Date:</strong> ${certificate.date}
          </div>
          <div class="btns">
            <a href="${certificate.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${certificate.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>
    </div>`
    });
    certificatesContainer.innerHTML = certificatesHTML;

    // isotope filter certificates
    var $grid = $('.box-container').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        masonry: {
            columnWidth: 200
    }
    });

    // then add the click handler here:
    $('.button-group').on('click', 'button', function () {
        $('.button-group').find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
        var filterValue = $(this).attr('data-filter');
        console.log("Filter:", filterValue);
    $grid.isotope({ filter: filterValue });
});
}

getCertificates().then(data => {
    showCertificates(data);
})
// fetch certificates end

// Start of Tawk.to Live Chat
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();
// End of Tawk.to Live Chat

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}
