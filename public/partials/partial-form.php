<!-- <?php
if (empty($_POST) === false) {
  echo "<pre>", print_r($_POST, true), "</pre>";
}
?> -->

<h1>Enrollment Form</h1>
<form action="send.php" method="post">
  <p>
    <label for="name">Name:</label><br>
    <input type="text" name="name" id="name">
  </p>
  <p>
    <label for="email">Email:</label></br>
    <input type="text" name="email" id="email">
  </p>
  <p>
    <label for="message">Message:</label></br>
    <textarea name="message" id="message" rows="10" cols="50"></textarea>
  </p>
  <p>
    <input type="submit" value="Submit">
  </p>

</form>

<!-- check npm mailgun and sendgrid -->