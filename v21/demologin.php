<!DOCTYPE html>
<html>

<?php 

	include "db_config.php";

	session_start();
	if(isset($_SESSION['email']) || isset($_SESSION['delegation'])) {
		header("location: ./dashboard.php");
	}

	$error = "";

	if( isset($_POST['login-submit-btn'])){
		if(!isset($_POST['form-email']) || !isset($_POST['form-password'])  || !isset($_POST['form-delegation'])){
			$error = "All fields are mandatory";
		}
		else{
			$email = mysqli_real_escape_string($conn, $_POST['form-email']);
			$password = mysqli_real_escape_string($conn, $_POST['form-password']);
			$delegation = mysqli_real_escape_string($conn, $_POST['form-delegation']);

			$sql="";

			if($delegation === 'single-delegation')
			{
				$sql="SELECT * FROM registration_single_delegation WHERE email='" . $email . "' AND password='" . $password ."'";
				
			}
			elseif ($delegation === 'double-delegation')
			{
				$sql = "SELECT * FROM registration_double_delegation WHERE (email1='" .  $email . " ' OR email2='" . $email . " ') AND password=' " .    $password .  " '";
			}
			$login_result = mysqli_query($conn, $sql);


			// if (mysqli_query($conn, $sql)) {
				// echo '<script language="javascript">';
				// echo 'Successful';
				// echo '</script>';
				if (mysqli_num_rows($login_result) > 0) {
					session_start();
					$_SESSION['delegation'] = $delegation;
					$_SESSION['email'] = $email;
					header("Location: ./dashboard.php");
				} else {
					$error = "Invalid email or password";
				}
				
			// }
			// else {
			// 	echo "Error: " . $sql . "<br>" . mysqli_error($conn);
			// }

			// if (mysqli_num_rows($login_result) > 0) {
			// 	session_start();
			// 	$_SESSION['delegation'] = $delegation;
			// 	$_SESSION['email'] = $email;
			// 	header("Location: dashboard.php");
			// } else {
			// 	$error = "Invalid email or password";
			// }
			// echo $error;
		}
	}
?>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title> KIIT eMUN </title>
    <meta name='description' content="Official Website of KIITMUN 2020">



    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

    <!-- Special Styling -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.8.1/baguetteBox.min.css">


    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css?family=Poppins:500,700,900" rel="stylesheet">

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous">
    </script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"
        integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous">
    </script>

    <!-- Custom CSS -->
    <link rel="stylesheet" href="./assets/css/index2019.css" />
    <link rel="stylesheet" href="./assets/css/header.css" />


    <!-- Styles -->
    <style type="text/css">
    #main {
        margin-top: 5%;
        padding-top: 5%;
    }

    .dash-box {
        height: 150px;
    }

    .active {
        background-color: #bab86c !important;
        border-color: #bab86c !important;
    }

    .fade-carousel .slides .slide-1 {
        background-image: url('assets/img/banner/study-guide/study-guide3.jpg');
        height: 80vh !important;
    }
    </style>


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
</head>

