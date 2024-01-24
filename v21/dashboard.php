<!DOCTYPE html>
<html>
<?php 
	include './config/session.php';
	include "db_config.php";
?>

<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title> KIIT MUN </title>
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
    #dashboard {
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

    window.addEventListener('load', function() {
        document.getElementById("committees").style.display = "none";
        document.getElementById("userinfo").style.display = "block";
        document.getElementById("dashboard-menu").classList.add("active");
    }, false);

    function menuCommittees() {
        document.getElementById("committees").style.display = "block";
        document.getElementById("userinfo").style.display = "none";
        document.getElementById("dashboard-menu").classList.remove("active");
        document.getElementById("committees-menu").classList.add("active");
    }

    function menuDashboard() {
        document.getElementById("committees").style.display = "none";
        document.getElementById("userinfo").style.display = "block";
        document.getElementById("dashboard-menu").classList.add("active");
        document.getElementById("committees-menu").classList.remove("active");
    }
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
                <ul style="margin-left: 10vw;" class="navbar-nav navbar-right">
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
                            <!-- <li><a href="agenda.html" class="dropdown-item">Agenda</li></a> -->
                            <!-- <li><a href="eb.html" class="dropdown-item">Executive Board</li></a> -->
                            <!-- <li><a href="#" class="dropdown-item">Study Guide</a></li> -->


                            <li><a href="newsletter.html" class="dropdown-item">Newsletter</a></li>
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
                    <li class="nav-item">
                        <a class="menu-item" href="login.php">Login</a>
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
                            <h1>Dashboard</h1>
                        </hgroup>
                    </div>
                </div>
            </div>
        </div>

        <!-- <?php
				// if(!isset($_SESSION['email']) && !isset($_SESSION['delegation']))
				// {
				?> -->
        <!-- <div class="row">
			<div class="col--10 offset-1">
				<h2>You are not logged in</h2>
				<p><a href="/login.php" style="color: #45CD3A;text-decoration: underline;text-underline-position:under;">Click here</a> to go back to our Login Page</p>
			</div>
		</div> -->

        <!-- <?php
				// }
				// else
				// {
				// 	session_start();
				// 	$email=$_SESSION['email'];
				// 	$delegation=$_SESSION['delegation'];
				// 	// echo $email;
				// 	// echo $delegation;

				// 	if($delegation === 'single-delegation')
				// 	{
				// 		$result=$wpdb->get_results("SELECT * FROM registration_single_delegation WHERE Email='$email'");
				// 	}
				// 	elseif ($delegation === 'double-delegation')
				// 	{
				// 		$result=$wpdb->get_results("SELECT * FROM registration_double_delegation WHERE Email1='$email' OR Email2='$email'");
				// 	}
				// 	else
				// 	{
				// 		$result=$wpdb->get_results("SELECT * FROM registration_ip WHERE Email='$email'");
				// 	}
				// 	foreach ($result as $row) {
				// 	      if($delegation ==='single-delegation' || $delegation==='double-delegation')
				// 	      {
				// 	          $committee1=$row->Committee1;
				// 	          $country11=$row->Country11;
				// 	          $country12=$row->Country12;
				// 	          $country13=$row->Country13;
				// 	          $committee2=$row->Committee2;
				// 	          $country21=$row->Country21;
				// 	          $country22=$row->Country22;
				// 	          $country23=$row->Country23;
				// 	          $committee3=$row->Committee3;
				// 	          $country31=$row->Country31;
				// 	          $country32=$row->Country32;
				// 	          $country33=$row->Country33;
				// 	          $finalCommittee=$row->FinalCommittee;
				// 	          $finalCountry=$row->FinalCountry;

				// 	      }
				// 	      else
				// 	      {
				// 	        $committee1=$row->Committee1;
				// 	        $committee2=$row->Committee2;
				// 	        $committee3=$row->Committee3;
				// 	        $finalCommittee=$row->FinalCommittee;
				// 	        $finalCountry=$row->FinalCountry;     
				// 	      }
				// 	      if($delegation==='international-press')
				// 	      {
				// 	      	$press=$row->PressCorporation;
				// 	      }
				// 		if($delegation === 'double-delegation')
				// 		{
				// 			if($email === $row->Email1)
				// 			{
				// 				$name1=$row->Name1;		
				// 				$email1=$row->Email1;
				// 				$name2=$row->Name2;
				// 				$email2=$row->Email2;
				// 				if($row->Nationality1==='Indian')
				// 				{
				// 					$nationality1=$row->Nationality1;
				// 				}
				// 				else
				// 				{
				// 					$nationality1=$row->NationalityName1;
				// 				}
				// 				if($row->Nationality2==='Indian')
				// 				{
				// 					$nationality2=$row->Nationality2;
				// 				}
				// 				else
				// 				{
				// 					$nationality2=$row->NationalityName2;
				// 				}
				// 				$university1=$row->University1;
				// 				$university2=$row->University2;
				// 			}
				// 			elseif($email === $row->Email2)
				// 			{
				// 				$name1=$row->Name2;		
				// 				$email1=$row->Email2;
				// 				$name2=$row->Name1;
				// 				$email2=$row->Email1;
				// 				if($row->Nationality2==='Indian')
				// 				{
				// 					$nationality1=$row->Nationality2;
				// 				}
				// 				else
				// 				{
				// 					$nationality1=$row->NationalityName2;
				// 				}
				// 				if($row->Nationality1==='Indian')
				// 				{
				// 					$nationality2=$row->Nationality1;
				// 				}
				// 				else
				// 				{
				// 					$nationality2=$row->NationalityName1;
				// 				}
				// 				$university1=$row->University2;
				// 				$university2=$row->University1;
				// 			}
				// 		}
				// 		else
				// 		{
				// 			$name=$row->Name;
				// 			if($row->Nationality==='Indian')
				// 			{
				// 				$nationality=$row->Nationality;
				// 			}
				// 			else
				// 			{
				// 				$nationality=$row->NationalityName;
				// 			}
				// 			$university=$row->University;
				// 		}

				// 	}

				?> -->


        <section id="dashboard">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <div class="list-group">
                            <button class="list-group-item" id="dashboard-menu" onclick="menuDashboard()">
                                <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
                                Dashboard
                            </button>
                            <button class="list-group-item" id="committees-menu" onclick="menuCommittees()">
                                <span class="glyphicon glyphicon-list-alt" aria-hidden="true""></span> 
								Committees and Countries
							</button>
							<a href=" logout.php" class=" list-group-item">
                                    <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                                    Logout
                                    </a>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="panel panel-default" id="userinfo">

                            <div class="panel-body">
                                <div class="row">
                                    <h3 style="text-align: center; color: grey;"><b>
                                            <?php 
											if ($delegation === 'double-delegation') {
												echo '1.Delegation One';
											} ?>
                                        </b>
                                    </h3>
                                    <div class="col-md-4">
                                        <div class="well dash-box">
                                            <h4><span class="glyphicon glyphicon-user" aria-hidden="true"></span><span
                                                    style="float: right;">Name</span></h4>
                                            <h2 style="color: grey;">
                                                <?php
													if ($delegation === 'double-delegation') {
														echo $name1;
													} else {
														echo $name;
													} ?>
                                            </h2>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="well dash-box">
                                            <h4><span class="glyphicon glyphicon-envelope"
                                                    aria-hidden="true"></span><span style="float: right;"> Email</span>
                                            </h4>
                                            <h2 style="color: grey; font-size: 15px">
                                                <?php
												if ($delegation === 'double-delegation') {
													echo $email1;
												} else {
													echo $email;
												}
											?></h2>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="well dash-box">
                                            <h4><span class="glyphicon glyphicon-briefcase"
                                                    aria-hidden="true"></span><span
                                                    style="float: right;">Delegation</span></h4>
                                            <h2 style="color: grey;">
                                                <?php
													if ($delegation === 'single-delegation') {
														echo 'Single';
													} elseif ($delegation === 'double-delegation') {
														echo 'Double';
													} elseif ($delegation === 'international-press') {
														echo 'International Press';
													}

												?></h2>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="well dash-box">
                                            <h4><span class="glyphicon glyphicon-globe" aria-hidden="true"></span><span
                                                    style="float: right;">Nationality</span></h4>
                                            <h2 style="color: grey;">
                                                <?php
													if ($delegation === 'double-delegation') {
														echo $nationality1;
													} else {
														echo $nationality;
													} 
												?></h2>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="well dash-box">
                                            <h4><span class="glyphicon glyphicon-education"
                                                    aria-hidden="true"></span><span style="float: right;">
                                                    University</span></h4>
                                            <h2 style="color: grey;">
                                                <?php
													if ($delegation === 'double-delegation') {
														echo $university1;
													} else {
														echo $university;
													}
												?></h2>
                                        </div>
                                    </div>
                                    <?php if ($delegation === 'international-press') { ?>
                                    <div class="col-md-4">
                                        <div class="well dash-box">
                                            <h4><span class="glyphicon glyphicon-facetime-video"
                                                    aria-hidden="true"></span><span style="float: right;">Press
                                                    Corporation</span></h4>
                                            <h2 style="color: grey;"><?php echo $press; ?></h2>
                                        </div>
                                    </div>
                                    <?php } ?>
                                </div>

                                <?php if ($delegation === 'double-delegation') { ?>
                                <div class="row">
                                    <h3 style="text-align: center; color: grey;"><b>2.Delegation Two</b></h3>
                                    <div class="col-md-4">
                                        <div class="well dash-box">
                                            <h4><span class="glyphicon glyphicon-user" aria-hidden="true"></span><span
                                                    style="float: right;">Name</span></h4>
                                            <h2 style="color: grey;"><?php
																			echo $name2; ?></h2>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="well dash-box">
                                            <h4><span class="glyphicon glyphicon-envelope"
                                                    aria-hidden="true"></span><span style="float: right;"> Email</span>
                                            </h4>
                                            <h2 style="color: grey; font-size: 15px">
                                                <?php
														echo $email2;
													?></h2>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="well dash-box">
                                            <h4><span class="glyphicon glyphicon-briefcase"
                                                    aria-hidden="true"></span><span
                                                    style="float: right;">Delegation</span></h4>
                                            <h2 style="color: grey;">Double</h2>
                                        </div>
                                    </div>
                                </div>


                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="well dash-box">
                                            <h4><span class="glyphicon glyphicon-globe" aria-hidden="true"></span><span
                                                    style="float: right;">Nationality</span></h4>
                                            <h2 style="color: grey;">
                                                <?php
														echo $nationality2;
													?></h2>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="well dash-box">
                                            <h4><span class="glyphicon glyphicon-education"
                                                    aria-hidden="true"></span><span style="float: right;">
                                                    University</span></h4>
                                            <h2 style="color: grey;">
                                                <?php
														echo $university2;
													?></h2>
                                        </div>
                                    </div>

                                </div>
                                <?php } ?>
                            </div>
                        </div>

                        <div class="panel panel-default" id="committees">
                            <div class="panel-heading">
                                <h3 class="panel-title">Your choice of Committees and Countries</h3>
                            </div>
                            <div class="panel-body">
                                <table class="table table-striped table-hover">
                                    <tr>
                                        <th>Committee</th>
                                        <th>Country1</th>
                                        <th>Country2</th>
                                        <th>Country3</th>
                                        <th>Country4</th>
                                        <th>Country5</th>
                                    </tr>
                                    <tr>
                                        <td><?php echo $committee1; ?></td>
                                        <td><?php echo $country11; ?></td>
                                        <td><?php echo $country12; ?></td>
                                        <td><?php echo $country13; ?></td>
                                        <td><?php echo $country14; ?></td>
                                        <td><?php echo $country15; ?></td>
                                    </tr>
                                    <tr>
                                        <td><?php echo $committee2; ?></td>
                                        <td><?php echo $country21; ?></td>
                                        <td><?php echo $country22; ?></td>
                                        <td><?php echo $country23; ?></td>
                                        <td><?php echo $country24; ?></td>
                                        <td><?php echo $country25; ?></td>
                                    </tr>
                                    <tr>
                                        <td><?php echo $committee3; ?></td>
                                        <td><?php echo $country31; ?></td>
                                        <td><?php echo $country32; ?></td>
                                        <td><?php echo $country33; ?></td>
                                        <td><?php echo $country34; ?></td>
                                        <td><?php echo $country35; ?></td>
                                    </tr>
                                </table>
                                <p>Your Final Committee:
                                    <?php if ($finalCommittee === '') {
										echo 'Not decided yet';
									} else {
										echo $finalCommittee;
									} ?>
                                </p>
                                <p>
                                    Your Final Country:
                                    <?php if ($finalCountry === '') {
										echo 'Not decided yet';
									} else {
										echo $finalCountry;
									} ?>
                                </p>
                            </div>
                        </div>
                    </div>
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
                            src="./assets/img/footer/linkedin.png" height="55" width="55"></a></li>
            </ul>
            <center>
                Copyright 2020 &copy; KIIT International Model United Nations
            </center>
        </div>
    </section>
</body>

</html>