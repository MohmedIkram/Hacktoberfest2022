<style>

/* .form-group{
  margin:8px 40px;
  padding:14px 23px;
} */
/* .form-group input{
  margin:14px 20px;
  padding:24px 13px;
  border-radius:23px;
} */


/* .formbtn{
  margin:14px 94px;
  padding:4px 100px;
} */

/* .form-group{
  margin:10px 30px;
  padding:8px 12px;
} */
</style>
  <!-- Modal -->
  <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title " id="loginModalLabel">Login To iForum</h3>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body ">
          
            <form action="partials/_handlelogin.php" method="POST">
                <div class="form-group ">
                    <!-- <label for="exampleInputEmail1">Email address</label> -->
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="username" name='email'>
                </div>
                <div class="form-group ">
                    <!-- <label for="exampleInputPassword1">Password</label> -->
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="password">
                    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
               <div class="formbtn form-group"> 
                <button type="submit" class="btn btn-primary btn-block">Login</button>
                </div>

                <!-- <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div> -->
            </form>
        </div>
      </div>
    </div>
  </div>