<body>

    <!-- LOADING SECTION -->
    <section class="loading">
        <img src="./assets/img/loader.gif">
    </section>

    <section class="body-content">
        <nav class="navbar navbar-expand-lg navbar-light">

            <a class="navbar-brand" href="/">
            <img style="height:65px !important ; margin-top:-4px;" src="assets/img/logo/mun-logo.png" id="img1">
                <img style="height:65px !important ; margin-top:-4px;" src="assets/img/logo/e-mun-logo.png" id="img2"
                    class="nav-logo">
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"
                aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <!-- <span class="navbar-toggler-icon"></span> -->
                <span class="" role="button">
                    <i class="fa fa-bars toggle-icon" aria-hidden="true"></i>
                </span>
            </button>


            <div class="collapse navbar-collapse " id="navbar">
                <ul style="margin-left: 50vh;" class="navbar-nav navbar-right">
                    <li class="nav-item">
                        <a class="menu-item" href="/">Home </a>
                    </li>
                    <li class="nav-item">
                        <a class="menu-item" href="about.html">About</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="menu-item" data-toggle="dropdown">eMun</a>
                        <ul class="dropdown-menu">
                            <li><a href="committees.html" class="dropdown-item">Committees</li></a>
                            <!-- <li><a href="#" class="dropdown-item">Study Guide</a></li> -->
                            <li><a href="rules-and-regulations.html" class="dropdown-item">Rules and Regulations</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="menu-item" href="gallery.php">Gallery</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="menu-item" data-toggle="dropdown">Partners</a>
                        <ul class="dropdown-menu">
                            <li><a href="sponsors.html" class="dropdown-item">Sponsors</li></a>
                            <li><a href="collaborators.html" class="dropdown-item">Collaborators</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="menu-item" href="campus-ambassador.php">Campus Ambassador</a>
                    </li>
                    <li class="nav-item">
                        <a class="menu-item" href="contact.php">Contact</a>
                    </li>

                    <li class="nav-item dropdown-btn">
                        <a class="menu-item dropdown-btn-item" href="registrations.html">Registrations</a>
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
                            <h1>Login</h1>
                        </hgroup>
                    </div>
                </div>
            </div>
        </div>

        <section id="contact-second">
            <div class="m-auto">
                <h1>Log In <b>Here</b></h1>
                <hr>
            </div>

            <div class="row" style="justify-content: center;">
                <div class="col-10 col-md-6">

                    <span><?php echo $error; ?></span>

                    <form method="post" action="<?php echo mysqli_real_escape_string($conn, $_SERVER["PHP_SELF"]); ?>">
                        <div class="form-group">
                            <label for="form-email">Your Email:</label>
                            <input type="text" name="form-email" class="form-control" id="form-email">
                        </div>
                        <div class="form-group">
                            <label for="form-password">Your Password:</label>
                            <input type="password" name="form-password" class="form-control" id="form-password"
                                required="">
                        </div>
                        <div class="form-group">
                            <label for="form-delegation">Your Delegation:</label>
                            <select name="form-delegation" class="form-control" id="form-delegation"
                                class="form-select-box">
                                <option value="single-delegation">Single Delegation</option>
                                <option value="double-delegation">Double Delegation</option>
                            </select>
                        </div>
                        <input type="hidden" name="login-submit" value="yes">
                        <button class="btn btn-lg btn-block" name="login-submit-btn" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>




        <div class="footer-copyright">

            <ul
                style="list-style:none;background:rgba(0,0,0,0);overflow:hidden;color:#fff;padding:0;text-align: center;margin:0;">
                <li style="display:inline-block;padding:10px;list-style:none;"><a
                        href="https://www.facebook.com/kiitmun/" target="_blank"><img src="./assets/img/footer/fb.png"
                            height="50" width="50"></a></li>
                <li style="display:inline-block;padding:10px;list-style:none;"><a
                        href="https://www.instagram.com/instakiitmun/" target="_blank"><img
                            src="./assets/img/footer/it.png" height="60" width="60"></a></li>
                <li style="display:inline-block;padding:10px;list-style:none;"><a href="https://twitter.com/kiitmun"
                        target="_blank"><img src="./assets/img/footer/tw.png" height="50" width="50"></a></li>
                <li style="display:inline-block;padding:10px;list-style:none;"><a
                        href="https://www.linkedin.com/in/kiitmun/" target="_blank"><img
                            src="./assets/img/footer/li.png" height="55" width="55"></a></li>
            </ul>
            <center>
                Copyright 2020 &copy; KIIT International Model United Nations
            </center>
        </div>

    </section>

    <!-- <div class="row">
		<div class="col-xs-10 col-xs-offset-1">
			<h2>Invalid Credentials</h2>
			<p><a href="" style="color: #45CD3A;text-decoration: underline;text-underline-position:under;">Click here</a> to go back to our Login Page</p>
		</div>
	</div> -->

</body>

</html>