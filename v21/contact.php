<!DOCTYPE html>
<html>
<?php include "db_config.php"; ?>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet">

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title> KIIT MUN </title>
    <meta name='description' content="Official Website of KIITMUN 2021">

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css?family=Poppins:500,700,900" rel="stylesheet">
    <link rel="stylesheet" href="darkM.css">

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"
        integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous">
    </script>

    <!-- Custom CSS -->
    <link rel="stylesheet" href="./assets/css/index2019.css" />
    <link rel="stylesheet" href="./assets/css/header.css" />

    <!-- Custom JS -->
    <script src="./assets/js/index.js"></script>
    <script>
    $(window).on("load", function() {
        $("body").css("overflow-y", "hidden");
        setTimeout(function() {
            $(".loading").addClass("fadeOut");
            $(".loading").hide();
            $(".body-content").addClass("fadeIn");
            $(".body-content").css("opacity", "1");
            $("body").css("overflow-y", "auto");
        }, 0.5 * 1000);
    });
    $("#myCarousel").carousel();
    $(function() {
        $(document).scroll(function() {
            var $nav = $(".navbar");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
            var $navItem = $(".menu-item");
            $navItem.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
            var $navLogo = $(".nav-logo");
            if ($(this).scrollTop() > $nav.height())
                $navLogo.attr("src", "./assets/img/logo/e-mun-logo-black.png");
            else
                $navLogo.attr("src", "./assets/img/logo/e-mun-logo.png");
        });
    });
    </script>
    <style>
    .fade-carousel .slides .slide-1 {
        background-image: url('./assets/img/banner/contact/contact3.jpg');
        height: 80vh;
    }
    </style>
</head>

