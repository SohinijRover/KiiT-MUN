<?php 
    include "db_config.php";
?>

<?php
    if (isset($_POST['foreign-single-submit'])) {

        if(!isset($_POST['foreign-single-name']) || !isset($_POST['foreign-single-email']) ||
            !isset($_POST['foreign-single-gender']) ||
            !isset($_POST['foreign-single-contact1']) || !isset($_POST['foreign-single-contact2']) ||
            !isset($_POST['foreign-single-age']) || !isset($_POST['foreign-single-course']) ||
            !isset($_POST['foreign-single-college']) || !isset($_POST['foreign-single-committee1']) ||
            !isset($_POST['foreign-single-committee2']) ||!isset($_POST['foreign-single-committee3']) ||
            !isset($_POST['foreign-single-password']) ||

            empty($_POST['foreign-single-name']) || empty($_POST['foreign-single-email']) ||
            empty($_POST['foreign-single-gender']) ||
            empty($_POST['foreign-single-contact1']) || empty($_POST['foreign-single-contact2']) ||
            empty($_POST['foreign-single-age']) || empty($_POST['foreign-single-course']) ||
            empty($_POST['foreign-single-college']) || empty($_POST['foreign-single-committee1']) ||
            empty($_POST['foreign-single-committee2']) ||empty($_POST['foreign-single-committee3']) ||
            empty($_POST['foreign-single-password']) 

        ) {
            $error = "Marked fields are mandatory";
            echo '<script language="javascript">';
            echo 'alert("Marked fields are mandatory")';
            echo '</script>';
        }

        else {

            $name = mysqli_real_escape_string($conn, $_POST['foreign-single-name']);
            $email = mysqli_real_escape_string($conn, $_POST['foreign-single-email']);
            $gender = mysqli_real_escape_string($conn, $_POST['foreign-single-gender']);                          
            $contact1 = mysqli_real_escape_string($conn, $_POST['foreign-single-contact1']);
            $contact2 = mysqli_real_escape_string($conn, $_POST['foreign-single-contact2']);
            $age = mysqli_real_escape_string($conn, $_POST['foreign-single-age']);
            $course = mysqli_real_escape_string($conn, $_POST['foreign-single-course']);
            $college = mysqli_real_escape_string($conn, $_POST['foreign-single-college']);

            $nationality = mysqli_real_escape_string($conn, $_POST['foreign-single-nationality']);

            $previous_experience = mysqli_real_escape_string($conn, $_POST['foreign-single-previous-experience']);
            $previous_experience_details = mysqli_real_escape_string($conn, $_POST['foreign-single-previous-experience-details']);
            $awards = mysqli_real_escape_string($conn, $_POST['foreign-single-awards']);
            $awards_details = mysqli_real_escape_string($conn, $_POST['foreign-single-awards-details']);

            // Commitee 1 
            $committee1 = mysqli_real_escape_string($conn, $_POST['foreign-single-committee1']);
            $country11 = mysqli_real_escape_string($conn, $_POST['foreign-single-country11']);
            $country12 = mysqli_real_escape_string($conn, $_POST['foreign-single-country12']);
            $country13 = mysqli_real_escape_string($conn, $_POST['foreign-single-country13']);

            // Commitee 2
            $committee2 = mysqli_real_escape_string($conn, $_POST['foreign-single-committee2']);
            $country21 = mysqli_real_escape_string($conn, $_POST['foreign-single-country21']);
            $country22 = mysqli_real_escape_string($conn, $_POST['foreign-single-country22']);
            $country23 = mysqli_real_escape_string($conn, $_POST['foreign-single-country23']);


            // Commitee 3
            $committee3 = mysqli_real_escape_string($conn, $_POST['foreign-single-committee3']);
            $country31 = mysqli_real_escape_string($conn, $_POST['foreign-single-country31']);
            $country32 = mysqli_real_escape_string($conn, $_POST['foreign-single-country32']);
            $country33 = mysqli_real_escape_string($conn, $_POST['foreign-single-country33']);

            $ref_id = mysqli_real_escape_string($conn, $_POST['foreign-single-ref-id']);
            $password = mysqli_real_escape_string($conn, $_POST['foreign-single-password']);

            $round = 1;


            $sql = " select * from registration_single_delegation where email='" . $email . "'";
            $res = mysqli_query($conn, $sql);


            if (mysqli_num_rows($res) > 0) {
                echo '<script language="javascript">';
                echo 'alert("User with this email already exist")';
                echo '</script>';
            } 
            else {                                
                $query = " insert into registration_single_delegation (
                    name, gender, email, contact1, contact2, age, course, college, nationality, previous_experience,
                    previous_experience_details, awards, awards_details, 
                    committee1, country11, country12, country13,  
                    committee2, country21, country22, country23,
                    committee3, country31, country32, country33,
                    reference_id, password, round)                                   
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
            }
        }   
    }
