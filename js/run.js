/* run.js
* Making api calls and timing logic
*/

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

function buttonGo() {
  // check entries in both api boxes
  var endpoint1 = $('#endpointA').val();
  var endpoint2 = $('#endpointB').val();
  if (!validateEndpoints(endpoint1, endpoint2)) {
    return;
  }

  // create XHR request
  var reqA = new XMLHttpRequest();
  reqA.open('GET', endpoint1, true);
  reqA.onload = function (e) {
    window.performance.mark('mark_endA_xhr');
    window.performance.measure('measure_xhrA', 'mark_startA_xhr', 'mark_endA_xhr');
    console.log('returned', e);
  }
  window.performance.mark('mark_startA_xhr');
  reqA.send();
  console.log('request sent');

  // if ()
  console.log(endpoint2 ? true : false);
  console.log(endpoint1 == '' ? '(empty)' : endpoint1);
}

$('#buttonGo').on('click', buttonGo);
$('#httpMethodA').on('change', function() {
  $('#httpMethodB').val($('#httpMethodA').val());
});
