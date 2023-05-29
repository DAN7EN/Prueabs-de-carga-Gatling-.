var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "600",
        "ok": "100",
        "ko": "500"
    },
    "minResponseTime": {
        "total": "327",
        "ok": "502",
        "ko": "327"
    },
    "maxResponseTime": {
        "total": "6418",
        "ok": "6418",
        "ko": "6308"
    },
    "meanResponseTime": {
        "total": "1627",
        "ok": "4105",
        "ko": "1132"
    },
    "standardDeviation": {
        "total": "2085",
        "ok": "2293",
        "ko": "1640"
    },
    "percentiles1": {
        "total": "345",
        "ok": "5331",
        "ko": "342"
    },
    "percentiles2": {
        "total": "2611",
        "ok": "5805",
        "ko": "404"
    },
    "percentiles3": {
        "total": "5870",
        "ok": "6391",
        "ko": "5340"
    },
    "percentiles4": {
        "total": "6389",
        "ok": "6411",
        "ko": "6037"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 25,
    "percentage": 4
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 74,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "count": 500,
    "percentage": 83
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.667",
        "ok": "2.778",
        "ko": "13.889"
    }
},
contents: {
"req_proxima-carrera-0ce15": {
        type: "REQUEST",
        name: "Proxima carrera F1",
path: "Proxima carrera F1",
pathFormatted: "req_proxima-carrera-0ce15",
stats: {
    "name": "Proxima carrera F1",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "502",
        "ok": "502",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6418",
        "ok": "6418",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4105",
        "ok": "4105",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2293",
        "ok": "2293",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5331",
        "ok": "5331",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5805",
        "ok": "5805",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6391",
        "ok": "6391",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6411",
        "ok": "6411",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 25,
    "percentage": 25
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 74,
    "percentage": 74
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.778",
        "ok": "2.778",
        "ko": "-"
    }
}
    },"req_todas-las-tempo-6da1c": {
        type: "REQUEST",
        name: "Todas las temporadas",
path: "Todas las temporadas",
pathFormatted: "req_todas-las-tempo-6da1c",
stats: {
    "name": "Todas las temporadas",
    "numberOfRequests": {
        "total": "500",
        "ok": "0",
        "ko": "500"
    },
    "minResponseTime": {
        "total": "327",
        "ok": "-",
        "ko": "327"
    },
    "maxResponseTime": {
        "total": "6308",
        "ok": "-",
        "ko": "6308"
    },
    "meanResponseTime": {
        "total": "1132",
        "ok": "-",
        "ko": "1132"
    },
    "standardDeviation": {
        "total": "1640",
        "ok": "-",
        "ko": "1640"
    },
    "percentiles1": {
        "total": "342",
        "ok": "-",
        "ko": "342"
    },
    "percentiles2": {
        "total": "404",
        "ok": "-",
        "ko": "404"
    },
    "percentiles3": {
        "total": "5340",
        "ok": "-",
        "ko": "5340"
    },
    "percentiles4": {
        "total": "6037",
        "ok": "-",
        "ko": "6037"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 500,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "13.889",
        "ok": "-",
        "ko": "13.889"
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
