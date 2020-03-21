<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <!--library scripts-->
  <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  <!--custom scripts-->
  <script src="tracker.js"></script>
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  <!--Custom css-->
  <link rel="stylesheet" href="main-style.css">
  <link rel="stylesheet" href="header-style.css">
  <link rel="stylesheet" href="player-style.css">
  <!--Title-->
  <title>Condition Tracker</title>
</head>

<body onload="load()">
  <div id="page-wrap">

    <div id="header" class="header">
      <div class="logo">
        <img src="Resources/Logo.png" alt="Condition Tracker">
      </div>
      <div class="dropdown">
        <button class="btn drop-btn">
          <img src="Resources/drop-menu-button.png" alt="Condition Tracker">
        </button>
        <div class="drop-content title card">
          <button class="btn" onClick="getName()">Add Player</button>
          <button class="btn">Temp Button</button>
          <button class="btn">Temp Button</button>
        </div>
      </div>
    </div>

    <div id="card-wrap"></div>
    <!--Modals-->
    <!--Delete check modal-->
    <button id="delete-chceck-toggle" type="button" class="hidden" data-toggle="modal" data-target="#delete-check"></button>
    <div class="modal" id="delete-check" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title title">Delete Player</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Are you sure you want to delete <span id="player-delete-name"></span> ?</p>
          </div>
          <div class="modal-footer">
            <button id="delete-confirm-button" type="button" class="btn dialog-btn" data-toggle="modal" data-target="#delete-check">Yes</button>
          </div>
        </div>
      </div>
    </div>
    <!--Create player modal-->
    <button id="create-player-toggle" type="button" class="hidden" data-toggle="modal" data-target="#create-player"></button>
    <div class="modal" id="create-player" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header title">
            Add Player
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">Name</span>
              </div>
              <input id="create-player-name" type="text" class="form-control">
            </div>
          </div>
          <div class="modal-footer">
            <button id="create-player-button" type="button" class="btn dialog-btn" data-toggle="modal" data-target="#create-player" onClick="addCard()">Create</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Analytics -->

</body>
<footer>
  <div id="footer-wrap">

  </div>
</footer>

</html>
