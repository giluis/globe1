class Globe {

    static MAX_VEL = [0.03, 0.1, 0.1];
    static MIN_VEL = [0, 0, 0]
    static NORMAL_ACC = [0, 2e-4, 0];
    static NORMAL_DESACC = [0, -3e-4, 0];
    constructor(radius, position, initialRotation, res) {
        this.initialPosition = position;
        let [rx, ry, rz] = initialRotation;
        this.pos = [...position];
        this.radius = radius;
        this.rotationVel = [0, 0, 0];
        this.rotation = [rx, ry, rz];
        this.rotationAcc = [0, 0, 0];
        this.res = res;
        this.isRotating = true;
        this.radians = true;
    }
    perimeter() {
        return this.radius * 2 * PI;
    }

    latVector(lat) {
        if (lat == 0)
            return [0, 0, 0];
        return [Math.sin(lat), 0, Math.cos(lat)];
    }

    lonVector(lon) {
        if (lon === 0)
            return [0, 0, 0]
        return [0, Math.sin(lon), Math.cos(lon)];
    }

    surfacePTranslation(lat, lon) {
        let la = lat ? this.latVector(lat) : [0, 0, 0];
        let lo = lon ? this.lonVector(lon) : [0, 0, 0];
        return [(la[0] + lo[0]), (la[1] + lo[1]), la[2] + lo[2]];
    }


    markPoint(lat, lon) {
        let translateVector = this.surfacePTranslation(lat, lon).map(c => c * this.radius);
        let latVector = this.latVector(lat);
        let lonVector = this.lonVector(lon);
        push();
        let z = (this.radius + 1) * Math.cos(lat + this.rotation[1]) * Math.cos(lon);
        let x = (this.radius + 1) * Math.sin(lat + this.rotation[1]) * Math.cos(lon);
        let y = (this.radius + 1) * Math.sin(lon);
        
        translate(...this.pos);
        translate(x, y, z);
        stroke(0, 255, 0);
        strokeWeight(3);
        fill(0, 0, 255);
        plane(3)
        pop()
    }

    halt() {
        this.rotationVel = 0;
    }

    move() {
        this.isRotating = [...Globe.MAX_VEL];
    }

    start() {
        this.rotationAcc = [...Globe.NORMAL_ACC];
        this.isRotating = true;
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
            } else if (v < Globe.MIN_VEL[i]) {
                this.rotationAcc[i] = 0;
                return Globe.MIN_VEL[i];
            }
            return v;
        })
    }
    update() {
        this.limitVel();
        this.rotationVel = this.rotationVel.map((v, i) => v + this.rotationAcc[i]);
        this.rotation = this.rotation.map((r, i) => r + this.rotationVel[i]);
    }




    render() {
        push()
        let [px, py, pz] = this.pos;
        let [rx, ry, rz] = this.rotation;
        translate(...this.pos);
        rotateY(ry);
        rotateX(rx);
        rotateZ(rz);
        texture(img);
        noStroke();
        sphere(this.radius, this.res, this.res);
        pop();
    }
}