class Tag {
    static MAX_VEL = {
        rMaxVel: [0.03,0.1,0.1],
        tMaxVel: [1,1,1]
    }
    static MIN_VEL = {
        rMinVel: [0,0,0],
        tMinVel: [0,0,0]
    };
    static NORMAL_ACC = {
        rNormalAcc: [0,1,0],
        tNormalAcc: [0,-3e-4,0]
    }
    static NORMAL_DESACC ={
        rNormalDesac: [0,-3e-4,0],
        tNormalDesac: [0,-3e-4,0],
    } 
    /**
     * 
     * @param {number} radius 
     * @param {number} thicc 
     * @param {number[]} position 
     * @param {number[]} initialRotation 
     * @param {number} res 
     */
    constructor(pwidth ,pheight, position, initialRotation, res) {
        let [px, py, pz] = position;
        let [rx,ry,rz] = initialRotation;
        this.pos = [px, py, pz];
        this.pwidth = pwidth;
        this.pheight = +pheight;
        this.vel = {
            rvel:[0,0,0],
            tvel: [0,0,0]
        }
        this.acc = {
            racc: [0,0,0],
            tacc: [0,0,0]
        }
        this.res = res;
        this.rotation = [rx,ry,rz];
        this.isRotating = true;
    }


    halt() {
        this.vel = 0;
    }

    move() {
        this.isRotating = [...Tag.MAX_VEL];
    }

    startRotation() {
        this.acc.racc = [...Tag.NORMAL_ACC.rNormalAcc];
        this.isRotating = true;
    }

    stopRotation() {
        this.rotationAcc = [...Tag.NORMAL_DESACC.rNormalDesac];
        this.isRotating = false;
    }

    toggleRotation() {
        if (!this.isRotating)
            this.startRotation();
        else
            this.stopRotaion();

    }

    limitvel() {
        const {rvel, tvel} = this.vel;
        const {rMaxVel,tMaxVel} = Tag.MAX_VEL;
        const {rMinVel,tMinVel} = Tag.MIN_VEL;
        // console.log(rvel,tvel);
        // console.log(rMaxVel,tMaxVel);
        // console.log(rMinVel,tMinVel);
        let newRotationVel= rvel.map((v, i) => {
            if (v > rMaxVel[i]) {
                this.acc.racc[i] = 0;
                return rMaxVel[i];
            } else if (v < rMinVel[i]) {
                this.acc.racc[i] = 0;
                return rMinVel[i];
            }
            return v;
        })
        let newTranslationVel= tvel.map((v, i) => {
            if (v > tMaxVel[i]) {
                this.acc.tacc[i] = 0;
                return tMaxVel[i];
            } else if (v < tMinVel[i]) {
                this.acc.tacc[i] = 0;
                return tMinVel[i];
            }
            return v;
        })
        this.vel = {
            rvel: newRotationVel,
            tvel: newTranslationVel,
        }
    }
    update() {
        this.limitvel();
        this.updateVel()
        this.updateRotation();
        this.updatePos();
        console.log(this.rotation);
    }

    updateVel(){
        this.vel.rvel = this.vel.rvel.map((v,i)=>v+this.acc.racc[i]);
        this.vel.tvel = this.vel.tvel.map((v,i)=>v+this.acc.tacc[i]);
        console.log(this.vel);
        console.log(this.acc);
    }

    updateRotation(){
        this.rotation = this.rotation.map((r,i)=>r+this.vel.rvel[i]);//r
    }

    updatePos(){
        this.pos = this.pos.map((p,i)=>p+this.vel.tvel[i]);//t
    }



    render() {
        push()
        let [px, py, pz] = this.pos;
        let [rx, ry, rz] = this.rotation;
        translate(px, py, pz);
        rotateX(rx);
        rotateY(ry);
        rotateZ(rz);
        texture(face);
        plane(100);
        pop();
    }
}