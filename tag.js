"use strict";
class Tag {
    constructor(pwidth, pheight, [lat, lon], globePosition, initialRotation, res,selectedImage) {
        this.coors = [lat, lon];
        this.pos = globePosition;
        this.pwidth = pwidth;
        this.pheight = pheight;
        this.res = res;
        this.rotation = [...initialRotation];
        this.selectedImage = selectedImage;
    }

    defineTexture(face, name) {
        this.name = name;
        this.face = face;
    }
    update(radius, globeRotation) {
        let [x, y, z] = Tag.calcPosChange(this.coors,radius, globeRotation);
        this.pos = [x, y, z];
        let aux = [...globeRotation];
        this.rotation = [aux[0], aux[1] - 0.4, aux[2]];
    }

    static calcPosChange([lat, lon], radius, globeRotation) {
        let z = (radius + 1) * Math.cos(lat + globeRotation[1]) * Math.cos(lon);
        let x = (radius + 1) * Math.sin(lat + globeRotation[1]) * Math.cos(lon);
        let y = (radius + 1) * Math.sin(lon);
        return [x, y, z];
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
        if(this.selected){
            translate(0,0,-4)
            texture(this.selectedImage);
        }
        noStroke();
        plane(this.selected ? 10 : 4);
        pop();
    }
}
