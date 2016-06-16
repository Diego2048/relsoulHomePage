define({ "api": [
  {
    "type": "GET",
    "url": "/account/login",
    "title": "Signin with an existing user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "rememberme",
            "description": "<p>Checkbox to auto-login on revisit.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Your e-mail-address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Your password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Reponse 200": [
          {
            "group": "Reponse 200",
            "type": "json",
            "optional": true,
            "field": "data",
            "defaultValue": "\"\"",
            "description": "<p>如果有数据返回</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "front-dev/Apidoc/user.js",
    "group": "D__soft_phpstudy_WWW_relsoul_front_dev_Apidoc_user_js",
    "groupTitle": "D__soft_phpstudy_WWW_relsoul_front_dev_Apidoc_user_js",
    "name": "GetAccountLogin"
  },
  {
    "type": "GET",
    "url": "/account/register",
    "title": "Register a new user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "terms",
            "description": "<p>Checkbox to accept the terms.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Your e-mail-address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Your password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Your firstname.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Your lastname.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>Your birthday.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "front-dev/Apidoc/user.js",
    "group": "D__soft_phpstudy_WWW_relsoul_front_dev_Apidoc_user_js",
    "groupTitle": "D__soft_phpstudy_WWW_relsoul_front_dev_Apidoc_user_js",
    "name": "GetAccountRegister"
  }
] });