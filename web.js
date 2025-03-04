function toRadians(degrees) {
    return degrees * Math.PI / 180;
}

function triangle(value1, type1, value2, type2) {
    console.log("Usage: triangle(value1, 'type1', value2, 'type2')");
    console.log("Types: 'leg', 'hypotenuse', 'adjacent angle', 'opposite angle', 'angle'");
    const validTypes = ["leg", "hypotenuse", "adjacent angle", "opposite angle", "angle"];
    if (!validTypes.includes(type1) || !validTypes.includes(type2)) {
        console.log("ERROR!\nError: Invalid type detected. Please reread instruction.");
        return "failed";
    }
    if (value1 <= 0 || value2 <= 0) {
        console.log("ERROR!\nError: Values must be positive.");
        return "zero or negative input";
    }
    let a, b, c, alpha, beta;
    if ((type1 === "leg" && type2 === "hypotenuse") || (type2 === "leg" && type1 === "hypotenuse")) {
        let leg = type1 === "leg" ? value1 : value2;
        c = type1 === "hypotenuse" ? value1 : value2;
        if (leg >= c) {
            console.log("ERROR!\nError: Leg must be less than hypotenuse.");
            return "failed";
        }
        a = leg;
        b = Math.sqrt(c * c - a * a);
        alpha = Math.asin(a / c) * 180 / Math.PI;
        beta = 90 - alpha;
    }
    else if ((type1 === "leg" && type2 === "opposite angle") || (type2 === "leg" && type1 === "opposite angle")) {
        a = type1 === "leg" ? value1 : value2;
        alpha = type1 === "opposite angle" ? value1 : value2;
        if (alpha >= 90) {
            console.log("ERROR!\nError: Angle must be less than 90 degrees.");
            return "failed";
        }
        c = a / Math.sin(toRadians(alpha));
        b = Math.sqrt(c * c - a * a);
        beta = 90 - alpha;
    }
    else {
        console.log("ERROR!\nError: Unsupported or incompatible type combination.");
        return "failed";
    }
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
    console.log(`c = ${c}`);
    console.log(`alpha = ${alpha}`);
    console.log(`beta = ${beta}`);
    return "success";
}

triangle(7, "leg", 18, "hypotenuse");
triangle(60, "opposite angle", 5, "leg");
triangle(43.13, "angle", -2, "hypotenuse");