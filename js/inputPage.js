$(function() {
				var imageRadio = document.getElementById('symbolicImage');
			imageRadio.onclick = function() {
		        document.getElementById("imageSelect").style.visibility = "visible";
		    }

		    var qrRadio = document.getElementById('qrCodeSelect');
			qrRadio.onclick = function() {
		        document.getElementById("imageSelect").style.visibility = "hidden";
		    }
		   
		  $('#afterForm').append("<h1> <span>Successful Submission </span></h1> \
			<p> Your input has been saved to the database. <br> \
				Open the <code>MyScan</code> app in Google Glass and look at this image to cue your input on Glass </p> \
			<div id='imageCue'> </div> \
			<a id='download' >Download Image</a>");
        
    });

