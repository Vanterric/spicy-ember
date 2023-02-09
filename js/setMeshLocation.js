WL.registerComponent('setMeshLocation', {
    eyeLeft: {type: WL.Type.Object, default: null},
}, {
    init: function() {
        this.tmpVec = glMatrix.vec3.create();
        this.direction = glMatrix.vec3.create();
        this.tmpVec1 = glMatrix.vec3.create();
    },
    start: function() {
        this.eyeLeft.getTranslationWorld(this.tmpVec);
        this.eyeLeft.getForward(this.direction);
        glMatrix.vec3.scale(this.direction, this.direction, 5);
        glMatrix.vec3.add(this.tmpVec, this.tmpVec, this.direction);
        this.object.setTranslationWorld(this.tmpVec);

    },
    update: function(dt) {
        
        
    },
});
