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
        "total": "577",
        "ok": "577",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1650",
        "ok": "1650",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1037",
        "ok": "1037",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "331",
        "ok": "331",
        "ko": "-"
    },
    "percentiles1": {
        "total": "972",
        "ok": "972",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1134",
        "ok": "1134",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1629",
        "ok": "1629",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1645",
        "ok": "1645",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 25,
    "percentage": 25
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 52,
    "percentage": 52
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 23,
    "percentage": 23
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "14.286",
        "ok": "14.286",
        "ko": "-"
    }
},
contents: {
"req_buscador-de-sii-4ad16": {
        type: "REQUEST",
        name: "Buscador de Siigo",
path: "Buscador de Siigo",
pathFormatted: "req_buscador-de-sii-4ad16",
stats: {
    "name": "Buscador de Siigo",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "577",
        "ok": "577",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1650",
        "ok": "1650",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1037",
        "ok": "1037",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "331",
        "ok": "331",
        "ko": "-"
    },
    "percentiles1": {
        "total": "972",
        "ok": "972",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1134",
        "ok": "1134",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1629",
        "ok": "1629",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1645",
        "ok": "1645",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 25,
    "percentage": 25
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 52,
    "percentage": 52
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 23,
    "percentage": 23
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "14.286",
        "ok": "14.286",
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
