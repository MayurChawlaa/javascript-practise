console.log("test");
var pattern = "";
let space = "  "
let count = 1;
for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
        if ((j + i) >= 4) {
            if (count < 9)
                pattern = pattern + " " + "0" + count;
            else
                pattern = pattern + " " + count;

            count++;
        }
        else {
            pattern = pattern + space;
        }
    }
    console.log(pattern);
    pattern = "";
}