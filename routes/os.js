var express = require('express');
var router = express.Router();
var os = require('os');

//get user listening
router.get('/', function(req, res, next) {
    res.json({
        hostName: os.hostname(),
        type: os.type(),

    });
});

//afficher les details du proc
router.get('/details', function(req, res, next) {
    var cpus = os.cpus();
    res.send(cpus);
    for (var i = 0, len = cpus.length; i < len;)
        console.log("cpu : ", cpus[i].model)
});


router.get('/details/:id', function(req, res) {
    res.json(os.cpus()[
        req.params.id
    ]);
});

module.exports = router;