<body>
    <!-- FOR THE MOBILE APP-->
    <!-- <a target="_blank" id="myBtn" style="right: 25px;
    bottom: 20px; position: fixed;z-index: 99;" href="https://bit.ly/KMUN19">
        <div style="border: 2px solid black;">
            <img style="width: 115px ; height: 125px; " src="https://kiitmun.org/wp-content/uploads/2019/09/munappqr.png" /><br>
            <span>
                <center> Get the App</center>
            </span>
        </div>
    </a> -->

    <!-- LOADING SECTION -->
    <section class="loading">
        <img src="./assets/img/loader.gif"
            style="background-color: black;height: 240px !important;width: 240px !important;">
    </section>

    <section class="body-content darkmode">

        <!-- Navigation Bar -->
        <nav class="navbar navbar-expand-lg navbar-light">

        <a class="navbar-brand" href="/">
        <img style="height:65px !important ; margin-top:-4px;" src="assets/img/logo/mun-logo.png" id="img1">
                <img style="height:65px !important ; margin-top:-4px;" src="assets/img/logo/e-mun-logo.png" id="img2"
                    class="nav-logo">
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"
                aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="" role="button">
                    <i class="fa fa-bars toggle-icon" aria-hidden="true"></i>
                </span>
            </button>


            <div class="collapse navbar-collapse " id="navbar">
                <ul style="margin-left: 10vw;" class="navbar-nav navbar-right">
                    <li class="nav-item">
                        <a class="menu-item" href="/">Home </a>
                    </li>
                    <li class="nav-item">
                        <a class="menu-item" href="about.html">About</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="menu-item" data-toggle="dropdown">MUN</a>
                        <ul class="dropdown-menu">
                            <li><a href="committees.html" class="dropdown-item">Committees</li></a>
                            <!-- <li><a href="agenda.html" class="dropdown-item">Agenda</li></a> -->
                            <!-- <li><a href="eb.html" class="dropdown-item">Executive Board</li></a> -->


                            <!-- <li><a href="study-guide.html" class="dropdown-item">Study Guide</a></li>
                            <li><a href="newsletter.html" class="dropdown-item">Newsletter</a></li>
                            <li><a href="rules-and-regulations.html" class="dropdown-item">Rules and Regulations</a></li> -->
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="menu-item" href="gallery.php">Gallery</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="menu-item" data-toggle="dropdown" >Partners</a>
                        <ul class="dropdown-menu">
                            <li><a href="sponsors.html" class="dropdown-item">Sponsors</li></a>
                            <!-- <li><a href="collaborators.html" class="dropdown-item">Collaborators</a></li> -->
                        </ul>
                    </li>   
                    <!-- <li class="nav-item">
                        <a class="menu-item" href="campus-ambassador.php">Campus Ambassador</a>
                    </li> -->
                    <li class="nav-item">
                        <a class="menu-item active" href="#">Contact</a>
                    </li>

                    <li class="nav-item dropdown-btn">
                        <a class="menu-item dropdown-btn-item" href="registration.php">Registrations</a>
                    </li>
            </div>
        </nav>

        <div class="carousel fade-carousel slide" data-ride="carousel" data-interval="4000" id="bs-carousel">
            <!-- Overlay -->
            <div class="overlay"></div>


            <!-- Wrapper for slides -->
            <div class="carousel-inner">
                <div class="item slides active">
                    <div class="slide-1"></div>
                    <div class="hero">
                        <hgroup>
                            <h1>Contact Us</h1>
                            <!-- <h3>Get start your next awesome project</h3> -->
                        </hgroup>
                        <!-- <button class="btn btn-hero btn-lg" role="button">See all features</button> -->
                    </div>
                </div>
            </div>
        </div>

        <!-- <section id="contact-first">
            <div class="contact-back">
                <img src="./assets/img/banner/contact/contact3.jpg">
                <div class="layer">
                    <h1>Contact Us</h1>
                </div>
            </div>
        </section> -->

        <section id="contact-first">
            <div class="contact-back">

                <div class="layer">
                    <h1>Contact Us</h1>
                </div>
            </div>
        </section>

        <section id="contact-second">
            <div class="m-auto">
                <h1>Connect With Us</h1>
                <hr>
        </section>


        <div align="center" style="width:80%;margin:auto;">
            <div data-tf-widget="onlaT4fj" style="width:100%;height:500px;"></div>
            <script src="//embed.typeform.com/next/embed.js"></script>
            <br>
            <p><i>For further queries, please feel free to contact <b>8144021921,6394324923</b></i></p>
        </div>


        <section id="contact-third">
            <h1>In Other <b>Media</b></h1>
            <hr>
            <span>We Are Gearing Up For The Much Awaited Model United Nations<br />Just Like You Are.</span>
            <div class="row">
                <div class="m-auto">
                    <center>
                        <div>
                            <a href="https://www.facebook.com/kiitmun/" target="_blank"><button type="button"
                                    class="btn btn-social-icon btn-facebook btn-rounded"><i
                                        class="fa fa-facebook"></i></button></a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/instakiitmun/" target="_blank"><button type="button"
                                    class="btn btn-social-icon btn-instagram btn-rounded"><i
                                        class="fa fa-instagram"></i></button></a>
                        </div>
                        <div>
                            <a href="https://twitter.com/kiitmun" target="_blank"><button type="button"
                                    class="btn btn-social-icon btn-twitter btn-rounded"><i
                                        class="fa fa-twitter"></i></button></a>
                        </div>
                    </center>
                </div>
            </div>
        </section>



        <section id="contact-fourth">
            <h1>Meet Us <b>Here</b></h1>
            <hr>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14962.559068831144!2d85.8136923465576!3d20.356495146139697!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x85a345e1f4fcce86!2sKiiT+Student+Activity+Center-KSAC!5e0!3m2!1sen!2sin!4v1527423728493"
                frameborder="0" style="border:0" allowfullscreen></iframe>
        </section>


        <!-- <script>
            window.onscroll = function() {
                scrollFunction()
            };

            function scrollFunction() {
                if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 60) {
                    document.getElementById("myBtn").style.display = "block";
                } else {
                    document.getElementById("myBtn").style.display = "none";
                }
            }
        </script> -->

        <?php include "./partials/footer.php"; ?>
    </section>
</body>

</html>