<?php 
    include "db_config.php";
    ?>

<?php
    if (isset($_POST['national-single-submit'])) {

        if(!isset($_POST['national-single-name']) || !isset($_POST['national-single-email']) ||
            !isset($_POST['national-single-gender']) ||
            !isset($_POST['national-single-contact1']) || !isset($_POST['national-single-contact2']) ||
            !isset($_POST['national-single-age']) || !isset($_POST['national-single-course']) ||
            !isset($_POST['national-single-college']) || !isset($_POST['national-single-committee1']) ||
            !isset($_POST['national-single-committee2']) ||!isset($_POST['national-single-committee3']) ||
            !isset($_POST['national-single-password']) ||

            empty($_POST['national-single-name']) || empty($_POST['national-single-email']) ||
            empty($_POST['national-single-gender']) ||
            empty($_POST['national-single-contact1']) || empty($_POST['national-single-contact2']) ||
            empty($_POST['national-single-age']) || empty($_POST['national-single-course']) ||
            empty($_POST['national-single-college']) || empty($_POST['national-single-committee1']) ||
            empty($_POST['national-single-committee2']) || empty($_POST['national-single-committee3']) ||
            empty($_POST['national-single-password'])
        ) {
            $error = "Marked fields are mandatory";
        }

        else {

            $name = mysqli_real_escape_string($conn, $_POST['national-single-name']);
            $email = mysqli_real_escape_string($conn, $_POST['national-single-email']);
            $gender = mysqli_real_escape_string($conn, $_POST['national-single-gender']);                          
            $contact1 = mysqli_real_escape_string($conn, $_POST['national-single-contact1']);
            $contact2 = mysqli_real_escape_string($conn, $_POST['national-single-contact2']);
            $age = mysqli_real_escape_string($conn, $_POST['national-single-age']);
            $course = mysqli_real_escape_string($conn, $_POST['national-single-course']);
            $college = mysqli_real_escape_string($conn, $_POST['national-single-college']);
            $nationality = "Indian";
            $previous_experience = mysqli_real_escape_string($conn, $_POST['national-single-previous-experience']);
            $previous_experience_details = mysqli_real_escape_string($conn, $_POST['national-single-previous-experience-details']);
            $awards = mysqli_real_escape_string($conn, $_POST['national-single-awards']);
            $awards_details = mysqli_real_escape_string($conn, $_POST['national-single-awards-details']);

            // Commitee 1 
            $committee1 = mysqli_real_escape_string($conn, $_POST['national-single-committee1']);
            $country11 = mysqli_real_escape_string($conn, $_POST['national-single-country11']);
            $country12 = mysqli_real_escape_string($conn, $_POST['national-single-country12']);
            $country13 = mysqli_real_escape_string($conn, $_POST['national-single-country13']);

            // Commitee 2
            $committee2 = mysqli_real_escape_string($conn, $_POST['national-single-committee2']);
            $country21 = mysqli_real_escape_string($conn, $_POST['national-single-country21']);
            $country22 = mysqli_real_escape_string($conn, $_POST['national-single-country22']);
            $country23 = mysqli_real_escape_string($conn, $_POST['national-single-country23']);


            // Commitee 3
            $committee3 = mysqli_real_escape_string($conn, $_POST['national-single-committee3']);
            $country31 = mysqli_real_escape_string($conn, $_POST['national-single-country31']);
            $country32 = mysqli_real_escape_string($conn, $_POST['national-single-country32']);
            $country33 = mysqli_real_escape_string($conn, $_POST['national-single-country33']);


            $ref_id = mysqli_real_escape_string($conn, $_POST['national-single-ref-id']);
            $password = mysqli_real_escape_string($conn, $_POST['national-single-password']);

            

            $round = 1;


            $sql = " select * from registration_single_delegation where email='" . $email . "'";
            $res = mysqli_query($conn, $sql);


            if (mysqli_num_rows($res) > 0) {
                echo '<script language="javascript">';
                echo 'alert("User with this email already exist")';
                echo '</script>';
            } else {
                $query = " insert into registration_single_delegation (
                    name, gender, email, contact1, contact2, age, course, college, nationality, previous_experience,
                    previous_experience_details, awards, awards_details, 
                    committee1, country11, country12, country13,  
                    committee2, country21, country22, country23,
                    committee3, country31, country32, country33,
                    reference_id, password, round )                                   
                    
                    
                    values (
                    '$name', '$gender', '$email', '$contact1', '$contact2', '$age', '$course', '$college', '$nationality','$previous_experience', '$previous_experience_details', '$awards', '$awards_details', 
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
        <h1>Indian <br><b>Single Delegates</b></h1>
        <hr>
        <!-- Redirect on the same page -->
        <form method="POST" action="<?php echo mysqli_real_escape_string($conn, $_SERVER["PHP_SELF"]); ?>">


            <div class="form-check">
            <center><input type="checkbox" class="form-check-input" id="terms">
                <label class="form-check-label" for="exampleCheck1">I have read the <a 
                href="./rules-and-regulations.html"
                 target="_blank"> Rules and Regulations</a></label></center>
            </div>
            <div class="form-group">
                <label for="name">Name *</label>
                <input type="text" name="national-single-name" class="form-control" id="name" placeholder="Please Enter your Full Name" required>
            </div>
            <br>
            <div class="form-group">
                <label for="gender">Gender *</label>
                <select name="national-single-gender" class="form-control" id="gender" required>
                    <option value="" selected disabled>Please select your Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </select>
            </div>
            <br>
            <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                <label for="email">Mail ID *</label>
                <input type="email" name="national-single-email" class="form-control" id="email" placeholder="Please Enter your Email Address" required>
            </div>
            <br>
            <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                <label for="phone_call">Contact Number (Call) *</label>
                <input type="number" name="national-single-contact1" class="form-control" id="phone_call" pattern="[0-9]{10}" placeholder="Please Enter your contact number for calling" required>
            </div>
            <br>
            <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                <label for="phone_whatsapp">Contact Number (WhatsApp) *</label>
                <input type="number" name="national-single-contact2" class="form-control" id="phone_whatsapp" pattern="[0-9]{10}" placeholder="Please Enter your Whatsapp contact number" required>
            </div>
            <br>
            <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                <label for="age">Age *</label>
                <input type="number" name="national-single-age" class="form-control" id="age" placeholder="Please Enter your Age" required>
            </div>
            <br>
            <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                <label for="course">Course/Stream *</label>
                <input type="text" name="national-single-course" class="form-control" id="course" placeholder="Please Enter your Course/Stream" required>
            </div>
            <br>
            <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                <label for="college">School/College *</label>
                <input type="text" name="national-single-college" class="form-control" id="college" placeholder="Please Enter your School/College" required>
            </div>
            <br>
          
            <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                <label for="prevmun_number">Previous MUN Experience (Number) *</label>
                <input type="number" name="national-single-previous-experience" class="form-control" value="0" id="prevmun_number" required>
            </div>
            <br>
            <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                <label for="prevmun_details">Details about Previous MUN experience *</label>
                <textarea rows="5" name="national-single-previous-experience-details" class="form-control" id="prevmun_details" placeholder="Share some of your previous MUN experiences" required></textarea>
            </div>
            <br>
            <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                <label for="award_number">Number of Awards *</label>
                <input type="number" name="national-single-awards" class="form-control" value="0" id="award_number" required>
            </div>
            <br>
            <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                <label for="award_details">Details about awards *</label>
                <textarea rows="5" name="national-single-awards-details" class="form-control" id="award_details" placeholder="Share some of your previous MUN awards/recognitions" required></textarea>
            </div>
            <br>

            <div class="form-group">
                <label for="first_committee">First Committee Preference *</label>
                <select name="national-single-committee1" class="form-control" id="national-single-first_committee" required
                    onchange="getCountries('national-single-first_committee')">
                    <option value="" selected disabled>Please select your First Committee Preference</option>
                    <?php include "./forms/committees_single_delegate.php"; ?>
                </select>
            </div>
            <br>
            <div class="form-row">
                <div class="col-xs-4 col-md-4 col-sm-6" style="padding: 0; padding-right: 1vmin;">
                    <div class="form-group">
                        <select name="national-single-country11" class="form-control" id="national-single-first_committee_country_1" >
                            <option value="" selected disabled>Country Choice 1</option>
                        </select>
                    </div>
                </div>
                <div class="col-xs-4 col-md-4 col-sm-6" style="padding: 0; padding-right: 1vmin;">
                    <div class="form-group">
                        <select name="national-single-country12" class="form-control" id="national-single-first_committee_country_2" >
                            <option value="" selected disabled>Country Choice 2</option>

                        </select>
                    </div>
                </div>
                <div class="col-xs-4 col-md-4 col-sm-6" style="padding: 0; padding-right: 1vmin;">
                    <div class="form-group">
                        <select name="national-single-country13" class="form-control" id="national-single-first_committee_country_3" >
                            <option value="" selected disabled>Country Choice 3</option>

                        </select>
                    </div>
                </div>
            </div>
           

            <br>

            <div class="form-group">
                <label for="second_committee">Second Committee Preference *</label>
                <select name="national-single-committee2" class="form-control" id="national-single-second_committee" required
                    onchange="getCountries('national-single-second_committee')">
                    <option value="" selected disabled>Please select your Second Committee Preference</option>
                    <?php include "./forms/committees_single_delegate.php"; ?>
                </select>
            </div>
            <br>
            <div class="form-row">
                <div class="col-xs-4 col-md-4 col-sm-6">
                    <div class="form-group">
                        <select name="national-single-country21" class="form-control" id="national-single-second_committee_country_1" >
                            <option value="" selected disabled>Country Choice 1</option>

                        </select>
                    </div>
                </div>
                <div class="col-xs-4 col-md-4 col-sm-6">
                    <div class="form-group">
                        <select name="national-single-country22" class="form-control" id="national-single-second_committee_country_2" >
                            <option value="" selected disabled>Country Choice 2</option>

                        </select>
                    </div>
                </div>
                <div class="col-xs-4 col-md-4 col-sm-6">
                    <div class="form-group">
                        <select name="national-single-country23" class="form-control" id="national-single-second_committee_country_3" >
                            <option value="" selected disabled>Country Choice 3</option>

                        </select>
                    </div>
                </div>
            </div>
          
            <br>

            <div class="form-group">
                <label for="third_committee">Third Committee Preference *</label>
                <select name="national-single-committee3" class="form-control" id="national-single-third_committee" required 
                    onchange="getCountries('national-single-third_committee')" >
                    <option value="" selected disabled>Please select your Third Committee Preference</option>
                    <?php include "./forms/committees_single_delegate.php"; ?>
                </select>
            </div>
            <br>
            <div class="form-row">
                <div class="col-xs-4 col-md-4 col-sm-6">
                    <div class="form-group">
                        <select name="national-single-country31" class="form-control" id="national-single-third_committee_country_1" >
                            <option value="" selected disabled>Country Choice 1</option>

                        </select>
                    </div>
                </div>
                <div class="col-xs-4 col-md-4 col-sm-6">
                    <div class="form-group">
                        <select name="national-single-country32" class="form-control" id="national-single-third_committee_country_2" >
                            <option value="" selected disabled>Country Choice 2</option>

                        </select>
                    </div>
                </div>
                <div class="col-xs-4 col-md-4 col-sm-6">
                    <div class="form-group">
                        <select name="national-single-country33" class="form-control" id="national-single-third_committee_country_3" >
                            <option value="" selected disabled>Country Choice 3</option>

                        </select>
                    </div>
                </div>
            </div>
            
            <br>
            <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                <label for="ref-id">Reference ID</label>
                <input type="text" name="national-single-ref-id" class="form-control" id="ref-id"  placeholder="Enter a Reference ID" >
            </div>
            <br>
            <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                <label for="password">Do you want Accomodation?*</label>
                <input type="text" name="national-single-password" class="form-control" id="password"  placeholder="Enter YES or NO" required>
            </div>
            <br>


            <button class="btn btn-lg btn-block" type="submit" style="height:50px" name="national-single-submit">Submit</button>
    </div>
    </form>

    </div>
</section>