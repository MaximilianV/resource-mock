var express = require('express');
var router = express.Router();

// Home page route.
router.get('/', function (req, res) {
    res.json(
        {
            "problems": [
                { "id": 0, "name": "VehicleRoutingProblem" },
                { "id": 1, "name": "TimeWindowProblem" }
            ]
        }
    );
})

router.get('/:problem_id', function (req, res) {
    switch (req.params.problem_id) {
        case "0":
            res.json(
                {
                    "methods": [
                        { "id": 0, "name": "InsertionMethod" },
                        { "id": 1, "name": "TestMethod" }
                    ]
                }
            )
            return;
        case "1":
            res.json(
                {
                    "methods": [
                        { "id": 0, "name": "Test1Method" },
                        { "id": 1, "name": "Test2Method" }
                    ]
                }
            )
            return;
    }
})

// About page route.
router.get('/:problem_id/:method_id', function (req, res) {
    switch (req.params.problem_id) {
        case "0":
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
            }
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