var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1200",
        "ok": "501",
        "ko": "699"
    },
    "minResponseTime": {
        "total": "715",
        "ok": "715",
        "ko": "7338"
    },
    "maxResponseTime": {
        "total": "60220",
        "ok": "11009",
        "ko": "60220"
    },
    "meanResponseTime": {
        "total": "10706",
        "ok": "5872",
        "ko": "14170"
    },
    "standardDeviation": {
        "total": "8116",
        "ok": "2747",
        "ko": "8884"
    },
    "percentiles1": {
        "total": "10496",
        "ok": "5705",
        "ko": "11183"
    },
    "percentiles2": {
        "total": "12234",
        "ok": "8363",
        "ko": "14299"
    },
    "percentiles3": {
        "total": "17748",
        "ok": "10158",
        "ko": "18577"
    },
    "percentiles4": {
        "total": "60142",
        "ok": "10492",
        "ko": "60181"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 499,
    "percentage": 42
},
    "group4": {
    "name": "failed",
    "count": 699,
    "percentage": 58
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.667",
        "ok": "6.958",
        "ko": "9.708"
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
        "ok": "501",
        "ko": "699"
    },
    "minResponseTime": {
        "total": "715",
        "ok": "715",
        "ko": "7338"
    },
    "maxResponseTime": {
        "total": "60220",
        "ok": "11009",
        "ko": "60220"
    },
    "meanResponseTime": {
        "total": "10706",
        "ok": "5872",
        "ko": "14170"
    },
    "standardDeviation": {
        "total": "8116",
        "ok": "2747",
        "ko": "8884"
    },
    "percentiles1": {
        "total": "10496",
        "ok": "5705",
        "ko": "11183"
    },
    "percentiles2": {
        "total": "12234",
        "ok": "8363",
        "ko": "14299"
    },
    "percentiles3": {
        "total": "17748",
        "ok": "10158",
        "ko": "18577"
    },
    "percentiles4": {
        "total": "60142",
        "ok": "10492",
        "ko": "60181"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 499,
    "percentage": 42
},
    "group4": {
    "name": "failed",
    "count": 699,
    "percentage": 58
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.667",
        "ok": "6.958",
        "ko": "9.708"
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
