var express = require('express');
var router = express.Router();

// Home page route.
router.get('/', function (req, res) {
    res.json(
        {
            "methods": [
                { "id": 0, "name": "VehicleRoutingProblem" },
                { "id": 1, "name": "TimeWindowProblem" }
            ]
        }
    );
})

// About page route.
router.get('/:method_id', function (req, res) {
    switch (req.params.method_id) {
        case "0":
            res.json(
                {
                    "inputs": [
                        { "id": 0, "name": "parcel" },
                        { "id": 1, "parcel": "recipient data" }
                    ],
                    "outputs": [
                        { "id": 0, "name": "parcel" }
                    ]
                }
            )
            return;
        case "1":
            res.json(
                {
                    "inputs": [
                        { "id": 0, "name": "address" },
                        { "id": 1, "name": "deliverer" }
                    ]
                }
            )
            return;
    }
})

module.exports = router;