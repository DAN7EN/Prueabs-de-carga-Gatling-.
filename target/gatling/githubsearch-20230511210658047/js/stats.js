var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1200",
        "ok": "553",
        "ko": "647"
    },
    "minResponseTime": {
        "total": "609",
        "ok": "609",
        "ko": "3894"
    },
    "maxResponseTime": {
        "total": "60225",
        "ok": "14265",
        "ko": "60225"
    },
    "meanResponseTime": {
        "total": "10341",
        "ok": "5921",
        "ko": "14119"
    },
    "standardDeviation": {
        "total": "10189",
        "ok": "3276",
        "ko": "12345"
    },
    "percentiles1": {
        "total": "9965",
        "ok": "5774",
        "ko": "10640"
    },
    "percentiles2": {
        "total": "10748",
        "ok": "9153",
        "ko": "12094"
    },
    "percentiles3": {
        "total": "20411",
        "ok": "10559",
        "ko": "60008"
    },
    "percentiles4": {
        "total": "60142",
        "ok": "13722",
        "ko": "60163"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 28,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 519,
    "percentage": 43
},
    "group4": {
    "name": "failed",
    "count": 647,
    "percentage": 54
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.667",
        "ok": "7.681",
        "ko": "8.986"
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
        "ok": "553",
        "ko": "647"
    },
    "minResponseTime": {
        "total": "609",
        "ok": "609",
        "ko": "3894"
    },
    "maxResponseTime": {
        "total": "60225",
        "ok": "14265",
        "ko": "60225"
    },
    "meanResponseTime": {
        "total": "10341",
        "ok": "5921",
        "ko": "14119"
    },
    "standardDeviation": {
        "total": "10189",
        "ok": "3276",
        "ko": "12345"
    },
    "percentiles1": {
        "total": "9965",
        "ok": "5774",
        "ko": "10640"
    },
    "percentiles2": {
        "total": "10748",
        "ok": "9153",
        "ko": "12094"
    },
    "percentiles3": {
        "total": "20411",
        "ok": "10559",
        "ko": "60008"
    },
    "percentiles4": {
        "total": "60142",
        "ok": "13722",
        "ko": "60163"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 28,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 519,
    "percentage": 43
},
    "group4": {
    "name": "failed",
    "count": 647,
    "percentage": 54
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.667",
        "ok": "7.681",
        "ko": "8.986"
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
