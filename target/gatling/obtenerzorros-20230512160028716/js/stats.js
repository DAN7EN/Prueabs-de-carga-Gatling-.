var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1200",
        "ok": "446",
        "ko": "754"
    },
    "minResponseTime": {
        "total": "478",
        "ok": "478",
        "ko": "4652"
    },
    "maxResponseTime": {
        "total": "60213",
        "ok": "10696",
        "ko": "60213"
    },
    "meanResponseTime": {
        "total": "10513",
        "ok": "5369",
        "ko": "13555"
    },
    "standardDeviation": {
        "total": "7864",
        "ok": "2950",
        "ko": "8269"
    },
    "percentiles1": {
        "total": "10360",
        "ok": "4819",
        "ko": "11850"
    },
    "percentiles2": {
        "total": "13196",
        "ok": "8373",
        "ko": "14324"
    },
    "percentiles3": {
        "total": "20446",
        "ok": "9853",
        "ko": "20536"
    },
    "percentiles4": {
        "total": "60026",
        "ok": "10470",
        "ko": "60112"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 14,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 10,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 422,
    "percentage": 35
},
    "group4": {
    "name": "failed",
    "count": 754,
    "percentage": 63
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.901",
        "ok": "6.282",
        "ko": "10.62"
    }
},
contents: {
"req_peticionzorros-318a0": {
        type: "REQUEST",
        name: "PeticionZorros",
path: "PeticionZorros",
pathFormatted: "req_peticionzorros-318a0",
stats: {
    "name": "PeticionZorros",
    "numberOfRequests": {
        "total": "1200",
        "ok": "446",
        "ko": "754"
    },
    "minResponseTime": {
        "total": "478",
        "ok": "478",
        "ko": "4652"
    },
    "maxResponseTime": {
        "total": "60213",
        "ok": "10696",
        "ko": "60213"
    },
    "meanResponseTime": {
        "total": "10513",
        "ok": "5369",
        "ko": "13555"
    },
    "standardDeviation": {
        "total": "7864",
        "ok": "2950",
        "ko": "8269"
    },
    "percentiles1": {
        "total": "10360",
        "ok": "4819",
        "ko": "11850"
    },
    "percentiles2": {
        "total": "13196",
        "ok": "8373",
        "ko": "14324"
    },
    "percentiles3": {
        "total": "20446",
        "ok": "9853",
        "ko": "20536"
    },
    "percentiles4": {
        "total": "60026",
        "ok": "10470",
        "ko": "60112"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 14,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 10,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 422,
    "percentage": 35
},
    "group4": {
    "name": "failed",
    "count": 754,
    "percentage": 63
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.901",
        "ok": "6.282",
        "ko": "10.62"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
