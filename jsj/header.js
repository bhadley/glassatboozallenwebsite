$(function() {

  $('.navbar-wrapper').append("<ul> \
            <div class='container'> \
        <div class='active navbar navbar-inverse navbar-static-top' role='navigation'> \
          <div class='container'> \
            <div  class='navbar-header'> \
              <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'> \
                <span class='sr-only'>Toggle navigation</span> \
                <span class='icon-bar'></span> \
                <span class='icon-bar'></span> \
                <span class='icon-bar'></span> \
              </button> \
            </div> \
            <div class='navbar-collapse collapse'> \
              <ul class='nav navbar-nav'> \
              <li id='home'><a href='index.html'>Glass@BoozAllen</a></li> \
              <li class='dropdown' id='demos'> \
                  <a href='#' class='dropdown-toggle' data-toggle='dropdown'>Demos & Tutorials <span class='caret'></span></a> \
                  <ul class='dropdown-menu' role='menu'> \
                    <li><a href='demos.html'>Main</a></li>\
                    <li class='divider'></li>\
                    <li class='dropdown-header'>Tutorials</li>\
                    <li><a href='labDemo.html'>In the Lab</a></li>\
                    <li><a href='sensorDemos.html'>Sensor Demos</a></li>\
                  </ul>\
                </li>\
                <li id='texthere'><a href='basicInput.html'>Text Input</a></li> \
                <li id='diagram'><a href='diagramInput.html'>Diagram Input</a></li> \
                <li id='sensors'><a href='sensors.html'>Sensors</a></li> \
                <li id='specs'><a href='techSpecs.html'>Tech Specs</a></li> \
                <li id='about'><a href='about.html'>About</a></li> \
              </ul> \
            </div> \
          </div> \
        </div> \
      </div>");

   
     });