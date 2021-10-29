import $ from "../core";

$.prototype.get = async function(url, dataTypeAnswer = "json") {
    const result = await fetch(url);

    if(!result.ok) {
        throw new Error(`Could not fetch ${url}, error: ${result.status}`);
    }

    switch (dataTypeAnswer) {
        case "json":
            return await result.json();
        
        case "text":
            return await result.text();
    }
};

$.prototype.post = async function(url, target, dataTypeAnswer = "text") {
    const result = await fetch(url, {
        method: "POST",
        body: target
    });

    switch (dataTypeAnswer) {
        case "json":
            return await result.json();
        
        case "text":
            return await result.text();
    }
};