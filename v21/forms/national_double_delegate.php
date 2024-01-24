<?php
    include "db_config.php";
    if (isset($_POST['national-double-submit'])) {

        if(!isset($_POST['national-double-name1']) || !isset($_POST['national-double-name2']) ||
            !isset($_POST['national-double-email1']) || !isset($_POST['national-double-email2']) || 
            !isset($_POST['national-double-gender1']) || !isset($_POST['national-double-gender2']) ||
            !isset($_POST['national-double-contact11']) || !isset($_POST['national-double-contact12']) ||
            !isset($_POST['national-double-contact21']) || !isset($_POST['national-double-contact22']) ||
            !isset($_POST['national-double-age1']) || !isset($_POST['national-double-age2']) || 
            !isset($_POST['national-double-course1']) || !isset($_POST['national-double-course2']) ||
            !isset($_POST['national-double-college1']) || !isset($_POST['national-double-college2']) || 
            !isset($_POST['national-double-committee1']) || !isset($_POST['national-double-committee2']) || !isset($_POST['national-double-committee3']) || 

            empty($_POST['national-double-password']) ||
            empty($_POST['national-double-name1']) || empty($_POST['national-double-name2']) ||
            empty($_POST['national-double-email1']) || empty($_POST['national-double-email2']) || 
            empty($_POST['national-double-gender1']) || empty($_POST['national-double-gender2']) ||
            empty($_POST['national-double-contact11']) || empty($_POST['national-double-contact12']) ||
            empty($_POST['national-double-contact21']) || empty($_POST['national-double-contact22']) ||
            empty($_POST['national-double-age1']) || empty($_POST['national-double-age2']) || 
            empty($_POST['national-double-course1']) || empty($_POST['national-double-course2']) ||
            empty($_POST['national-double-college1']) || empty($_POST['national-double-college2']) || 
            empty($_POST['national-double-committee1']) || empty($_POST['national-double-committee2']) || empty($_POST['national-double-committee3']) || 
            empty($_POST['national-double-password']) 
        ) {
            $error = "Marked fields are mandatory";
            echo '<script language="javascript">';
            echo 'alert("Marked fields are mandatory")';
            echo '</script>';
        }

        else {

            $name1 = mysqli_real_escape_string($conn, $_POST['national-double-name1']);
            $name2 = mysqli_real_escape_string($conn, $_POST['national-double-name2']);

            $email1 = mysqli_real_escape_string($conn, $_POST['national-double-email1']);
            $email2 = mysqli_real_escape_string($conn, $_POST['national-double-email2']);

            $gender1 = mysqli_real_escape_string($conn, $_POST['national-double-gender1']);
            $gender2 = mysqli_real_escape_string($conn, $_POST['national-double-gender2']);

            $contact11 = mysqli_real_escape_string($conn, $_POST['national-double-contact11']);
            $contact12 = mysqli_real_escape_string($conn, $_POST['national-double-contact12']);

            $contact21 = mysqli_real_escape_string($conn, $_POST['national-double-contact21']);
            $contact22 = mysqli_real_escape_string($conn, $_POST['national-double-contact22']);

            $age1 = mysqli_real_escape_string($conn, $_POST['national-double-age1']);
            $age2 = mysqli_real_escape_string($conn, $_POST['national-double-age2']);

            $course1 = mysqli_real_escape_string($conn, $_POST['national-double-course1']);
            $college1 = mysqli_real_escape_string($conn, $_POST['national-double-college1']);
            $course2 = mysqli_real_escape_string($conn, $_POST['national-double-course2']);
            $college2 = mysqli_real_escape_string($conn, $_POST['national-double-college2']);

            $nationality1 = "Indian";
            $nationality2 = "Indian";

            $previous_experience1 = mysqli_real_escape_string($conn, $_POST['national-double-previous-experience1']);
            $previous_experience_details1 = mysqli_real_escape_string($conn, $_POST['national-double-previous-experience-details1']);
            $awards1 = mysqli_real_escape_string($conn, $_POST['national-double-awards1']);
            $awards_details1 = mysqli_real_escape_string($conn, $_POST['national-double-awards-details1']);

            $previous_experience2 = mysqli_real_escape_string($conn, $_POST['national-double-previous-experience2']);
            $previous_experience_details2 = mysqli_real_escape_string($conn, $_POST['national-double-previous-experience-details2']);
            $awards2 = mysqli_real_escape_string($conn, $_POST['national-double-awards2']);
            $awards_details2 = mysqli_real_escape_string($conn, $_POST['national-double-awards-details2']);

            // Commitee 1 
            $committee1 = mysqli_real_escape_string($conn, $_POST['national-double-committee1']);
            $country11 = mysqli_real_escape_string($conn, $_POST['national-double-country11']);
            $country12 = mysqli_real_escape_string($conn, $_POST['national-double-country12']);
            $country13 = mysqli_real_escape_string($conn, $_POST['national-double-country13']);

            // Commitee 2
            $committee2 = mysqli_real_escape_string($conn, $_POST['national-double-committee2']);
            $country21 = mysqli_real_escape_string($conn, $_POST['national-double-country21']);
            $country22 = mysqli_real_escape_string($conn, $_POST['national-double-country22']);
            $country23 = mysqli_real_escape_string($conn, $_POST['national-double-country23']);


            // Commitee 3
            $committee3 = mysqli_real_escape_string($conn, $_POST['national-double-committee3']);
            $country31 = mysqli_real_escape_string($conn, $_POST['national-double-country31']);
            $country32 = mysqli_real_escape_string($conn, $_POST['national-double-country32']);
            $country33 = mysqli_real_escape_string($conn, $_POST['national-double-country33']);


            $ref_id = mysqli_real_escape_string($conn, $_POST['national-double-ref-id']);
            $password = mysqli_real_escape_string($conn, $_POST['national-double-password']);

            

            $round = 1;


            $sql = " select * from registration_double_delegation where email1='" . $email1 . "'  OR email2='". $email2."'" ;
            $res = mysqli_query($conn, $sql);


            if (mysqli_num_rows($res) > 0) {
                echo '<script language="javascript">';
                echo 'alert("User with this email already exist")';
                echo '</script>';
            } else {
                $query = " insert into registration_double_delegation (
                    name1, name2, gender1, gender2, email1, email2, contact11, contact12, contact21,contact22,
                    age1, age2, course1, course2, college1, college2, nationality1, nationality2,
                    previous_experience1, previous_experience_details1, previous_experience2, previous_experience_details2, 
                    awards1, awards_details1,awards2, awards_details2, 
                    committee1, country11, country12, country13,
                    committee2, country21, country22, country23,
                    committee3, country31, country32, country33,
                    reference_id, password, round )                                   
                    
                    
                    values (
                    '$name1', '$name2','$gender1', '$gender2','$email1', '$email2', '$contact11', '$contact12', '$contact21', '$contact22', 
                    '$age1', '$age2','$course1', '$course2','$college1', '$college2','$nationality1','$nationality2',
                    '$previous_experience1', '$previous_experience_details1','$previous_experience2', '$previous_experience_details2',  
                    '$awards1', '$awards_details1', '$awards2', '$awards_details2', 
                    '$committee1', '$country11', '$country12', '$country13', 
                    '$committee2', '$country21', '$country22', '$country23',
                    '$committee3', '$country31', '$country32', '$country33',
                    '$ref_id', '$password', '$round' )";


                if (mysqli_query($conn, $query)) {

                    $select_ca = "SELECT points FROM campus_ambassador WHERE reference_id = '".$ref_id."'";
                    $ca = mysqli_query($conn,$select_ca);   

                    if(mysqli_num_rows($ca) > 0) {
                    $row_ca = mysqli_fetch_assoc($ca);
                    $actual_point = $row_ca['points'];
                    $update_point = $actual_point+10;
                    $update_ca = "UPDATE campus_ambassador SET points='".$update_point."' WHERE reference_id='".$ref_id."'";
                    mysqli_query($conn,$update_ca);
                    }

                    
                    echo '<script language="javascript">';
                    echo 'alert("Successfully Registered")';
                    echo '</script>';
                    
                    } 
                else {
                    echo "Error: " . $query . "<br>" . mysqli_error($conn);
                }
                // mysqli_query($conn, $query);
            }
        }
    }
