var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50",
        "ok": "50",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "293",
        "ok": "293",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1766",
        "ok": "1766",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "730",
        "ok": "730",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "444",
        "ok": "444",
        "ko": "-"
    },
    "percentiles1": {
        "total": "438",
        "ok": "438",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1209",
        "ok": "1209",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1339",
        "ok": "1339",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1564",
        "ok": "1564",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 29,
    "percentage": 58
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8,
    "percentage": 16
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 13,
    "percentage": 26
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.163",
        "ok": "1.163",
        "ko": "-"
    }
},
contents: {
"req_obtener-todos-l-7b1a8": {
        type: "REQUEST",
        name: "Obtener_Todos_Los_Perros",
path: "Obtener_Todos_Los_Perros",
pathFormatted: "req_obtener-todos-l-7b1a8",
stats: {
    "name": "Obtener_Todos_Los_Perros",
    "numberOfRequests": {
        "total": "50",
        "ok": "50",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "293",
        "ok": "293",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1766",
        "ok": "1766",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "730",
        "ok": "730",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "444",
        "ok": "444",
        "ko": "-"
    },
    "percentiles1": {
        "total": "438",
        "ok": "438",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1209",
        "ok": "1209",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1339",
        "ok": "1339",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1564",
        "ok": "1564",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 29,
    "percentage": 58
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8,
    "percentage": 16
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 13,
    "percentage": 26
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.163",
        "ok": "1.163",
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
