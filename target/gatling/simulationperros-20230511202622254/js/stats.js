var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2500",
        "ok": "2102",
        "ko": "398"
    },
    "minResponseTime": {
        "total": "283",
        "ok": "283",
        "ko": "4148"
    },
    "maxResponseTime": {
        "total": "39447",
        "ok": "39447",
        "ko": "19310"
    },
    "meanResponseTime": {
        "total": "4946",
        "ok": "3857",
        "ko": "10699"
    },
    "standardDeviation": {
        "total": "4632",
        "ok": "4106",
        "ko": "2524"
    },
    "percentiles1": {
        "total": "3390",
        "ok": "2062",
        "ko": "10799"
    },
    "percentiles2": {
        "total": "9277",
        "ok": "6187",
        "ko": "11685"
    },
    "percentiles3": {
        "total": "12075",
        "ok": "11239",
        "ko": "14968"
    },
    "percentiles4": {
        "total": "17245",
        "ok": "16411",
        "ko": "17714"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 679,
    "percentage": 27
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 119,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1304,
    "percentage": 52
},
    "group4": {
    "name": "failed",
    "count": 398,
    "percentage": 16
},
    "meanNumberOfRequestsPerSecond": {
        "total": "49.02",
        "ok": "41.216",
        "ko": "7.804"
    }
},
contents: {
"req_r-obtenerlistad-18f10": {
        type: "REQUEST",
        name: "R_ObtenerListadoPerros",
path: "R_ObtenerListadoPerros",
pathFormatted: "req_r-obtenerlistad-18f10",
stats: {
    "name": "R_ObtenerListadoPerros",
    "numberOfRequests": {
        "total": "2500",
        "ok": "2102",
        "ko": "398"
    },
    "minResponseTime": {
        "total": "283",
        "ok": "283",
        "ko": "4148"
    },
    "maxResponseTime": {
        "total": "39447",
        "ok": "39447",
        "ko": "19310"
    },
    "meanResponseTime": {
        "total": "4946",
        "ok": "3857",
        "ko": "10699"
    },
    "standardDeviation": {
        "total": "4632",
        "ok": "4106",
        "ko": "2524"
    },
    "percentiles1": {
        "total": "3390",
        "ok": "2062",
        "ko": "10799"
    },
    "percentiles2": {
        "total": "9277",
        "ok": "6187",
        "ko": "11685"
    },
    "percentiles3": {
        "total": "12075",
        "ok": "11239",
        "ko": "14968"
    },
    "percentiles4": {
        "total": "17245",
        "ok": "16411",
        "ko": "17714"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 679,
    "percentage": 27
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 119,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1304,
    "percentage": 52
},
    "group4": {
    "name": "failed",
    "count": 398,
    "percentage": 16
},
    "meanNumberOfRequestsPerSecond": {
        "total": "49.02",
        "ok": "41.216",
        "ko": "7.804"
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
