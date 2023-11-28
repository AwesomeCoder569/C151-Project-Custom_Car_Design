AFRAME.registerComponent("car", {
    schema: {
        rotation: { type: "number", default: 180 },
        scale: { type: "number", default: 0.5 }
    },

    init: function() {
        this.el.setAttribute("geometry", {
            rotation: this.data.rotation,
            scale: this.data.scale
        });
    }
});