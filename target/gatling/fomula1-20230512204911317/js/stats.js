var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "376",
        "ok": "376",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4946",
        "ok": "4946",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2723",
        "ok": "2723",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1520",
        "ok": "1520",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2804",
        "ok": "2804",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3889",
        "ok": "3889",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4935",
        "ok": "4935",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4939",
        "ok": "4939",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 23,
    "percentage": 23
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 73,
    "percentage": 73
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.091",
        "ok": "9.091",
        "ko": "-"
    }
},
contents: {
"req_obtener-carrera-53802": {
        type: "REQUEST",
        name: "Obtener carrera",
path: "Obtener carrera",
pathFormatted: "req_obtener-carrera-53802",
stats: {
    "name": "Obtener carrera",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "376",
        "ok": "376",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4946",
        "ok": "4946",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2723",
        "ok": "2723",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1520",
        "ok": "1520",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2804",
        "ok": "2804",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3889",
        "ok": "3889",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4935",
        "ok": "4935",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4939",
        "ok": "4939",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 23,
    "percentage": 23
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 73,
    "percentage": 73
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.091",
        "ok": "9.091",
        "ko": "-"
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
