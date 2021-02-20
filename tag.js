"use strict";
class Tag {
    constructor(pwidth, pheight, [lat, lon], globePosition, initialRotation, res) {
        this.coors = [lat, lon];
        this.pos = globePosition;
        this.pwidth = pwidth;
        this.pheight = pheight;
        this.res = res;
        this.rotation = [...initialRotation];
    }
    update(radius, globeRotation) {
        let [lat, lon] = this.coors;
        let [x, y, z] = this.pos;
        z = (radius + 1) * Math.cos(lat + globeRotation[1]) * Math.cos(lon);
        x = (radius + 1) * Math.sin(lat + globeRotation[1]) * Math.cos(lon);
        y = (radius + 1) * Math.sin(lon);
        this.pos = [x, y, z];
        let aux = [...globeRotation];
        this.rotation = [aux[0], aux[1] - 0.4, aux[2]];
    }

    render(globePosition) {
        push()
        translate(...globePosition)
        let [px, py, pz] = this.pos;
        let [rx, ry, rz] = this.rotation;
        translate(px, py, pz);
        rotateX(rx);
        rotateY(ry);
        rotateZ(rz);
        texture(face);
        plane(this.selected?10:4);
        pop();
    }
}
