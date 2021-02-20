"use strict";
class Globe {
    constructor(radius, position, initialRotation, res) {
        this.pos = [...position];
        this.rotation = [...initialRotation];
        this.radius = radius;
        this.rotationVel = [0, 0, 0];
        this.rotationAcc = [0, 0, 0];
        this.res = res;
        this.isRotating = true;
        this.radians = true;
        this.tags = [];
    }
    perimeter() {
        return this.radius * 2 * Math.PI;
    }
    latVector(lat) {
        if (lat == 0)
            return [0, 0, 0];
        return [Math.sin(lat), 0, Math.cos(lat)];
    }
    lonVector(lon) {
        if (lon === 0)
            return [0, 0, 0];
        return [0, Math.sin(lon), Math.cos(lon)];
    }
    surfacePTranslation(lat, lon) {
        let la = lat ? this.latVector(lat) : [0, 0, 0];
        let lo = lon ? this.lonVector(lon) : [0, 0, 0];
        return [(la[0] + lo[0]), (la[1] + lo[1]), la[2] + lo[2]];
    }
    start() {
        this.rotationAcc = [...Globe.NORMAL_ACC];
        this.isRotating = true;
    }
    addTag(tWidth, tHeight, [lat, lon]) {
        let t = new Tag(tWidth, tHeight, [lat, lon], this.pos, this.rotation, 24);
        this.tags.push(t);
    }
    stop() {
        this.rotationAcc = [...Globe.NORMAL_DESACC];
        this.isRotating = false;
    }
    toggleRotation() {
        if (!this.isRotating)
            this.start();
        else
            this.stop();
    }
    limitVel() {
        this.rotationVel = this.rotationVel.map((v, i) => {
            if (v > Globe.MAX_VEL[i]) {
                this.rotationAcc[i] = 0;
                return Globe.MAX_VEL[i];
            }
            else if (v < Globe.MIN_VEL[i]) {
                this.rotationAcc[i] = 0;
                return Globe.MIN_VEL[i];
            }
            return v;
        });
    }
    //
    update() {
        this.limitVel();
        this.rotationVel = this.rotationVel.map((v, i) => v + this.rotationAcc[i]);
        this.rotation = this.rotation.map((r, i) => r + this.rotationVel[i]);
        this.tags.forEach(t => t.update(this.radius, this.rotation));
    }

    selectNextTag(){
        let s;
        for(let i = 0; i< this.tags.length;i++){
            if(this.tags[i].selected){
                if(i== this.tags.length-1)
                    s = 0;
                else
                    s = i+1;
                this.tags[i].selected = false;
            }
        }
        if(!s)
            this.tags[0].selected = true;
        this.tags[s].selected = true;
    }

    render() {

        push()
        let [rx, ry, rz] = globe.rotation;
        translate(...globe.pos);
        rotateY(ry);
        rotateX(rx);
        rotateZ(rz);
        texture(img);
        noStroke();
        sphere(globe.radius, globe.res, globe.res);
        pop();
        globe.tags.forEach(t => t.render(this.pos));
    }
}
Globe.MAX_VEL = [0.03, 0.01, 0.1];
Globe.MIN_VEL = [0, 0, 0];
Globe.NORMAL_ACC = [0, 1e-4, 0];
Globe.NORMAL_DESACC = [0, -3e-4, 0];
