/**
 * Created by TKlas on 13.1.2018 г..
 */

function solve(r, h) {
    let volume = Math.PI * Math.pow(r, 2) * (h/3);
    let area = Math.PI * r * (r + Math.sqrt(h * h + r * r));
    console.log(`volume = ${volume.toFixed(4)}\narea = ${area.toFixed(4)}`)
}

solve(3, 5);
