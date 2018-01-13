/**
 * Created by TKlas on 12.1.2018 г..
 */

function solve(w, h, W, H) {
    let firstRectangle = H * W;
    let secondRecrangle = h * w;
    let minW = Math.min(W,w);
    let minH = Math.min(H, h);
    let commonArea = minW * minH;
    let output = firstRectangle + secondRecrangle - commonArea;
    console.log(output)
}

solve(13, 2, 5, 8);

