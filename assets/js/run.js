/* run.js
* Making api calls and timing logic
*/

var socket = io();

function showError(message) {
  $('#topAlert').html(message).show(500);
}

function hideError() {
  $('#topAlert').hide(500);
}

function validateEndpoints(endpoint1, endpoint2) {
  var errMsg = '';
  if (!endpoint1) {
    errMsg = 'Api A';
  }
  if (!endpoint2) {
    if (errMsg) {
      errMsg += ' and ';
    }
    errMsg += 'Api B';
  }
  if (errMsg) {
    errMsg += ' must contain a value!';
    showError(errMsg);
    return false;
  }

  hideError();
  return true;
}

function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);

  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
}

function buttonGo() {
  // check entries in both api boxes
  var endpoint1 = $('#endpointA').val();
  var endpoint2 = $('#endpointB').val();
  if (!validateEndpoints(endpoint1, endpoint2)) {
    return;
  }

  socket.emit('request', endpoint1);

  // create XHR request for A
  // var reqA = createCORSRequest($('#httpMethodA').val(), endpoint1);
  // if (!reqA) {
  //   throw new Error('CORS not supported');
  // }
  // reqA.onload = function (e) {
  //   console.log(reqA.responseText);
  //   window.performance.mark('mark_endA_xhr');
  //   window.performance.measure('measure_xhrA', 'mark_startA_xhr', 'mark_endA_xhr');
  //   console.log('returned', e);
  // }
  // window.performance.mark('mark_startA_xhr');
  // reqA.send();
  // console.log('request sent');

  // if ()
  console.log(endpoint2 ? true : false);
  console.log(endpoint1 == '' ? '(empty)' : endpoint1);
}

$('#buttonGo').on('click', buttonGo);
$('#httpMethodA').on('change', function() {
  $('#httpMethodB').val($('#httpMethodA').val());
});
