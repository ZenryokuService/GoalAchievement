/** グローバル変数 */
var ctx;

/*
 * ロードマップを描くための初期化処理を行う。
  * setup draw roadMap.
 */
function initRoadMap() {
    // definition of object position
    var firstX = 20;
    var topLineY = 30;
    var defFont = '14px serif';
    // Graphic Context for global "ctx"
    ctx = document.getElementById("roadMap").getContext("2d");
    drawMokuhyoCircle(firstX, topLineY, 'green');
    drawText('first', firstX, topLineY, defFont, 'white');

    drawMokuhyoCircle(firstX + 60, topLineY, 'green');
    drawText('second', firstX + 60, topLineY, defFont, 'white');

}

/** 目標オブジェクトの円を描く */
function drawMokuhyoCircle(posX, posY, color) {
    ctx.beginPath();
    // x座標, y座標, 半径, 描画開始角度, 描画終了角度, 時計回りか否か
    ctx.arc(posX, posY, 20, 0, Math.PI * 2, false);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

/** テキストを描く */
function drawText(text, posX, posY, font, color) {
    ctx.beginPath();
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.fillText(text, posX -13, posY + 5);
    ctx.fill();
    ctx.closePath();
}

/** 四角を描くサンプル */
function drawRectSample() {
    ctx.beginPath();
    ctx.rect(20, 40, 50, 50);
    ctx.fillStyle = '#FF0000';
    ctx.fill();
    ctx.closePath();
}
