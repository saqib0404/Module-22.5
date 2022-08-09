function centimeterToMeter (cm){
    const meter = cm * 0.01;
    return meter;
}
const cm = 100;
const meter = centimeterToMeter(cm);
console.log("Meter:", meter);