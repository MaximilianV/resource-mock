var express = require('express');
var router = express.Router();

// Home page route.
router.get('/', function (req, res) {
    res.json(
        {
            "resources": [
                { "id": 0, "name": "bed" },
                { "id": 1, "name": "patient" },
                { "id": 2, "name": "parcel" },
                { "id": 3, "name": "recipient data" }
            ]
        }
    );
})

// About page route.
router.get('/:resource_id', function (req, res) {
    switch (req.params.resource_id) {
        case "0":
            res.json(
                {
                    "attributes": [
                        { "id": 0, "name": "Department", "type": "string" },
                        { "id": 1, "name": "Room", "type": "integer" },
                        { "id": 2, "name": "Occupied", "type": "boolean" }
                    ]
                }
            )
            return;
        case "1":
            res.json(
                {
                    "attributes": [
                        { "id": 0, "name": "Name", "type": "string" },
                        { "id": 1, "name": "DaysOfStay", "type": "integer" }
                    ]
                }
            )
            return;
        case "2":
            res.json(
                {
                    "attributes": [
                        { "id": 0, "name": "Recipient", "type": "string" },
                        { "id": 1, "name": "Address", "type": "string" },
                        { "id": 2, "name": "Estimated Date of Delivery", "type": "date" }
                    ]
                }
            )
            return;
        case "3":
            res.json(
                {
                    "attributes": [
                        { "id": 0, "name": "Name", "type": "string" },
                        { "id": 1, "name": "Address", "type": "string" },
                        { "id": 2, "name": "Phonenumber", "type": "string" }
                    ]
                }
            )
            return;
    }
})

module.exports = router;