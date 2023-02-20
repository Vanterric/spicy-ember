WL.registerComponent('moveFlame', {
    flame: {type: WL.Type.Object, default: null},
    
}, {
    init: function() {
        console.log('init() with param', this.param);
    },
    start: function() {
        this.origin = glMatrix.vec3.create();
        this.direction = glMatrix.vec3.create();
    },
    update: function(dt) {
        this.object.getTranslationWorld(this.origin);
        glMatrix.quat2.getTranslation(this.origin, this.object.transformWorld);
        this.object.getForward(this.direction)
        let rayHit = WL.physics.rayCast( this.origin, this.direction, 6, 10)

        if(rayHit.hitCount>0){
            console.log("Hit!")
            this.flame.resetTranslationRotation();
            this.flame.translate(rayHit.locations[0]);
            this.flame.active = true;
            this._rayHit= {location: rayHit.location[0], object: rayHit.objects[0]};
        } else{
            this.flame.active = false;
            delete this._rayHit;
        }
    },
    
});
