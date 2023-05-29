var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "500",
        "ok": "474",
        "ko": "26"
    },
    "minResponseTime": {
        "total": "1194",
        "ok": "1194",
        "ko": "4872"
    },
    "maxResponseTime": {
        "total": "11511",
        "ok": "11511",
        "ko": "5322"
    },
    "meanResponseTime": {
        "total": "4859",
        "ok": "4848",
        "ko": "5067"
    },
    "standardDeviation": {
        "total": "1996",
        "ok": "2049",
        "ko": "109"
    },
    "percentiles1": {
        "total": "4469",
        "ok": "4345",
        "ko": "5051"
    },
    "percentiles2": {
        "total": "5722",
        "ok": "5989",
        "ko": "5113"
    },
    "percentiles3": {
        "total": "10482",
        "ok": "10484",
        "ko": "5215"
    },
    "percentiles4": {
        "total": "11312",
        "ok": "11313",
        "ko": "5296"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 473,
    "percentage": 95
},
    "group4": {
    "name": "failed",
    "count": 26,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "41.667",
        "ok": "39.5",
        "ko": "2.167"
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
        "total": "500",
        "ok": "474",
        "ko": "26"
    },
    "minResponseTime": {
        "total": "1194",
        "ok": "1194",
        "ko": "4872"
    },
    "maxResponseTime": {
        "total": "11511",
        "ok": "11511",
        "ko": "5322"
    },
    "meanResponseTime": {
        "total": "4859",
        "ok": "4848",
        "ko": "5067"
    },
    "standardDeviation": {
        "total": "1996",
        "ok": "2049",
        "ko": "109"
    },
    "percentiles1": {
        "total": "4469",
        "ok": "4345",
        "ko": "5051"
    },
    "percentiles2": {
        "total": "5722",
        "ok": "5989",
        "ko": "5113"
    },
    "percentiles3": {
        "total": "10482",
        "ok": "10484",
        "ko": "5215"
    },
    "percentiles4": {
        "total": "11312",
        "ok": "11313",
        "ko": "5296"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 473,
    "percentage": 95
},
    "group4": {
    "name": "failed",
    "count": 26,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "41.667",
        "ok": "39.5",
        "ko": "2.167"
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
