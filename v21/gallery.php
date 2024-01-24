<!DOCTYPE html>
<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title> KIIT MUN </title>
    <meta name='description' content="Official Website of KIITMUN 2022">



    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

    <!-- Special Styling -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.8.1/baguetteBox.min.css">
    <link rel="stylesheet" href="assets/css/gallery-grid.css">


    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css?family=Poppins:500,700,900" rel="stylesheet">

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
    <link rel="stylesheet" href="darkM.css">

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
        background-image: url('assets/img/banner/gallery/gallery.jpg');
        height: 80vh;
    }
    </style>


</head>

<body>

    <!-- FOR THE APP-->
    <!-- <a target="_blank" id="myBtn" style="right: 25px;
    bottom: 20px; position: fixed;z-index: 99;" href="https://bit.ly/KMUN19">

            <div style="border: 2px solid black;">
            <img style="width: 115px ; height: 125px; " src="https://kiitmun.org/wp-content/uploads/2019/09/munappqr.png" /><br>
            <span><center> Get the App</center></span>
            </div>
        </a> -->

    <!-- LOADING SECTION -->
    <section class="loading">
        <img src="./assets/img/loader.gif"
            style="background-color: black;height: 240px !important;width: 240px !important;">
    </section>

    <section class="body-content darkmode">
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
                <ul style="margin-left: 7vw;" class="navbar-nav navbar-right">
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
                        <a class="menu-item active" href="#">Gallery</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="menu-item" data-toggle="dropdown">Partners</a>
                        <ul class="dropdown-menu">
                            <li><a href="sponsors.html" class="dropdown-item">Sponsors</li></a>
                            <li><a href="collaborators.html" class="dropdown-item">Collaborators</a></li>
                        </ul>
                    </li>
                    <!-- <li class="nav-item">
                        <a class="menu-item" href="campus-ambassador.php">Campus Ambassador</a>
                    </li> -->
                    <li class="nav-item">
                        <a class="menu-item" href="contact.php">Contact</a>
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
                            <h1>Gallery</h1>
                            <!-- <h3>Get start your next awesome project</h3> -->
                        </hgroup>
                        <!-- <button class="btn btn-hero btn-lg" role="button">See all features</button> -->
                    </div>
                </div>
            </div>
        </div>


        <!-- <section id="gallery-first">
            <div class="gallery-back">
                <img src="assets/img/banner/gallery/gallery.jpg">
                <div class="layer text-center">
                    <h1 id="rectangle">Gallery</h1></span>
                </div>
            </div>
        </section> -->
        <!-- <section id="committees-second">
                <h1 align="center"> Please have patience.
            
                <b>We'll be right back.</b></h1>
            </section> -->

        <br><br>
        <div class="container gallery-container">

            <div class="tz-gallery">

                <div class="row">

                    <?php
                    $files = glob("./assets/img/galleries/*.*");
                    for ($i = 0; $i < count($files); $i++) {
                        $image = $files[$i];
                        $image_size = getimagesize($image);

                        if ($image_size[0] > 1800) {
                            echo '<div class="col-sm-6 col-md-4">';
                            echo '<a class="lightbox" href="' . $image . '">';
                            echo '<img src="' . $image . '" alt="Random image" />';
                            echo '</a>';
                            echo '</div>';
                        }
                    }
                    ?>
                </div>

            </div>

        </div>




        <?php include "./partials/footer.php"; ?>
    </section>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.8.1/baguetteBox.min.js"></script>
    <script>
    baguetteBox.run('.tz-gallery');
    </script>
</body>

</html>