/* run.js
* Making api calls and timing logic
*/

function showError(message) {
  $('#topAlert').html(message).show(500);
}

function hideError() {
  $('#topAlert').hide(500);
}

function checkEndpoints(endpoint1, endpoint2) {
  var errMsg = '';
  if (!endpoint1) {
    errMsg = 'Api 1'
  }
  if (!endpoint2) {
    if (errMsg) {
      errMsg += ' and '
    }
    errMsg += 'Api 2'
  }
  if (errMsg) {
    errMsg += ' must contain a value!';
    showError(errMsg);
    return false;
  }
  return true;
}

function buttonGo() {
  // check entries in both api boxes
  var endpoint1 = $('#endpoint1').val();
  var endpoint2 = $('#endpoint2').val();
  if (!checkEndpoints(endpoint1, endpoint2)) {
    return;
  } else {
    hideError();
  }

  // if ()
  console.log(endpoint2 ? true : false);
  console.log(endpoint1 == '' ? '(empty)' : endpoint1);
}

$('#buttonGo').on('click', buttonGo);
