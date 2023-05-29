var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "600",
        "ok": "600",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "331",
        "ok": "331",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6180",
        "ok": "6180",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1759",
        "ok": "1759",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1989",
        "ok": "1989",
        "ko": "-"
    },
    "percentiles1": {
        "total": "352",
        "ok": "352",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3100",
        "ok": "3100",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5775",
        "ok": "5775",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6141",
        "ok": "6141",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 356,
    "percentage": 59
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 19,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 225,
    "percentage": 38
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.667",
        "ok": "16.667",
        "ko": "-"
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
        "total": "353",
        "ok": "353",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6180",
        "ok": "6180",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3477",
        "ok": "3477",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2188",
        "ok": "2188",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4071",
        "ok": "4071",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5538",
        "ok": "5538",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6102",
        "ok": "6102",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6151",
        "ok": "6151",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 25,
    "percentage": 25
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 71,
    "percentage": 71
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
        "ok": "500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "331",
        "ok": "331",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6172",
        "ok": "6172",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1415",
        "ok": "1415",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1756",
        "ok": "1756",
        "ko": "-"
    },
    "percentiles1": {
        "total": "347",
        "ok": "347",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2299",
        "ok": "2299",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5561",
        "ok": "5561",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5982",
        "ok": "5982",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 331,
    "percentage": 66
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 15,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 154,
    "percentage": 31
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "13.889",
        "ok": "13.889",
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
