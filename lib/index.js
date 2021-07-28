"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _request = _interopRequireDefault(require("request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EmailValidator = /*#__PURE__*/function () {
  function EmailValidator() {
    var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

    _classCallCheck(this, EmailValidator);

    this.token = token;
  }

  _createClass(EmailValidator, [{
    key: "verify",
    value: function verify(address) {
      var options = {
        method: 'POST',
        url: 'https://sendpalm.com/api/check_email',
        headers: {
          'content-type': 'application/json',
          'authorization': this.token
        },
        body: {
          toEmail: address
        },
        json: true
      };
      console.log("options: ", options);
      return new Promise(function (resolve, reject) {
        (0, _request["default"])(options, function (error, response, body) {
          // if (error) throw new Error(error)
          // console.log(body)
          if (error) {
            reject(new Error(error));
          }

          resolve(body);
        });
      });
    }
  }]);

  return EmailValidator;
}();

exports["default"] = EmailValidator;