?>

<section id="contact-second">
    <div class="mx-auto">
        <h1>Foreign <br><b>Single Delegates</b></h1>
        <hr>
        <!-- Redirect on the same page -->
        <form method="POST" enctype="multipart/form-data" action="<?php echo mysqli_real_escape_string($conn, $_SERVER["PHP_SELF"]); ?>">

            <div class="form-check">
                <center><input type="checkbox" class="form-check-input" id="terms">
                    <label class="form-check-label" for="exampleCheck1">I have read the <a href="./rules-and-regulations.html" target="_blank"> Rules and Regulations</a></label></center>
            </div>
            <div class="form-group">
                <label for="name">Name *</label>
                <input type="text" name="foreign-single-name" class="form-control" id="name" placeholder="Please Enter your Full Name" required>
            </div>
            <br>
            <div class="form-group">
                <label for="gender">Gender *</label>
                <select name="foreign-single-gender" class="form-control" id="gender" required>
                    <option value="" selected disabled>Please select your Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </select>
            </div>
            <br>
            <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                <label for="email">Mail ID *</label>
                <input type="email" name="foreign-single-email" class="form-control" id="email" placeholder="Please Enter your Email Address" required>
            </div>
            <br>
            <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                <label for="phone_call">Contact Number (Call) with Country Code *</label>
                <input type="number" name="foreign-single-contact1" class="form-control" id="phone_call" pattern="[0-9]{10}" placeholder="Please Enter your contact number for calling" required>
            </div>
            <br>
            <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                <label for="phone_whatsapp">Contact Number (WhatsApp) with Country Code *</label>
                <input type="number" name="foreign-single-contact2" class="form-control" id="phone_whatsapp" pattern="[0-9]{10}" placeholder="Please Enter your Whatsapp contact number" required>
            </div>
            <br>
            <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                <label for="age">Age *</label>
                <input type="number" name="foreign-single-age" class="form-control" id="age" placeholder="Please Enter your Age" required>
            </div>
            <br>
            <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                <label for="course">Course/Stream *</label>
                <input type="text" name="foreign-single-course" class="form-control" id="course" placeholder="Please Enter your Course/Stream" required>
            </div>
            <br>
            <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                <label for="college">School/College *</label>
                <input type="text" name="foreign-single-college" class="form-control" id="college" placeholder="Please Enter your School/College" required>
            </div>
            <br>
            <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                <label for="nationality">Nationality *</label>
                <input type="text" name="foreign-single-nationality" class="form-control" id="nationality" placeholder="Please Enter your Nationality" required>
            </div>
            <br>
            <!-- <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                <label for="proofNationality">Valid Identity proof or Resident proof confirming your country</label>
                <input type="file" class="form-control-file" id="proofNationality" name="identity-proof">
            </div>
            <br> -->
            <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                <label for="prevmun_number">Previous MUN Experience (Number) *</label>
                <input type="number" name="foreign-single-previous-experience" class="form-control" value="0" id="prevmun_number" required>
            </div>
            <br>
            <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                <label for="prevmun_details">Details about Previous MUN experience *</label>
                <textarea rows="5" name="foreign-single-previous-experience-details" class="form-control" id="prevmun_details" placeholder="Share some of your previous MUN experiences" required></textarea>
            </div>
            <br>
            <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                <label for="award_number">Number of Awards *</label>
                <input type="number" name="foreign-single-awards" class="form-control" value="0" id="award_number" required>
            </div>
            <br>
            <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                <label for="award_details">Details about awards *</label>
                <textarea rows="5" name="foreign-single-awards-details" class="form-control" id="award_details" placeholder="Share some of your previous MUN awards/recognitions" required></textarea>
            </div>
            <br>

            <div class="form-group">
                <label for="first_committee">First Committee Preference *</label>
                <select name="foreign-single-committee1" class="form-control" 
                    onchange="getCountries('foreign-single-first_committee')"
                    id="foreign-single-first_committee" required>
                    <option value="" selected disabled>Please select your First Committee Preference</option>
                    <?php include "./forms/committees_single_delegate.php"; ?>
                </select>
            </div>
            <br>
            <div class="form-row">
                <div class="col-xs-4 col-md-4 col-sm-6" style="padding: 0; padding-right: 1vmin;">
                    <div class="form-group">
                        <select name="foreign-single-country11" class="form-control" id="foreign-single-first_committee_country_1" >
                            <option value="" selected disabled>Country Choice 1</option>

                        </select>
                    </div>
                </div>
                <div class="col-xs-4 col-md-4 col-sm-6" style="padding: 0; padding-right: 1vmin;">
                    <div class="form-group">
                        <select name="foreign-single-country12" class="form-control" id="foreign-single-first_committee_country_2" >
                            <option value="" selected disabled>Country Choice 2</option>

                        </select>
                    </div>
                </div>
                <div class="col-xs-4 col-md-4 col-sm-6" style="padding: 0; padding-right: 1vmin;">
                    <div class="form-group">
                        <select name="foreign-single-country13" class="form-control" id="foreign-single-first_committee_country_3" >
                            <option value="" selected disabled>Country Choice 3</option>

                        </select>
                    </div>
                </div>
            </div>
            <br>

            <div class="form-group">
                <label for="second_committee">Second Committee Preference *</label>
                <select name="foreign-single-committee2" class="form-control" 
                    onchange="getCountries('foreign-single-second_committee')"
                    id="foreign-single-second_committee" >
                    <option value="" selected disabled>Please select your Second Committee Preference</option>
                    <?php include "./forms/committees_single_delegate.php"; ?>
                </select>
            </div>
            <br>
            <div class="form-row">
                <div class="col-xs-4 col-md-4 col-sm-6">
                    <div class="form-group">
                        <select name="foreign-single-country21" class="form-control" id="foreign-single-second_committee_country_1" >
                            <option value="" selected disabled>Country Choice 1</option>

                        </select>
                    </div>
                </div>
                <div class="col-xs-4 col-md-4 col-sm-6">
                    <div class="form-group">
                        <select name="foreign-single-country22" class="form-control" id="foreign-single-second_committee_country_2" >
                            <option value="" selected disabled>Country Choice 2</option>

                        </select>
                    </div>
                </div>
                <div class="col-xs-4 col-md-4 col-sm-6">
                    <div class="form-group">
                        <select name="foreign-single-country23" class="form-control" id="foreign-single-second_committee_country_3" >
                            <option value="" selected disabled>Country Choice 3</option>

                        </select>
                    </div>
                </div>
            </div>
           
            <br>

            <div class="form-group">
                <label for="third_committee">Third Committee Preference *</label>
                <select name="foreign-single-committee3" class="form-control" 
                    onchange="getCountries('foreign-single-third_committee')"
                    id="foreign-single-third_committee" >
                    <option value="" selected disabled>Please select your Third Committee Preference</option>
                    <?php include "./forms/committees_single_delegate.php"; ?>
                </select>
            </div>
            <br>
            <div class="form-row">
                <div class="col-xs-4 col-md-4 col-sm-6">
                    <div class="form-group">
                        <select name="foreign-single-country31" class="form-control" id="foreign-single-third_committee_country_1" >
                            <option value="" selected disabled>Country Choice 1</option>

                        </select>
                    </div>
                </div>
                <div class="col-xs-4 col-md-4 col-sm-6">
                    <div class="form-group">
                        <select name="foreign-single-country32" class="form-control" id="foreign-single-third_committee_country_2" >
                            <option value="" selected disabled>Country Choice 2</option>

                        </select>
                    </div>
                </div>
                <div class="col-xs-4 col-md-4 col-sm-6">
                    <div class="form-group">
                        <select name="foreign-single-country33" class="form-control" id="foreign-single-third_committee_country_3" >
                            <option value="" selected disabled>Country Choice 3</option>

                        </select>
                    </div>
                </div>
            </div>
            
            <br>
            <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                <label for="ref-id">Reference ID</label>
                <input type="text" name="foreign-single-ref-id" class="form-control" id="ref-id"  placeholder="Enter a Reference ID" >
            </div>
            <br>
            <div class="col-xs-6" style="padding: 0; padding-right: 1vmin;">
                <label for="password">Do you want Accomodation? *</label>
                <input type="text" name="foreign-single-password" class="form-control" id="password"  placeholder="Enter YES or NO" required>
            </div>
            <br>



            <button class="btn btn-lg btn-block" type="submit" style="height:50px" name="foreign-single-submit">Submit</button>
    </div>
    </form>


    </div>
</section>