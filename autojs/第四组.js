var red = desc("一笔画，点击查看详情")
red.click();
sleep(1000)
{
    var startx = 275;
    var starty = 509;
    var y;
    for(var i=0; i<=2; i++)
    {
        y = parseInt(starty + i*264);
        var x = startx;
        var points = [];
        for(var j=0; j<=2; j++){
            x = parseInt(startx + j*264);
            points.push([x, y]);
        }
        gesture(1000, points[0], points[1], points[2]);
        sleep(100);
    }

    for(var i=0; i<=2; i++)
    {
        x = parseInt(startx + i*264);
        var y = starty;
        var points = [];
        for(var j=0; j<=2; j++){
            y = parseInt(starty + j*264);
            points.push([x, y]);
        }
        gesture(1000, points[0], points[1], points[2]);
        sleep(100);
    }
    sleep(2000);
    click(539,2082);
    sleep(2000);
    back();
}
var redp=id("h3v").findOne();
    log(redp);
    redp.longClick();
    var dele=id("bfa").findOne();
    log(dele);
    dele.click();
    sleep(1000);
    click(520,2079);
    sleep(2000);