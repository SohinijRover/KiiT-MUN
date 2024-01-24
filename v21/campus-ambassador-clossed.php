<!DOCTYPE html>
<html>
<?php include "db_config.php";

$leader_query = "SELECT name,college,points FROM campus_ambassador ORDER BY points DESC LIMIT 5";

$leaderboard_result = mysqli_query($conn, $leader_query);
?>

<head>
    <link rel="stylesheet" href="darkM.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title> KIIT MUN </title>
    <meta name='description' content="Official Website of KIITMUN 2020">

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

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
        background-image: url('./assets/img/banner/campus/campus.jpg');
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
                        <a class="menu-item active" href="about.html">About</a>
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
                    <!--<li class="nav-item dropdown">
                    <a class="menu-item" data-toggle="dropdown" >Partners</a>
                    <ul class="dropdown-menu">
                        <li><a href="sponsors.html" class="dropdown-item">Sponsors</li></a>
                        <li><a href="collaborators.html" class="dropdown-item">Collaborators</a></li>
                    </ul>
                </li> -->
                    <li class="nav-item">
                        <a class="menu-item" href="campus-ambassador.php">Campus Ambassador</a>
                    </li>
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
                            <h1>Campus<br>Ambassador</h1>
                            <!-- <h3>Get start your next awesome project</h3> -->
                        </hgroup>
                        <!-- <button class="btn btn-hero btn-lg" role="button">See all features</button> -->
                    </div>
                </div>
            </div>
        </div>

        <!-- <section id="contact-first">
            <div class="contact-back">
                <img src="./assets/img/banner/campus/campus.jpg">
                <div class="layer">
                    <h1>Campus<br>Ambassador</h1>
                </div>
            </div>
        </section> -->

        <br>

        <div style="text-align: center; font-size:large" class="container">
            <blockquote style="color: wheat;"><i>Opportunities are often disguised as hard work, so that ordinary people
                    cannot perceive them. At KIIT Model United Nations, we bring you the opportunity to become one of
                    the extraordinaire.</i><br>
                <center><br><b>Join us and march towards glory.</b></center>
            </blockquote>
        </div>

        <section id="contact-second">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-offset-1  col-md-6 col-md-offset-1  col-lg-6 col-lg-offset-1">
                        <h1>Campus <br><b>Ambassador</b></h1>
                        <hr>


                        <!-- <?php
                        if (isset($_POST['submit'])) {


                            $name = mysqli_real_escape_string($conn, $_POST['name']);
                            $email = mysqli_real_escape_string($conn, $_POST['email']);
                            $phone = mysqli_real_escape_string($conn, $_POST['phone']);
                            $college = mysqli_real_escape_string($conn, $_POST['college']);
                            $stream = mysqli_real_escape_string($conn, $_POST['stream']);
                            $experience = mysqli_real_escape_string($conn, $_POST['experience']);
                            $knowledge = mysqli_real_escape_string($conn, $_POST['knowledge']);
                            $reference_id = "KIITMUN_" . date_timestamp_get(date_create());

                            $sql = " select * from campus_ambassador where email='" . $email . "'";
                            $res = mysqli_query($conn, $sql);


                            if (mysqli_num_rows($res) > 0) {
                                echo '<script language="javascript">';
                                echo 'alert("User with this email already exist")';
                                echo '</script>';
                            } else {
                                $query = " insert into campus_ambassador (name , phone, email, college, stream ,experience ,knowledge, reference_id	 ) values ('$name' , '$phone' , '$email'  , '$college', '$stream', '$experience', '$knowledge' , '$reference_id' )";

                                mysqli_query($conn, $query);

                                echo '<script language="javascript">';
                                echo 'alert("Successfully Registered. Your reference id is '.$reference_id.'")';
                                echo '</script>';
                            }
                        }
                        ?> -->


                        <br>

                        <center>
                            <h3>Registered Campus Ambassadors<br> See your details here</h3>
                        </center>
                        <form action="<?php echo mysqli_real_escape_string($conn, $_SERVER["PHP_SELF"]); ?>"
                            method="post">
                            <div style="display:flex">
                                <div class="col-xs-12 col-sm-12 col-md-6" style="padding: 0;">
                                    <input style="position:relative;z-index:999" type="email" name="ca-email"
                                        class="form-control" placeholder="Enter your email">
                                </div>


                                <div class="col-xs-12 col-sm-12 col-md-6 pt-2">
                                    <button style="position:relative;z-index:999" name="submit2" class="btn"
                                        type="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                        <br><br>
                    </div>

                    <?php 
                    if (isset($_POST['submit2'])) {

                        $email_submit = mysqli_real_escape_string($conn, $_POST['ca-email']);

                        $info_query = "Select * from campus_ambassador where email ='" . $email_submit."'";
                        $res2 = mysqli_query($conn, $info_query);

                        if (mysqli_num_rows($res2) > 0) {
                            $row = mysqli_fetch_assoc($res2);
                            echo '<script language="javascript">';
                            echo 'alert("Your reference id is '.$row['reference_id'].'")';
                            echo '</script>';
                        }else {
                            echo '<script language="javascript">';
                            echo 'alert("Campus Ambassador with the Email doesnot exist.")';
                            echo '</script>';
                        }
                    }
                    ?>

                    <div class="col-sm-6 col-md-6 col-lg-6">
                        <!-- <h1>Your <br><b>Incentives</b></h1>
                        <hr>
                        <br>
                        <div>
                            <ul class="list-group">
                                <li class="list-group-item">T-shirts and Apparels.</li>
                                <li class="list-group-item">Coupons and Gift Vouchers.</li>
                                <li class="list-group-item">Certificate from KIIT MUN Society.</li>
                                <li class="list-group-item">Best Campus Ambassador Trophy from KIIT MUN Society.</li>
                                <li class="list-group-item">Access to the Social Nights.</li>
                            </ul>

                        </div>
                        <br><br> -->
                        <h1>Leaderboard</h1>
                        <hr>
                        <div>
                            <table class="table table-striped table-hover">
                                <thead>
                                    <tr style="color: white;">
                                        <th>Name</th>
                                        <th>College</th>
                                        <th>Points</th>
                                    </tr>
                                </thead>
                                <tbody style="color: white;">
                                    <?php
                                    while ($data = mysqli_fetch_assoc($leaderboard_result)) { ?>
                                    <tr>
                                        <?php
                                            echo '<td>' . $data['name'] . '</td>';
                                            echo '<td>' . $data['college'] . '</td>';
                                            echo '<td>' . $data['points'] . '</td>';
                                            ?>
                                    </tr>
                                    <?php
                                    }
                                    ?>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
        <br><br>

        <section id="beta-fifth">
            <h1>FOR <b>QUERIES</b></h1>
            <hr>
            <span>If you have any doubts, feel free to contact :</span>
            <div class="row">
                <br>
                <div class="col-xs-12 col-sm-6">
                    <center><br><br><img style="border-radius:50%;height:205px;width:220px;"
                            src="./assets/img/members/sagnik-ghosh.png">
                    </center>
                    <h4>Sagnik Ghosh</h4>
                    <h3>Secretary General</h3>
                    <a href="tel:+918144021921"><span>+91 8144021921</span></a>
                    <hr>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <center><br><br><img style="border-radius:50%;height:200px;width:200px;"
                            src="./assets/img/members/om-chaitanya.png"></center>
                    <h4>Om Chaitanya</h4>
                    <h3>Chargé D'affaires</h3>
                    <a href="tel:+919955818809"><span>+91 9955818809</span></a>
                    <hr>
                </div>
            </div>

        </section>
        <br>
        <br>


        </div>
        </div>
        </div>
        <!-- <section> -->

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