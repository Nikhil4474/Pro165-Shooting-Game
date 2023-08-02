AFRAME.registerComponent("enemy-bullets", {
    init: function () {
        setInterval(this.shootEnemyBullet, 2000)
    },
    shootEnemyBullet: function () {
        var tanks = document.querySelectorAll(".enemy")
        for(var i=0;i<tanks.length;i++){
            var enemeyBullet = document.createElement("a-entity")
            enemeyBullet.setAttribute("geometry",{
                primitive:"sphere",
                radius:0.1
            })
            enemeyBullet.setAttribute("material",{
                color:"red"
            })

            var position = tanks[i].getAttribute("position")
            enemeyBullet.setAttribute("position",{
                x:position.x+1,
                y:position.y+2.5,
                z:position.z,
            })

            enemeyBullet.setAttribute("dynamic-body",{
                shape:"sphere",
                mass:"0"
            })

            enemeyBullet.setAttribute("velocity",{x:0,y:0,z:20})

            var scene= document.querySelector("#scene")
            scene.appendChild(enemeyBullet)
            console.log("Emeny is created")

        }

    },

});