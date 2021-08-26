/**
 * closingPopup closes popup either with click / submit
 * @param param1
 * @param param2
 * @param param3
 */
function popupHandler(param1, param2, ...rest) {
    const { message } = rest;

    console.log(`got message ${message}`);
}


popupHandler('click', 'submit', message = 'my message');