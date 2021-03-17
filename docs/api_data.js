define({ "api": [
  {
    "type": "post",
    "url": "/animal",
    "title": "",
    "name": "CreateAnimal",
    "group": "Animal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type of animal.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Animal name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "weight",
            "description": "<p>Animal weight.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>Animal age in months.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>uid Animal.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"0x2343r7Tv23eD343\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"One or more parameters missing. Please check documentation.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Invalid or undefined age.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/animal.js",
    "groupTitle": "Animal"
  },
  {
    "type": "get",
    "url": "/animal",
    "title": "",
    "name": "getAnimals",
    "group": "Animal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>Size of data.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset of data.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": {\n     \"animals\": [\n         {\n           \"_id\": \"604fb0bf96ddec102272b85f\",\n           \"type\": \"ox\",\n           \"name\": \"test\",\n           \"weight\": 1000,\n           \"age\": 6,\n           \"createdAt\": \"2021-03-15T19:08:47.405Z\",\n           \"updatedAt\": \"2021-03-15T19:08:47.405Z\",\n           \"__v\": 0\n         }\n     ],\n     \"totalCount\": 1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/animal.js",
    "groupTitle": "Animal"
  },
  {
    "type": "get",
    "url": "/animal/:id",
    "title": "",
    "name": "getSpecificAnimal",
    "group": "Animal",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": {\n    \"_id\": \"604fb0bf96ddec102272b85f\",\n    \"type\": \"ox\",\n    \"name\": \"test\",\n    \"weight\": 1000,\n    \"age\": 6,\n    \"createdAt\": \"2021-03-15T19:08:47.405Z\",\n    \"updatedAt\": \"2021-03-15T19:08:47.405Z\",\n    \"__v\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Animal not found in the database, try to pass a valid ID.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/animal.js",
    "groupTitle": "Animal"
  },
  {
    "type": "patch",
    "url": "/animal/:id",
    "title": "",
    "name": "updateAnimal",
    "group": "Animal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Animal type (Optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Animal name (Optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "weight",
            "description": "<p>Animal weight (Optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>Animal age in months (Optional).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Animal not found in the database, try to pass a valid ID.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/animal.js",
    "groupTitle": "Animal"
  }
] });
