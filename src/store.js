export default {
    state: { 
        NumGold: 0,
        Activity: [],
    },
    generateGold: function (newGold) {
        this.state.NumGold = this.state.NumGold + newGold
    },
    addActivity: function (actividad) {
        this.state.Activity.push(actividad)
    }
}