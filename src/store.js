export default {
    state: { 
        NumGold: 0,
        Activity: [],
    },
    //creamos funcion nuevo oro
    generateGold: function (newGold) {
        this.state.NumGold = this.state.NumGold + newGold
    },
    //
    addActivity: function (actividad) {
        this.state.Activity.push(actividad)
    },
    // PROYECTO NINJA ORO RESET, reseteamos oro y actividades//

    //manejador de reset oro para que quede en 0
    resetGold: function () {
        this.state.NumGold = 0
    },
    //manejador para reset actividades para que quede vacío []
    resetActivities: function () {
        this.state.Activity = []

    }

    
}