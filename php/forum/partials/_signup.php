  <!-- Modal -->
  <div class="modal fade" id="signupModal" tabindex="-1" role="dialog" aria-labelledby="signupModalLabel"
      aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <h3 class="modal-title " id="signupModalLabel">Register for an iForum</h3>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div class="modal-body">
                  <form action="partials/_handlesignup.php" method="POST">
                      <div class="form-row">
                          <div class="form-group col">
                              <!-- <label for="exampleInputPassword1">Password</label> -->
                              <input type="text" class="form-control" id="exampleInputPassword1"
                                  placeholder="Display Name" name="dname" required>
                          </div>

                          <div class="form-group col">
                              <!-- <label for="exampleInputPassword1">Password</label> -->
                              <input type="text" class="form-control" id="exampleInputPassword1" name="phone"
                                  placeholder="Phone no." required>
                          </div>
                      </div>

                      <div class="form-group">
                          <!-- <label for="exampleInputEmail1">Email address</label> -->
                          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                              name="email" placeholder="username " required>
                      </div>
                      <div class="form-group">
                          <!-- <label for="exampleInputPassword1">Password</label> -->
                          <input type="password" class="form-control" id="exampleInputPassword1" name="password"
                              placeholder="Password" required>
                      </div>
                      <div class="form-group">
                          <!-- <label for="exampleInputPassword1">Password</label> -->
                          <input type="password" class="form-control" id="exampleInputPassword1" name="cpassword"
                              placeholder="Confirm Password" required>
                          <small id="emailHelp" class="form-text text-muted">We'll never share your information with
                              anyone else.</small>
                      </div>
                      <div class="form-group form-check">
                          <input type="checkbox" class="form-check-input" id="exampleCheck1" aria-required="true">
                          <label class="form-check-label" for="exampleCheck1">Check me out</label>
                      </div>
                      <button type="submit" class="btn btn-success btn-block">Register</button>
                  </form>
              </div>
              <!-- <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Sign Up</button>
        </div> -->
          </div>
      </div>
  </div>