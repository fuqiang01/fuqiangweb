import Spirit from "./core/Spirit";
import "./core/preload"
// console.log(staticData.bgLight)
const point = {
    x: 10,
    y: 10
}
const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");
// new Spirit(point, staticData.bgLight, 100, 100).show(ctx)