?>

<section id="contact-second">
    <div class="mx-auto">
        <h1>Indian <br><b>Double Delegates</b></h1>
        <hr>
        <!-- Redirect on the same page -->
        <form method="POST" action="<?php echo mysqli_real_escape_string($conn, $_SERVER["PHP_SELF"]); ?>">
            <div class="form-check">
                <center><input type="checkbox" class="form-check-input" id="terms">
                    <label class="form-check-label" for="exampleCheck1">I have read the <a href="./rules-and-regulations.html" target="_blank"> Rules and Regulations</a></label></center>
            </div>

            <div class="form-row">
                <div class="col-xs-4 col-md-6 col-sm-6">
                    <div class="form-group">
                        <label for="name1">Name of Delegate 1 *</label>
                        <input type="text" name="national-double-name1" class="form-control" id="name1" placeholder="Please Enter your Full Name" required>
                    </div>
                </div>
                <div class="col-xs-4 col-md-6 col-sm-6">
                    <div class="form-group">
                        <label for="name2">Name of Delegate 2 *</label>
                        <input type="text" name="national-double-name2" class="form-control" id="name2" placeholder="Please Enter your Full Name" required>
                    </div>
                </div>
            </div>
            <br>
            <div class="form-row">
                <div class="col-xs-4 col-md-6 col-sm-6">
                    <div class="form-group">
                        <label for="gender1">Gender of Delegate 1 *</label>
                        <select name="national-double-gender1" class="form-control" id="gender1" required>
                            <option value="" selected disabled>Please select your Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>
                <div class="col-xs-4 col-md-6 col-sm-6">
                    <div class="form-group">
                        <label for="gender2">Gender of Delegate 2 *</label>
                        <select name="national-double-gender2" class="form-control" id="gender2" required>
                            <option value="" selected disabled>Please select your Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>
            </div>
            <br>
            <div class="form-row">
                <div class="col-xs-4 col-md-6 col-sm-6">
                    <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                        <label for="email1">Mail ID delegate 1 *</label>
                        <input type="email" name="national-double-email1" class="form-control" id="email1" placeholder="Please Enter your Email Address" required>
                    </div>
                </div>
                <div class="col-xs-4 col-md-6 col-sm-6">
                    <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                        <label for="email2">Mail ID delegate 2 *</label>
                        <input type="email" name="national-double-email2" class="form-control" id="email2" placeholder="Please Enter your Email Address" required>
                    </div>
                </div>
            </div>
            <br>
            <div class="form-row">
                <div class="col-xs-4 col-md-6 col-sm-6">
                    <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                        <label for="phone_call1">Contact Number (Call) delegate 1 *</label>
                        <input type="number" name="national-double-contact11" class="form-control" id="phone_call1" pattern="[0-9]{10}" placeholder="Please Enter your contact number for calling" required>
                    </div>
                </div>
                <div class="col-xs-4 col-md-6 col-sm-6">
                    <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                        <label for="phone_call2">Contact Number (Call) delegate 2 *</label>
                        <input type="number" name="national-double-contact21" class="form-control" id="phone_call2" pattern="[0-9]{10}" placeholder="Please Enter your contact number for calling" required>
                    </div>
                </div>
            </div>
            <br>
            <div class="form-row">
                <div class="col-xs-4 col-md-6 col-sm-6">
                    <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                        <label for="phone_whatsapp1">Contact Number (WhatsApp) delegate 1 *</label>
                        <input type="number" name="national-double-contact12" class="form-control" id="phone_whatsapp1" pattern="[0-9]{10}" placeholder="Please Enter your Whatsapp contact number" required>
                    </div>
                </div>
                <div class="col-xs-4 col-md-6 col-sm-6">
                    <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                        <label for="phone_whatsapp2">Contact Number (WhatsApp) delegate 2 *</label>
                        <input type="number" name="national-double-contact22" class="form-control" id="phone_whatsapp2" pattern="[0-9]{10}" placeholder="Please Enter your Whatsapp contact number" required>
                    </div>
                </div>
            </div>
            <br>
            <div class="form-row">
                <div class="col-xs-4 col-md-6 col-sm-6">
                    <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                        <label for="age1">Age delegate 1 *</label>
                        <input type="number" name="national-double-age1" class="form-control" id="age1" placeholder="Please Enter your Age" required>
                    </div>
                </div>
                <div class="col-xs-4 col-md-6 col-sm-6">
                    <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                        <label for="age2">Age delegate 2 *</label>
                        <input type="number" name="national-double-age2" class="form-control" id="age2" placeholder="Please Enter your Age" required>
                    </div>
                </div>
            </div>
            <br>
            <div class="form-row">
                <div class="col-xs-4 col-md-6 col-sm-6">
                    <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                        <label for="course1">Course/Stream delegate 1 *</label>
                        <input type="text" name="national-double-course1" class="form-control" id="course1" placeholder="Please Enter your Course/Stream" required>
                    </div>
                </div>
                <div class="col-xs-4 col-md-6 col-sm-6">
                    <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                        <label for="course2">Course/Stream delegate 2 *</label>
                        <input type="text" name="national-double-course2" class="form-control" id="course2" placeholder="Please Enter your Course/Stream" required>
                    </div>
                </div>
            </div>
            <br>
            <div class="form-row">
                <div class="col-xs-4 col-md-6 col-sm-6">
                    <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                        <label for="college1">School/College delegate 1 *</label>
                        <input type="text" name="national-double-college1" class="form-control" id="college1" placeholder="Please Enter your School/College" required>
                    </div>
                </div>
                <div class="col-xs-4 col-md-6 col-sm-6">
                    <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                        <label for="college2">School/College delegate 2 *</label>
                        <input type="text" name="national-double-college2" class="form-control" id="college2" placeholder="Please Enter your School/College" required>
                    </div>
                </div>
            </div>
            <br>

            <h4>Delegate 1</h4>
            <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                <label for="prevmun_number1">Previous MUN Experience (Number) *</label>
                <input type="number" name="national-double-previous-experience1" class="form-control" value="0" id="prevmun_number1" required>
            </div>
            <br>
            <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                <label for="prevmun_details1">Details about Previous MUN experience *</label>
                <textarea rows="5" name="national-double-previous-experience-details1" class="form-control" id="prevmun_details1" placeholder="Share some of your previous MUN experiences" required></textarea>
            </div>
            <br>
            <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                <label for="award_number1">Number of Awards *</label>
                <input type="number" name="national-double-awards1" class="form-control" value="0" id="award_number1" required>
            </div>
            <br>
            <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                <label for="award_details1">Details about awards *</label>
                <textarea rows="5" name="national-double-awards-details1" class="form-control" id="award_details1" placeholder="Share some of your previous MUN awards/recognitions" required></textarea>
            </div>
            <br>

            <h4>Delegate 2</h4>
            <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                <label for="prevmun_number2">Previous MUN Experience (Number) *</label>
                <input type="number" name="national-double-previous-experience2" class="form-control" value="0" id="prevmun_number2" required>
            </div>
            <br>
            <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                <label for="prevmun_details2">Details about Previous MUN experience *</label>
                <textarea rows="5" name="national-double-previous-experience-details2" class="form-control" id="prevmun_details2" placeholder="Share some of your previous MUN experiences" required></textarea>
            </div>
            <br>
            <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                <label for="award_number2">Number of Awards *</label>
                <input type="number" name="national-double-awards2" class="form-control" value="0" id="award_number2" required>
            </div>
            <br>
            <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                <label for="award_details2">Details about awards *</label>
                <textarea rows="5" name="national-double-awards-details2" class="form-control" id="award_details2" placeholder="Share some of your previous MUN awards/recognitions" required></textarea>
            </div>
            <br><br>
            <br>
            <hr>

            <div class="form-group">
                <label for="first_committee">First Committee Preference *</label>
                <select name="national-double-committee1" onchange="getCountries('national-double-first_committee')"
                 class="form-control" id="national-double-first_committee" required>
                    <option value="" selected disabled>Please select your First Committee Preference</option>
                    <?php include "./forms/committees_double_delegate.php"; ?>
                </select>
            </div>
            <br>
            <div class="form-row">
                <div class="col-xs-4 col-md-4 col-sm-6" style="padding: 0; padding-right: 1vmin;">
                    <div class="form-group">
                        <select name="national-double-country11" class="form-control" id="national-double-first_committee_country_1" >
                            <option value="" selected disabled>Country Choice 1</option>

                        </select>
                    </div>
                </div>
                <div class="col-xs-4 col-md-4 col-sm-6" style="padding: 0; padding-right: 1vmin;">
                    <div class="form-group">
                        <select name="national-double-country12" class="form-control" id="national-double-first_committee_country_2" >
                            <option value="" selected disabled>Country Choice 2</option>

                        </select>
                    </div>
                </div>
                <div class="col-xs-4 col-md-4 col-sm-6" style="padding: 0; padding-right: 1vmin;">
                    <div class="form-group">
                        <select name="national-double-country13" class="form-control" id="national-double-first_committee_country_3" >
                            <option value="" selected disabled>Country Choice 3</option>

                        </select>
                    </div>
                </div>
            </div>
            
            <br>

            <div class="form-group">
                <label for="second_committee">Second Committee Preference *</label>
                <select name="national-double-committee2" class="form-control" onchange="getCountries('national-double-second_committee')"
                    id="national-double-second_committee" >
                    <option value="" selected disabled>Please select your Second Committee Preference</option>
                    <?php include "./forms/committees_double_delegate.php"; ?>
                </select>
            </div>
            <br>
            <div class="form-row">
                <div class="col-xs-4 col-md-4 col-sm-6">
                    <div class="form-group">
                        <select name="national-double-country21" class="form-control" id="national-double-second_committee_country_1" >
                            <option value="" selected disabled>Country Choice 1</option>

                        </select>
                    </div>
                </div>
                <div class="col-xs-4 col-md-4 col-sm-6">
                    <div class="form-group">
                        <select name="national-double-country22" class="form-control" id="national-double-second_committee_country_2" >
                            <option value="" selected disabled>Country Choice 2</option>

                        </select>
                    </div>
                </div>
                <div class="col-xs-4 col-md-4 col-sm-6">
                    <div class="form-group">
                        <select name="national-double-country23" class="form-control" id="national-double-second_committee_country_3" >
                            <option value="" selected disabled>Country Choice 3</option>

                        </select>
                    </div>
                </div>
            </div>                
            <br>

            <div class="form-group">
                <label for="third_committee">Third Committee Preference *</label>
                <select name="national-double-committee3" class="form-control" onchange="getCountries('national-double-third_committee')"
                    id="national-double-third_committee" >
                    <option value="" selected disabled>Please select your Third Committee Preference</option>
                    <?php include "./forms/committees_double_delegate.php"; ?>
                </select>
            </div>
            <br>
            <div class="form-row">
                <div class="col-xs-4 col-md-4 col-sm-6">
                    <div class="form-group">
                        <select name="national-double-country31" class="form-control" id="national-double-third_committee_country_1" >
                            <option value="" selected disabled>Country Choice 1</option>

                        </select>
                    </div>
                </div>
                <div class="col-xs-4 col-md-4 col-sm-6">
                    <div class="form-group">
                        <select name="national-double-country32" class="form-control" id="national-double-third_committee_country_2" >
                            <option value="" selected disabled>Country Choice 2</option>

                        </select>
                    </div>
                </div>
                <div class="col-xs-4 col-md-4 col-sm-6">
                    <div class="form-group">
                        <select name="national-double-country33" class="form-control" id="national-double-third_committee_country_3" >
                            <option value="" selected disabled>Country Choice 3</option>

                        </select>
                    </div>
                </div>
            </div>
          
            <br>
            <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                <label for="ref-id">Reference ID</label>
                <input type="text" name="national-double-ref-id" class="form-control" id="ref-id"  placeholder="Enter a Reference ID" >
            </div>
            <br>
            <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                <label for="password">Do you want Accomodation?*</label>
                <input type="text" name="national-double-password" class="form-control" id="password"  placeholder="Enter YES or NO" required>
            </div>
            <br>


            <button class="btn btn-lg btn-block" type="submit" style="height:50px" name="national-double-submit">Submit</button>
    </div>
    </form>


    </div>
</section>