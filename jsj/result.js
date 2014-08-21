function popup() {
		qrReferenceNum += 1;
		fb.child("QRNum").set(qrReferenceNum);
		$("#imageCue").qrcode({
		        text    : qrReferenceNum.toString(),
		        render    : "canvas",  // 'canvas' or 'table'. Default value is 'canvas'
		        background : "#ffffff",
		        foreground : "#000000",
		        width : 300,
		        height: 300
		    });

}


function downloadCanvas(link, canvasId, filename, canvasNum) {
    link.href = document.getElementsByTagName("canvas")[canvasNum].toDataURL();
    link.download = filename;
}
		

function doDownload(inputThis, canvasNum) {
	if (document.getElementById('qrCodeSelect').checked == true) {

		var title = document.getElementById("title").value;
		if (title == null || title == "") {
			title = "QR_" + qrReferenceNum ;
		}

	    downloadCanvas(inputThis, 'canvas', title +".png" , canvasNum);
	 }
	 else {
		$("#download").attr("href", img.src).attr("download", "img.jpg");

	 }

}

function hideAfterForm() {

		document.getElementById("afterForm").style.visibility = "hidden";
		document.getElementById("afterForm").style.display = "none";


						
}

function reviewAfterFormHidePrevious() {
			
	document.getElementById("afterForm").style.visibility = "visible";
	document.getElementById("afterForm").style.display = "block";
	//<div id="qrcodeholder"></div><br>
	//alert($('#content').style.visibility);

	document.getElementById("formInput").style.visibility = "hidden";
	document.getElementById("formInput").style.display = "none";

	document.getElementById("helpText").style.visibility = "hidden";
	document.getElementById("helpText").style.display = "none";

		try{
		document.getElementById("addImageDiv").style.visibility = "hidden";
		document.getElementById("addImageDiv").style.display = "none";
	}
	catch(err) {

	}
	
}